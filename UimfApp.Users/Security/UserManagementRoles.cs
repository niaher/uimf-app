namespace UimfApp.Users.Security
{
	using UimfApp.Infrastructure.Security;

	public class UserManagementRoles : RoleContainer
	{
		public static readonly SystemRole AuthenticatedUser = new SystemRole(nameof(AuthenticatedUser), true);
		public static readonly SystemRole UnauthenticatedUser = new SystemRole(nameof(UnauthenticatedUser), true);
		public static readonly SystemRole UserAdmin = new SystemRole(nameof(UserAdmin));
	}
}