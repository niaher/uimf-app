namespace UimfApp.Users.Commands
{
	using System.Threading;
	using System.Threading.Tasks;
	using System.Web;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.Extensions.Options;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UimfApp.Infrastructure.Messages;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfApp.Infrastructure.Forms.CustomProperties;
	using UimfApp.Infrastructure.Forms.Inputs;
	using UimfApp.Infrastructure.Security;

	[MyForm(Id = "forgot-password", Label = "Forgot password", SubmitButtonLabel = "Reset my password", Menu = UserMenus.TopLevel)]
	[Secure(typeof(UserActions), nameof(UserActions.Login))]
	[CssClass(UiFormConstants.CardLayout)]
	public class ForgotPassword : AsyncForm<ForgotPassword.Request, ForgotPassword.Response>
	{
		private readonly AppConfig appConfig;
		private readonly IEmailSender emailSender;
		private readonly UserManager<ApplicationUser> userManager;

		public ForgotPassword(UserManager<ApplicationUser> userManager, IEmailSender emailSender, IOptions<AppConfig> appConfig)
		{
			this.userManager = userManager;
			this.emailSender = emailSender;
			this.appConfig = appConfig.Value;
		}

		public override async Task<Response> Handle(Request message, CancellationToken cancellationToken)
		{
			var user = await this.userManager.FindByEmailAsync(message.Email?.Value);

			if (user == null)
			{
				throw new BusinessException("This email is not registered in the system.");
			}

			var token = await this.userManager.GeneratePasswordResetTokenAsync(user);

			var resetPasswordUrl = $"{this.appConfig.SiteRoot}#/form/reset-password" +
				$"?{nameof(ConfirmAccount.Request.Token)}={HttpUtility.UrlEncode(token)}" +
				$"&{nameof(ConfirmAccount.Request.Id)}={user.Id}";

			await this.emailSender.SendEmailAsync(
				user.Email,
				"Password reset",
				$"You have requested to reset your password. Please follow this link to continue: <a href='{resetPasswordUrl}'>{resetPasswordUrl}</a>");

			return new Response
			{
				Result = Alert.Success("Please check your email. We've sent you the password reset link.")
			};
		}

		public class Response : FormResponse
		{
			public Alert Result { get; set; }
		}

		public class Request : IRequest<Response>
		{
			[InputField(Label = "Your email address", Required = true)]
			public Email Email { get; set; }
		}
	}
}
