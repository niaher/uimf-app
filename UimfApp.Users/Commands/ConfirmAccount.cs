namespace UimfApp.Users.Commands
{
	using System.Linq;
	using System.Threading.Tasks;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UiMetadataFramework.Basic.Response;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfApp.Infrastructure.User;

	[MyForm(Id = "confirm-account", Label = "Confirming account...", PostOnLoad = true)]
	public class ConfirmAccount : IAsyncForm<ConfirmAccount.Request, ReloadResponse>
	{
		private readonly SignInManager<ApplicationUser> signInManager;
		private readonly UserContext userContext;
		private readonly UserManager<ApplicationUser> userManager;

		public ConfirmAccount(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, UserContext userContext)
		{
			this.userManager = userManager;
			this.signInManager = signInManager;
			this.userContext = userContext;
		}

		public async Task<ReloadResponse> Handle(Request message)
		{
			var user = this.userManager.Users.SingleOrDefault(t => t.Id == message.Id);

			if (user == null)
			{
				throw new BusinessException("Invalid parameters. Account could not be confirmed.");
			}

			var hasPassword = await this.userManager.HasPasswordAsync(user);
			if (user.EmailConfirmed && hasPassword)
			{
				return new ReloadResponse
				{
					Form = typeof(MyAccount).GetFormId()
				};
			}

			if (!user.EmailConfirmed)
			{
				var result = await this.userManager.ConfirmEmailAsync(user, message.Token);
				result.EnforceSuccess("Account was not confirmed.");
			}

			if (!this.userContext.IsAuthenticated)
			{
				await this.signInManager.SignInAsync(user, true);
			}

			return new ReloadResponse
			{
				Form = typeof(SetPassword).GetFormId()
			};
		}

		public class Request : IRequest<ReloadResponse>
		{
			[InputField(Hidden = true)]
			public int Id { get; set; }

			[InputField(Required = true, Hidden = true)]
			public string Token { get; set; }
		}
	}
}
