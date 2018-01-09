namespace UimfApp.Users.Commands
{
	using System.ComponentModel.DataAnnotations;
	using System.Threading.Tasks;
	using System.Web;
	using CPermissions;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.Extensions.Options;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UimfApp.Infrastructure.Messages;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[MyForm(Id = "forgot-password", Label = "Forgot password", SubmitButtonLabel = "Reset my password", Menu = UserMenus.TopLevel)]
	public class ForgotPassword : IAsyncForm<ForgotPassword.Request, ForgotPassword.Response>, ISecureHandler
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

		public async Task<Response> Handle(Request message)
		{
			var user = new EmailAddressAttribute().IsValid(message.Email)
				? await this.userManager.FindByEmailAsync(message.Email)
				: await this.userManager.FindByNameAsync(message.Email);

			if (user == null)
			{
				throw new BusinessException("Invalid username and/or password.");
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

		public UserAction GetPermission()
		{
			return UserActions.Login;
		}

		public class Response : FormResponse
		{
			public Alert Result { get; set; }
		}

		public class Request : IRequest<Response>
		{
			[OutputField(Label = "Your email address")]
			public string Email { get; set; }
		}
	}
}
