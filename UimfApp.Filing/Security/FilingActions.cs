namespace UimfApp.Filing.Security
{
	using UimfApp.Infrastructure.Security;

	public class FilingActions : ActionContainer
	{
		public static readonly SystemAction ViewFiles = new SystemAction(nameof(ViewFiles), FilingRole.AuthenticatedUser);
	}
}
