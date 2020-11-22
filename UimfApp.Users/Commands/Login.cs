namespace UimfApp.Users.Commands
{
	using System.Collections.Generic;
	using System.ComponentModel.DataAnnotations;
	using System.Security.Claims;
	using System.Threading;
	using System.Threading.Tasks;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Users;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Response;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfApp.Infrastructure.Forms.CustomProperties;
	using UimfApp.Infrastructure.Security;

	[MyForm(Id = "login", Label = "Login", Menu = UserMenus.TopLevel, SubmitButtonLabel = "Login")]
	[Secure(typeof(UserActions), nameof(UserActions.Login))]
	[CssClass(UiFormConstants.CardLayout)]
	public class Login : AsyncForm<Login.Request, ReloadResponse>
	{
		private readonly SignInManager<ApplicationUser> signInManager;

		public Login(SignInManager<ApplicationUser> signInManager)
		{
			this.signInManager = signInManager;
		}

		public override async Task<ReloadResponse> Handle(Request model, CancellationToken cancellationToken)
		{
			var user = new EmailAddressAttribute().IsValid(model.Email)
				? await this.signInManager.UserManager.FindByEmailAsync(model.Email)
				: await this.signInManager.UserManager.FindByNameAsync(model.Email);
			
			if (user != null)
			{
				if (!user.Active)
				{
					throw new BusinessException("This account is disabled. Please contact administrator.");
				}
				var result = await this.signInManager.PasswordSignInAsync(user, model.Password.Value, model.RememberMe, false);

				if (result.Succeeded)
				{
					this.signInManager.Context.User.AddIdentity(new ClaimsIdentity(new List<Claim>
					{
						new Claim(ClaimTypes.UserData, user.Id.ToString())
					}));

					return new ReloadResponse
					{
						Form = typeof(MyAccount).GetFormId()
					};
				}

				if (result.IsLockedOut)
				{
					throw new BusinessException("This account is locked. Please contact administrator.");
				}
			}

			throw new BusinessException("Invalid login attempt.");
		}

		public class Request : IRequest<ReloadResponse>
		{
			[InputField(Required = true, Label = "Email or username")]
			public string Email { get; set; }

			[InputField(Required = true)]
			public Password Password { get; set; }

			[InputField(Label = "Remember me")]
			public bool RememberMe { get; set; }
		}
	}
}
