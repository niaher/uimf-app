namespace UimfApp.Users.Commands
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using UiMetadataFramework.Basic.EventHandlers;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Inputs;
	using UimfApp.Infrastructure.Forms.Record;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Pickers;
	using UimfApp.Users.Security;

	[MyForm(Id = "edit-user", PostOnLoad = true, Label = "Edit user", SubmitButtonLabel = UiFormConstants.EditSubmitLabel)]
	[Secure(typeof(UserActions), nameof(UserActions.ManageUsers))]
	public class EditUser : MyAsyncForm<EditUser.Request, EditUser.Response>
	{
		private readonly RoleManager<ApplicationRole> roleManager;
		private readonly UserManager<ApplicationUser> userManager;

		public EditUser(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
		{
			this.userManager = userManager;
			this.roleManager = roleManager;
		}

		public static FormLink Button(int userId, string label = null)
		{
			return new FormLink
			{
				Form = typeof(EditUser).GetFormId(),
				Label = label ?? "Edit",
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.Id), userId }
				}
			};
		}

		public override async Task<Response> Handle(Request message, CancellationToken cancellationToken)
		{
			var user = this.userManager.Users
				.Include(t => t.Roles)
				.ThenInclude(t => t.Role)
				.SingleOrDefault(t => t.Id == message.Id);

			if (message.Operation?.Value == RecordRequestOperation.Post)
			{
				var existingRoles = user.Roles.Select(t => t.Role.Name).ToList();
				await this.userManager.RemoveFromRolesAsync(user, existingRoles);

				await this.roleManager.EnsureRoles(message.Roles?.Items ?? new string[0]);
				await this.userManager.AddToRolesAsync(user, message.Roles?.Items ?? new string[0]);

				var identityResult = await this.userManager.SetEmailAsync(user, message.Email?.Value);
				identityResult.EnforceSuccess("Failed to save changes.");

				identityResult = await this.userManager.SetUserNameAsync(user, message.UserName);
				identityResult.EnforceSuccess("Failed to save changes.");
			}

			return new Response
			{
				Roles = user.Roles.Select(t => t.Role.Name).AsMultiSelect(),
				Email = user.Email,
				Name = user.UserName,
				Metadata = new MyFormResponseMetadata
				{
					Title = $"Edit user {user.UserName}"
				}
			};
		}

		public class Request : RecordRequest<Response>
		{
			[InputField(OrderIndex = 5)]
			[BindToOutput(nameof(Response.Email))]
			public Email Email { get; set; }

			[InputField(Hidden = true, Required = true)]
			public int Id { get; set; }

			[BindToOutput(nameof(Response.Roles))]
			[TypeaheadInputField(typeof(RoleTypeaheadInlineSource), OrderIndex = 10)]
			public MultiSelect<string> Roles { get; set; }

			[InputField(OrderIndex = 1, Label = "Name")]
			[BindToOutput(nameof(Response.Name))]
			public string UserName { get; set; }
		}

		public class Response : RecordResponse
		{
			[NotField]
			public string Email { get; set; }

			[NotField]
			public string Name { get; set; }

			[NotField]
			public MultiSelect<string> Roles { get; set; }
		}
	}
}
