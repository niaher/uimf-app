namespace UimfApp.Users.Commands
{
	using System.Linq;
	using System.Threading.Tasks;
	using CPermissions;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UimfApp.Infrastructure.User;

	[MyForm(Id = "set-password", Label = "Set account password", SubmitButtonLabel = "Confirm password")]
	public class SetPassword : IMyAsyncForm<SetPassword.Request, SetPassword.Response>, ISecureHandler
	{
		private readonly UserContext userContext;
		private readonly UserManager<ApplicationUser> userManager;

		public SetPassword(UserManager<ApplicationUser> userManager, UserContext userContext)
		{
			this.userManager = userManager;
			this.userContext = userContext;
		}

		public async Task<Response> Handle(Request message)
		{
			var user = this.userManager.Users.Single(t => t.UserName == this.userContext.User.UserName);

			var result = await this.userManager.AddPasswordAsync(
				user,
				message.Password.Value);

			result.EnforceSuccess("Failed to set password.");

			return new Response
			{
				Result = Alert.Success("Password was set successfully.")
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
				Form = typeof(SetPassword).GetFormId(),
				Label = "Set password"
			};
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
			public Alert Result { get; set; }
		}

		public class Request : IRequest<Response>
		{
			[InputField(Required = true)]
			public Password Password { get; set; }
		}
	}
}
