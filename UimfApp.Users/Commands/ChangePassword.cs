namespace UimfApp.Users.Commands
{
	using System.Threading;
	using System.Threading.Tasks;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.ClientFunctions;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users.Forms;
	using UimfApp.Users.Security;

	[MyForm(Id = "change-password", Label = "Change account password")]
	[Secure(typeof(UserActions), nameof(UserActions.ManageMyAccount))]
	public class ChangePassword : MyAsyncForm<ChangePassword.Request, ChangePassword.Response>
	{
		private readonly UserContext userContext;
		private readonly UserManager<ApplicationUser> userManager;

		public ChangePassword(UserManager<ApplicationUser> userManager, UserContext userContext)
		{
			this.userManager = userManager;
			this.userContext = userContext;
		}

		public static FormLink Button()
		{
			return new FormLink
			{
				Label = "Change password",
				Form = typeof(ChangePassword).GetFormId()
			};
		}

		public override async Task<Response> Handle(Request message, CancellationToken cancellationToken)
		{
			var user = await this.userManager.FindByNameAsync(this.userContext.User.UserName);

			var result = await this.userManager.ChangePasswordAsync(
				user,
				message.OldPassword.Value,
				message.NewPassword.Value);

			result.EnforceSuccess("Failed to change password.");

			return new Response
			{
				Result = Alert.Success("Password was changed successfully.")
			}.WithGrowlMessage("Password was changed successfully.", GrowlNotificationStyle.Success);
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
			public Alert Result { get; set; }
		}

		public class Request : IRequest<Response>
		{
			[InputField(Required = true, Label = "New password", OrderIndex = 10)]
			[UimfAppPasswordInputConfig(true)]
			public Password NewPassword { get; set; }

			[InputField(Required = true, Label = "Current password", OrderIndex = 0)]
			public Password OldPassword { get; set; }
		}
	}
}
