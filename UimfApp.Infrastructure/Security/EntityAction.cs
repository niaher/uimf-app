namespace UimfApp.Infrastructure.Security
{
	using System.Collections.Generic;
	using CPermissions;

	public class EntityAction<TContext, TRole> : UserAction<TContext>
	{
		public EntityAction(string name, params TRole[] allowedRoles) : base(name)
		{
			this.Roles = allowedRoles;
		}

		public IEnumerable<TRole> Roles { get; }
	}
}
