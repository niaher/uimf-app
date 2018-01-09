namespace UimfApp.Web
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Security.Claims;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;

	public class UserRoleChecker : IUserRoleChecker
	{
		public IEnumerable<SystemRole> GetRoles(UserContextAccessor userContextAccessor)
		{
			return userContextAccessor.GetClaims()
				.Where(t => t.Type == ClaimTypes.Role)
				.Select(t => new SystemRole(t.Value))
				.Distinct();
		}
	}
}
