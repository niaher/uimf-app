namespace UimfApp.Filing.Security
{
	using UimfApp.Infrastructure.Security;

	public class FilingRole : RoleContainer
	{
		public static readonly SystemRole AuthenticatedUser = new SystemRole(nameof(AuthenticatedUser), true);
	}
}
