namespace UimfApp.Users
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms.Menu;

	[RegisterEntry("user")]
	public sealed class UserMenus : MenuContainer
	{
		public const string Main = "System";
		public const string Account = "Account";
		public const string TopLevel = "";
		public const string Impersonation = "Impersonation";
		public const string Reports = Main + "/Reports";

		public override IEnumerable<MenuGroup> GetMenuGroups()
		{
			return new List<MenuGroup>
			{
				new MenuGroup(TopLevel, 100),
				new MenuGroup(Main, 90),
				new MenuGroup(Account, 100),
				new MenuGroup(Reports, 1),
				new MenuGroup(Impersonation, 101)
			};
		}
	}
}