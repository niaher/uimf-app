namespace UimfApp.Infrastructure.Security
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using CPermissions;

	public class EntityPermissionManager<TUser, TAction, TRole, TContext> : PermissionManager<TUser, TRole, TContext>
		where TAction : EntityAction<TContext, TRole>
	{
		public EntityPermissionManager(IRoleChecker<TUser, TRole, TContext> roleChecker) : base(roleChecker)
		{
		}

		public override IEnumerable<UserAction<TContext>> GetAllowedUserActions(TRole role)
		{
			var actions = typeof(TAction)
				.GetFields(BindingFlags.Public | BindingFlags.Static)
				.Where(t => t.FieldType == typeof(TAction))
				.Select(t => t.GetValue(null))
				.Cast<TAction>()
				.ToList();

			return actions.Where(t => t.Roles.Contains(role));
		}
	}
}
