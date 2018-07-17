namespace UimfApp.Core
{
	using System.Collections.Generic;
	using UimfApp.Core.Security;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;

	public class UserRoleChecker : IUserRoleChecker
	{
		public IEnumerable<SystemRole> GetDynamicRoles(UserContextData userData)
		{
			if (userData != null)
			{
				yield return CoreRoles.AuthenticatedUser;
			}
		}
	}
}