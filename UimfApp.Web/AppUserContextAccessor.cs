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
			}

			return data;
		}

		private UserContextData GetUserContextDataFromDatabase(int userId)
		{
			var user = this.signInManager.UserManager.Users.SingleOrException(t => t.Id == userId);
			return new UserContextData(user.UserName, userId);
		}
	}
}