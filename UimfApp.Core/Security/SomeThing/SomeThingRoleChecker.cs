namespace UimfApp.Core.Security.SomeThing
{
	using System.Collections.Generic;
	using CPermissions;
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure.User;

	public class SomeThingRoleChecker : IRoleChecker<UserContext, SomeThingRole, SomeThing>
	{
		public IEnumerable<SomeThingRole> GetRoles(UserContext user, SomeThing context)
		{
			if (context.OwnerUserId == user.User.UserId)
			{
				yield return SomeThingRole.Owner;
			}

			if (user.HasRole(CoreRoles.ToolUser))
			{
				yield return SomeThingRole.Viewer;
			}
		}
	}
}