namespace UimfApp.Web.Forms
{
	using System.Threading.Tasks;
	using CPermissions;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users;
	using UimfApp.Users.Commands;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Response;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[MyForm(Id = "login", Label = "Login", Menu = WebAppMenus.Account)]
	public class Login : IAsyncForm<Login.Request, ReloadResponse>, ISecureHandler
	{
		private readonly SignInManager<ApplicationUser> signInManager;

		public Login(SignInManager<ApplicationUser> signInManager)
		{
			this.signInManager = signInManager;
		}

		public async Task<ReloadResponse> Handle(Request model)
		{
			var result = await this.signInManager.PasswordSignInAsync(model.Email, model.Password.Value, model.RememberMe, lockoutOnFailure: false);

			if (result.Succeeded)
			{
				return new ReloadResponse
				{
					Form = typeof(ManageUsers).GetFormId()
				};
			}

			if (result.IsLockedOut)
			{
				throw new BusinessException("This account is locked. Please contact administrator.");
			}

			throw new BusinessException("Invalid login attempt.");
		}

		public UserAction GetPermission()
		{
			return SystemAction.Login;
		}

		public class Request : IRequest<ReloadResponse>
		{
			[InputField(Required = true)]
			public string Email { get; set; }

			[InputField(Required = true)]
			public Password Password { get; set; }

			public bool RememberMe { get; set; }
		}
	}
}