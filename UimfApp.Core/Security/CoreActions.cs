namespace UimfApp.Core.Security
{
	using UimfApp.Infrastructure.Security;

	public class CoreActions : ActionContainer
	{
		public static readonly SystemAction ManageSystem = new SystemAction(nameof(ManageSystem), CoreRoles.Admin);
		public static readonly SystemAction ManageWorkItems = new SystemAction(nameof(ManageWorkItems), CoreRoles.AuthenticatedUser);
		public static readonly SystemAction ViewNotifications = new SystemAction(nameof(ViewNotifications), CoreRoles.AuthenticatedUser);
	}
}