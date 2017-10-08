namespace UimfApp.Users.Commands
{
	using System.Threading.Tasks;
	using CPermissions;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[MyForm(Id = "change-password", Label = "Change account password")]
	public class ChangePassword : IMyAsyncForm<ChangePassword.Request, ChangePassword.Response>, ISecureHandler
	{
		private readonly UserContext userContext;
		private readonly UserManager<ApplicationUser> userManager;

		public ChangePassword(UserManager<ApplicationUser> userManager, UserContext userContext)
		{
			this.userManager = userManager;
			this.userContext = userContext;
		}

		public async Task<Response> Handle(Request message)
		{
			var user = await this.userManager.FindByNameAsync(this.userContext.UserName);

			var result = await this.userManager.ChangePasswordAsync(
				user,
				message.OldPassword.Value,
				message.NewPassword.Value);

			result.EnforceSuccess("Failed to change password.");

			return new Response
			{
				Result = "Password was changed successfully."
			};
		}

		public UserAction GetPermission()
		{
			return UserActions.ManageMyAccount;
		}

		public static FormLink Button()
		{
			return new FormLink
			{
				Label = "Change password",
				Form = typeof(ChangePassword).GetFormId()
			};
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
			public string Result { get; set; }
		}

		public class Request : IRequest<Response>
		{
			[InputField(Required = true, Label = "Current password")]
			public Password OldPassword { get; set; }

			[InputField(Required = true, Label = "New password")]
			public Password NewPassword { get; set; }
		}
	}
}