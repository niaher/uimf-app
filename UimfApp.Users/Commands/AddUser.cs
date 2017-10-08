namespace UimfApp.Users.Commands
{
	using System.Threading.Tasks;
	using System.Web;
	using CPermissions;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.Extensions.Options;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Messages;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Pickers;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[MyForm(Id = "add-user", Label = "Add user")]
	public class AddUser : IMyAsyncForm<AddUser.Request, AddUser.Response>, ISecureHandler
	{
		private readonly AppConfig appConfig;
		private readonly IEmailSender emailSender;
		private readonly RoleManager<ApplicationRole> roleManager;
		private readonly UserManager<ApplicationUser> userManager;

		public AddUser(
			UserManager<ApplicationUser> userManager,
			RoleManager<ApplicationRole> roleManager,
			IEmailSender emailSender,
			IOptions<AppConfig> appConfig)
		{
			this.userManager = userManager;
			this.roleManager = roleManager;
			this.emailSender = emailSender;
			this.appConfig = appConfig.Value;
		}

		public async Task<Response> Handle(Request message)
		{
			var applicationUser = new ApplicationUser
			{
				Email = message.Email,
				UserName = message.Name
			};

			var identityResult = await this.userManager.CreateAsync(applicationUser);

			await this.SendConfirmationEmail(applicationUser);

			identityResult.EnforceSuccess("Account was not created.");

			if (message.Roles?.Items?.Count > 0)
			{
				await this.roleManager.EnsureRoles(message.Roles.Items);
				identityResult = await this.userManager.AddToRolesAsync(applicationUser, message.Roles.Items);
			}

			identityResult.EnforceSuccess("Account was not created.");

			return new Response();
		}

		public UserAction GetPermission()
		{
			return UserActions.ManageUsers;
		}

		public static FormLink Button()
		{
			return new FormLink
			{
				Form = typeof(AddUser).GetFormId(),
				Label = "Add user"
			};
		}

		private async Task SendConfirmationEmail(ApplicationUser applicationUser)
		{
			var code = await this.userManager.GenerateEmailConfirmationTokenAsync(applicationUser);

			var confirmAccountUrl = $"{this.appConfig.SiteRoot}#/form/confirm-account" +
				$"?{nameof(ConfirmAccount.Request.Token)}={HttpUtility.UrlEncode(code)}" +
				$"&{nameof(ConfirmAccount.Request.Id)}={applicationUser.Id}";

			await this.emailSender.SendEmailAsync(
				applicationUser.Email,
				"Confirm your account",
				$"Please confirm your account by clicking this link: <a href=\"{confirmAccountUrl}\">{confirmAccountUrl}</a>");
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