namespace UimfApp.Users
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users.Security;

	public class UserRoleChecker : IUserRoleChecker
	{
		public IEnumerable<SystemRole> GetRoles(UserContextAccessor userContextAccessor)
		{
			yield return userContextAccessor.IsAuthenticated()
				? UserManagementRoles.AuthenticatedUser
				: UserManagementRoles.UnauthenticatedUser;
		}
	}
}
