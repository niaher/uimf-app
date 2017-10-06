namespace UimfApp.Users.Commands
{
	using System.Linq;
	using System.Threading.Tasks;
	using CPermissions;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore.Internal;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Pickers;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[MyForm(Id = "add-user", Label = "Add user")]
	public class AddUser : IMyAsyncForm<AddUser.Request, AddUser.Response>, ISecureHandler
	{
		private readonly RoleManager<ApplicationRole> roleManager;
		private readonly UserManager<ApplicationUser> userManager;

		public AddUser(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
		{
			this.userManager = userManager;
			this.roleManager = roleManager;
		}

		public async Task<Response> Handle(Request message)
		{
			var applicationUser = new ApplicationUser
			{
				Email = message.Email,
				UserName = message.Name
			};

			var identityResult = await this.userManager.CreateAsync(applicationUser);

			EnforceSuccess(identityResult);

			if (message.Roles?.Items?.Count > 0)
			{
				await this.roleManager.EnsureRoles(message.Roles.Items);
				identityResult = await this.userManager.AddToRolesAsync(applicationUser, message.Roles.Items);
			}

			EnforceSuccess(identityResult);

			return new Response();
		}

		public UserAction GetPermission()
		{
			return SystemAction.ManageUsers;
		}

		public static FormLink Button()
		{
			return new FormLink
			{
				Form = typeof(AddUser).GetFormId(),
				Label = "Add user"
			};
		}

		private static void EnforceSuccess(IdentityResult identityResult)
		{
			if (!identityResult.Succeeded)
			{
				throw new BusinessException("Account was not created. Errors:\n" + identityResult.Errors.Select(t => $"* {t.Description}").Join("\n"));
			}
		}

		public class Request : IRequest<Response>
		{
			[InputField(OrderIndex = 10)]
			public string Email { get; set; }

			[InputField(OrderIndex = 0)]
			public string Name { get; set; }

			[TypeaheadInputField(typeof(RoleTypeaheadInlineSource), OrderIndex = 20)]
			public MultiSelect<string> Roles { get; set; }
		}

		public class Response : MyFormResponse
		{
		}
	}
}