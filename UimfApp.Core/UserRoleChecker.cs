namespace UimfApp.Core
{
	using System.Collections.Generic;
	using UimfApp.Core.Security;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;

	public class UserRoleChecker : IUserRoleChecker
	{
		public IEnumerable<SystemRole> GetRoles(UserContextAccessor userContextAccessor)
		{
			if (userContextAccessor.IsAuthenticated())
			{
				yield return CoreRoles.ToolUser;
			}
		}
	}
}
