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
	using UimfApp.Infrastructure.Forms.Inputs;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users.Security;

	[MyForm(Id = "change-email", Label = "Change email address")]
	[Secure(typeof(UserActions), nameof(UserActions.ManageMyAccount))]
	public class ChangeEmail : MyAsyncForm<ChangeEmail.Request, ChangeEmail.Response>
	{
		private readonly UserContext userContext;
		private readonly UserManager<ApplicationUser> userManager;

		public ChangeEmail(UserManager<ApplicationUser> userManager, UserContext userContext)
		{
			this.userManager = userManager;
			this.userContext = userContext;
		}

		public static FormLink Button()
		{
			return new FormLink
			{
				Label = "Change email",
				Form = typeof(ChangeEmail).GetFormId()
			};
		}

		public override async Task<Response> Handle(Request message, CancellationToken cancellationToken)
		{
			var user = await this.userManager.FindByNameAsync(this.userContext.User.UserName);

			var passwordIsValid = await this.userManager.CheckPasswordAsync(
				user,
				message.Password.Value);

			if (!passwordIsValid)
			{
				throw new BusinessException("The password you specified is no valid.");
			}

			var result = await this.userManager.SetEmailAsync(
				user,
				message.NewEmail?.Value);

			result.EnforceSuccess("Failed to change email address.");

			return new Response
			{
				Result = Alert.Success("Email address was changed successfully.")
			}.WithGrowlMessage("Email address was changed successfully.", GrowlNotificationStyle.Success);
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
			public Alert Result { get; set; }
		}

		public class Request : IRequest<Response>
		{
			[InputField(Required = true, Label = "New email address")]
			public Email NewEmail { get; set; }

			[InputField(Required = true, Label = "Your account password")]
			public Password Password { get; set; }
		}
	}
}
