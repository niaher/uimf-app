namespace UimfApp.Core.Menus
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Forms.Menu;

	public sealed class InstalmentMenus : IMenuContainer
	{
		public const string Main = "System";

		public IList<MenuMetadata> GetMenuMetadata()
		{
			return new List<MenuMetadata>
			{
				new MenuMetadata(Main, 30)
			};
		}
	}
}