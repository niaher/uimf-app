namespace UimfApp.Help.Security
{
	using UimfApp.Infrastructure.Security;

	public class HelpRoles : RoleContainer
	{
		public static readonly SystemRole HelpReader = new SystemRole(nameof(HelpReader), true);
	}
}
