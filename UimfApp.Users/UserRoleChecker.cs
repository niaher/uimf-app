namespace UimfApp.Users
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users.Security;

	public class UserRoleChecker : IUserRoleChecker
	{
		public IEnumerable<SystemRole> GetDynamicRoles(UserContextData userData)
		{
			yield return userData != null
				? UserManagementRoles.AuthenticatedUser
				: UserManagementRoles.UnauthenticatedUser;
		}
	}
}