namespace UimfApp.Users.Commands
{
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UiMetadataFramework.Basic.Response;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Security;

	[MyForm(Id = "stop-impersonation", PostOnLoad = true, Label = UiFormConstants.StopImpersonationLabel, Menu = UserMenus.Impersonation)]
	[Secure(typeof(UserActions), nameof(UserActions.StopImpersonation))]
	public class StopImpersonation : Form<StopImpersonation.Request, ReloadResponse>
	{
		private readonly SignInManager<ApplicationUser> signInManager;

		public StopImpersonation(SignInManager<ApplicationUser> signInManager)
		{
			this.signInManager = signInManager;
		}

		protected override ReloadResponse Handle(Request message)
		{
			this.signInManager.Context.Response.Cookies.Delete("user-data");
			this.signInManager.Context.Response.Cookies.Delete("app-data");
			return new ReloadResponse
			{
				Form = typeof(MyAccount).GetFormId()
			};
		}

		public class Request : IRequest<ReloadResponse>
		{
		}
	}
}
