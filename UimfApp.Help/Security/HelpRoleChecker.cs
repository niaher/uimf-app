namespace UimfApp.Help.Security
{
    using System.Collections.Generic;
    using UimfApp.Infrastructure.Security;
    using UimfApp.Infrastructure.User;

    public class HelpRoleChecker : IUserRoleChecker
	{
		public IEnumerable<SystemRole> GetDynamicRoles(UserContextData userData)
		{
			if (userData != null)
			{
				yield return HelpRoles.HelpReader;
			}
		}
	}
}
