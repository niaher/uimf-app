namespace UimfApp.Infrastructure.Security
{
	using System.Collections.Generic;
	using System.Linq;
	using CPermissions;

	public class SystemPermissionManager : PermissionManager<UserContext, SystemRole>
	{
		public SystemPermissionManager() : base(new SystemRoleChecker())
		{
		}

		public override IEnumerable<UserAction> GetAllowedUserActions(SystemRole role)
		{
			if (role.Equals(SystemRole.UnauthenticatedUser))
			{
				yield return SystemAction.Login;
			}

			if (role.Equals(SystemRole.User))
			{
				var allowed = SystemAction.List.Except(this.GetAllowedUserActions(SystemRole.UnauthenticatedUser));
				foreach (var action in allowed)
				{
					yield return action;
				}
			}
		}

		public class SystemRoleChecker : IRoleChecker<UserContext, SystemRole>
		{
			public IEnumerable<SystemRole> GetRoles(UserContext user)
			{
				if (user.UserId == null)
				{
					return new[] { SystemRole.UnauthenticatedUser };
				}

				return user.Roles.Select(a => (SystemRole)a).ToList();
			}
		}
	}
}