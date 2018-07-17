namespace UimfApp.Users.Commands
{
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Basic.Response;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users.Forms;
	using UimfApp.Users.Security;

	[MyForm(Id = "set-password", Label = "Set account password", SubmitButtonLabel = "Confirm password")]
	[Secure(typeof(UserActions), nameof(UserActions.ManageMyAccount))]
	public class SetPassword : AsyncForm<SetPassword.Request, RedirectResponse>
	{
		private readonly UserContext userContext;
		private readonly UserManager<ApplicationUser> userManager;

		public SetPassword(UserManager<ApplicationUser> userManager, UserContext userContext)
		{
			this.userManager = userManager;
			this.userContext = userContext;
		}

		public static FormLink Button()
		{
			return new FormLink
			{
				Form = typeof(SetPassword).GetFormId(),
				Label = "Set password"
			};
		}

		public override async Task<RedirectResponse> Handle(Request message, CancellationToken cancellationToken)
		{
			var user = this.userManager.Users.Single(t => t.UserName == this.userContext.User.UserName);

			var result = await this.userManager.AddPasswordAsync(
				user,
				message.Password.Value);

			result.EnforceSuccess("Failed to set password.");

			return MyAccount.Button().AsRedirectResponse();
		}

		public class Request : IRequest<RedirectResponse>
		{
			[InputField(Required = true)]
			[UimfAppPasswordInputConfig(true)]
			public Password Password { get; set; }
		}
	}
}
