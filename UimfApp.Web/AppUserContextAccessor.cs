namespace UimfApp.Web
{
	using System.Security.Claims;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users;

	public class AppUserContextAccessor : UserContextAccessor
	{
		private readonly CookieManager cookieManager;
		private readonly SignInManager<ApplicationUser> signInManager;

		public AppUserContextAccessor(
			SignInManager<ApplicationUser> signInManager,
			CookieManager cookieManager,
			UserRoleCheckerRegister register) : base(register)
		{
			this.signInManager = signInManager;
			this.cookieManager = cookieManager;
		}

		protected override ClaimsPrincipal GetPrincipal()
		{
			var userSession = this.cookieManager.GetUserSession();
			if (userSession?.ImpersonatorUserId != null)
			{
				var principal = new ClaimsPrincipal();
				var identity = new ClaimsIdentity("impersonation");
				identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, userSession.CurrentUserId.ToString()));
				principal.AddIdentity(identity);
				return principal;
			}

			return this.signInManager.Context.User;
		}

		protected override UserContextData GetUserContextData()
		{
			var principal = this.GetPrincipal();

			if (!principal.Identity.IsAuthenticated)
			{
				return null;
			}

			var data = this.cookieManager.GetUserContextData();

			if (data == null)
			{
				var userId = principal.GetUserId();

				if (userId == null)
				{
					throw new ApplicationException("Invalid principal. Cannot authenticate.");
				}

				data = this.GetUserContextDataFromDatabase(userId.Value);

				this.cookieManager.SetUserContextData(data);

				if (data == null)
				{
					this.signInManager.Context.Response.Cookies.Delete("app-data");
					this.signInManager.SignOutAsync().Wait();
				}
			}

			return data;
		}

		private UserContextData GetUserContextDataFromDatabase(int userId)
		{
			var user = this.signInManager.UserManager.Users.SingleOrException(t => t.Id == userId);

			if (!user.Active)
			{
				return null;
			}

			return new UserContextData(
				user.UserName,
				userId);
		}
	}
}