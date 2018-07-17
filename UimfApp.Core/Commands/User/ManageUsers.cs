namespace UimfApp.Core.Commands.User
{
	using System.Collections.Generic;
	using System.Linq;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Help;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.EntityFramework;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.CustomProperties;
	using UimfApp.Infrastructure.Forms.Inputs;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users;
	using UimfApp.Users.Commands;
	using UimfApp.Users.Pickers;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Input.Dropdown;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[MyForm(Id = "users", PostOnLoad = true, Label = "Users", Menu = UserMenus.Main, MenuOrderIndex = 1,
		SubmitButtonLabel = UiFormConstants.SearchLabel)]
	[Secure(typeof(UserActions), nameof(UserActions.ManageUsers))]
	[Documentation(DocumentationPlacement.Inline, DocumentationSourceType.String,
		"This page shows list of all users registered in the system. As `UserAdmin` you are able to " +
		"create and deactivate user accounts. Deactivated accounts won't be able to login and use the " +
		"system (if user is already logged in, they will be logged out automatically).")]
	[CssClass(UiFormConstants.InputsVerticalMultipleColumn)]
	public class ManageUsers : Form<ManageUsers.Request, ManageUsers.Response>
	{
		public enum UserActivation
		{
			Active = 1,
			NotActive = 2
		}

		private readonly UserSecurityContext permissionManager;
		private readonly UserManager<ApplicationUser> userManager;

		public ManageUsers(
			UserManager<ApplicationUser> userManager,
			UserSecurityContext permissionManager)
		{
			this.userManager = userManager;
			this.permissionManager = permissionManager;
		}

		protected override Response Handle(Request message)
		{
			var query = this.userManager.Users
				.Include(t => t.Roles)
				.ThenInclude(t => t.Role)
				.AsNoTracking();

			if (!string.IsNullOrEmpty(message.Email?.Value))
			{
				query = query.Where(u => u.Email.Contains(message.Email.Value));
			}

			if (!string.IsNullOrEmpty(message.Name))
			{
				query = query.Where(u => u.UserName.Contains(message.Name));
			}

			if (message.Id != null)
			{
				query = query.Where(u => u.Id.Equals(message.Id));
			}

			if (message.Roles?.Items?.Count > 0)
			{
				query = query.Where(u => u.Roles.Any(t => message.Roles.Items.Contains(t.Role.Name)));
			}

			if (message.Activation != null)
			{
				query = message.Activation.Value == UserActivation.Active
					? query.Where(u => u.Active)
					: query.Where(u => !u.Active);
			}

			var result = query
				.OrderBy(t => t.Id)
				.Paginate(t => new Item(t, this), message.Paginator);

			return new Response
			{
				Users = result,
				Actions = this.permissionManager.CanAccess<AddUser>()
					? new ActionList(AddUser.Button())
					: null
			};
		}

		private ActionList GetActions(ApplicationUser user)
		{
			var result = new ActionList();
			var isAdmin = user.Roles.Any(t => t.Role.Name == UserManagementRoles.UserAdmin.Name);

			if (this.permissionManager.CanAccess<EditUser>())
			{
				result.Actions.Add(EditUser.Button(user.Id, UiFormConstants.EditLabel).WithCustomUi("btn-primary btn-sm"));
			}

			if (this.permissionManager.CanAccess<StartImpersonation>())
			{
				result.Actions.Add(StartImpersonation.Button(user.Id));
			}

			if (!user.HasLoggedIn && this.permissionManager.CanAccess<DeleteUser>())
			{
				result.Actions.Add(DeleteUser.Button(user.Id, UiFormConstants.DeleteLabel).WithCustomUi("btn-danger btn-sm"));
			}

			var hasPassword = this.userManager.HasPasswordAsync(user).Result;

			if (!hasPassword && !user.EmailConfirmed && this.permissionManager.CanAccess<ResendAccountConfirmationEmail>())
			{
				result.Actions.Add(ResendAccountConfirmationEmail.Button(user.Id).WithCustomUi("btn-primary btn-sm"));
			}

			if (!isAdmin
				&& this.permissionManager.CanAccess<ActivateUser>()
				&& !user.Active)
			{
				result.Actions.Add(ActivateUser.Button(user.Id).WithCustomUi("btn-success btn-sm"));
			}

			if (!isAdmin
				&& this.permissionManager.CanAccess<DeactivateUser>()
				&& user.Active)
			{
				result.Actions.Add(DeactivateUser.Button(user.Id).WithCustomUi("btn-danger btn-sm"));
			}

			return result;
		}

		public class Request : IRequest<Response>
		{
			[InputField(OrderIndex = 4)]
			public DropdownValue<UserActivation> Activation { get; set; }

			[InputField(OrderIndex = 3)]
			public Email Email { get; set; }

			[InputField(OrderIndex = 0)]
			[PositiveIntInput]
			public int? Id { get; set; }

			[InputField(OrderIndex = 2)]
			public string Name { get; set; }

			public Paginator Paginator { get; set; }

			[TypeaheadInputField(typeof(RoleTypeaheadInlineSource), OrderIndex = 1)]
			public MultiSelect<string> Roles { get; set; }
		}

		public class Response : FormResponse
		{
			[OutputField(OrderIndex = -10)]
			public ActionList Actions { get; set; }

			[PaginatedData(nameof(Request.Paginator), Label = "")]
			public PaginatedData<Item> Users { get; set; }
		}

		public class Item
		{
			public Item(ApplicationUser t, ManageUsers cmd)
			{
				this.Id = t.Id;
				this.Email = t.Email;
				this.Name = t.UserName;
				this.Active = t.Active;
				this.Roles = t.Roles.Select(a => a.Role.Name).ToList();
				this.Actions = cmd.GetActions(t);
				this.EmailConfirmed = t.HasLoggedIn;
			}

			[OutputField(OrderIndex = 20, Label = "")]
			public ActionList Actions { get; set; }

			[OutputField(OrderIndex = 10)]
			public bool Active { get; set; }

			[OutputField(OrderIndex = 3)]
			public string Email { get; set; }

			[OutputField(OrderIndex = 11, Label = "Email confirmed")]
			public bool EmailConfirmed { get; set; }

			[OutputField(OrderIndex = 1)]
			public int Id { get; set; }

			[OutputField(OrderIndex = 2)]
			public string Name { get; set; }

			[OutputField(OrderIndex = 4)]
			public IEnumerable<string> Roles { get; set; }
		}
	}
}