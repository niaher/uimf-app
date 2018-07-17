namespace UimfApp.Filing.Security
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;

	public class FilingRoleChecker : IUserRoleChecker
	{
		public IEnumerable<SystemRole> GetDynamicRoles(UserContextData userData)
		{
			if (userData != null)
			{
				yield return FilingRole.AuthenticatedUser;
			}
		}
	}
}
