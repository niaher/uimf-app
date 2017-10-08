namespace UimfApp.Core.Security
{
	using UimfApp.Infrastructure.Security;

	public class CoreRoles : RoleContainer
	{
		public static readonly SystemRole ToolUser = new SystemRole(nameof(ToolUser));
	}
}