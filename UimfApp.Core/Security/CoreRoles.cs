namespace UimfApp.Core.Security
{
	using UimfApp.Infrastructure.Security;

	public class CoreRoles : RoleContainer
	{
		public static readonly SystemRole AuthenticatedUser = new SystemRole(nameof(AuthenticatedUser), true);
		public static readonly SystemRole Admin = new SystemRole(nameof(Admin));
	}
}