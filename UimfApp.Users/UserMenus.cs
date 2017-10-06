namespace UimfApp.Users
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Forms.Menu;

	public sealed class UserMenus : IMenuContainer
	{
		public const string Main = "System";
		public const string Reports = Main + "/Reports";

		public IList<MenuMetadata> GetMenuMetadata()
		{
			return new List<MenuMetadata>
			{
				new MenuMetadata(Main, 90),
				new MenuMetadata(Reports, 1)
			};
		}
	}
}