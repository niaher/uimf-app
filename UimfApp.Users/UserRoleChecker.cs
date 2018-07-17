namespace UimfApp.Users
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users.Security;

	public class UserRoleChecker : IUserRoleChecker
	{
		private readonly UserSession userSession;

		public UserRoleChecker(UserSession userSession)
		{
			this.userSession = userSession;
		}

		public IEnumerable<SystemRole> GetDynamicRoles(UserContextData userData)
		{
			yield return userData != null
				? UserManagementRoles.AuthenticatedUser
				: UserManagementRoles.UnauthenticatedUser;

			if (this.userSession?.ImpersonatorUserId != null &&
				this.userSession.ImpersonatorUserId != this.userSession.CurrentUserId)
			{
				yield return UserManagementRoles.Impersonator;
			}
		}
	}
}
