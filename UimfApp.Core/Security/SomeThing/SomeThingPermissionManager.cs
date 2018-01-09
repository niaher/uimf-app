namespace UimfApp.Core.Security.SomeThing
{
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;

	public class SomeThingPermissionManager : EntityPermissionManager<UserContext, SomeThingAction, SomeThingRole, SomeThing>
	{
		public SomeThingPermissionManager() : base(new SomeThingRoleChecker())
		{
		}
	}
}