namespace UimfApp.DataSeed
{
	using System.Linq;
	using System.Security.Claims;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users;

	internal class AppUserContextAccessor : UserContextAccessor
	{
		private readonly SignInManager<ApplicationUser> signInManager;
		private readonly UserSession userSession;

		public AppUserContextAccessor(
			UserRoleCheckerRegister roleCheckerRegister,
			SignInManager<ApplicationUser> signInManager,
			UserSession userSession) :
			base(roleCheckerRegister)
		{
			this.signInManager = signInManager;
			this.userSession = userSession;
		}

		protected override ClaimsPrincipal GetPrincipal()
		{
			if (this.userSession == null)
			{
				return null;
			}

			var claim = new Claim(ClaimTypes.NameIdentifier, this.userSession.CurrentUserId.ToString());

			var identity = new ClaimsIdentity();
			identity.AddClaim(claim);

			this.signInManager.UserManager.Users.Where(t => t.Id == this.userSession.CurrentUserId)
				.SelectMany(t => t.Roles)
				.Select(t => t.Role.Name)
				.ToList()
				.ForEach(role => identity.AddClaim(new Claim(ClaimTypes.Role, role)));

			return new ClaimsPrincipal(identity);
		}

		protected override UserContextData GetUserContextData()
		{
			return this.userSession != null
				? this.GetUserContextDataFromDatabase(this.userSession.CurrentUserId)
				: null;
		}

		private UserContextData GetUserContextDataFromDatabase(int userId)
		{
			var user = this.signInManager.UserManager.Users.SingleOrException(t => t.Id == userId);

			return new UserContextData(
				user.UserName,
				userId);
		}
	}
}