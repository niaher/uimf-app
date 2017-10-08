namespace UimfApp.Infrastructure.Security
{
	using System.Collections.Generic;
	using System.Linq;
	using CPermissions;

	public class SystemPermissionManager : PermissionManager<UserContext, SystemRole>
	{
		private readonly ActionRegister actionRegister;

		public SystemPermissionManager(ActionRegister actionRegister) : base(new SystemRoleChecker(actionRegister))
		{
			this.actionRegister = actionRegister;
		}

		public override IEnumerable<UserAction> GetAllowedUserActions(SystemRole role)
		{
			if (role == null)
			{
				return new UserAction[0];
			}

			return this.actionRegister.GetActions(role.Name);
		}

		public class SystemRoleChecker : IRoleChecker<UserContext, SystemRole>
		{
			private readonly ActionRegister actionRegister;

			public SystemRoleChecker(ActionRegister actionRegister)
			{
				this.actionRegister = actionRegister;
			}

			public IEnumerable<SystemRole> GetRoles(UserContext user)
			{
				if (user == null)
				{
					return new SystemRole[0];
				}

				return user.Roles.Select(a => this.actionRegister.GetRoleByName(a)).ToList();
			}
		}
	}
}