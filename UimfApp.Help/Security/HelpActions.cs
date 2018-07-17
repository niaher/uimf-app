namespace UimfApp.Help.Security
{
    using UimfApp.Infrastructure.Security;

    public class HelpActions : ActionContainer
	{
		public static readonly SystemAction ViewHelpFiles = new SystemAction(nameof(ViewHelpFiles), HelpRoles.HelpReader);
	}
}
