namespace UimfApp.Core.Menus
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Forms.Menu;

	public sealed class CoreMenus : IMenuContainer
	{
		public const string System = "System";
		public const string Main = "";

		public IList<MenuMetadata> GetMenuMetadata()
		{
			return new List<MenuMetadata>
			{
				new MenuMetadata(Main, 2),
				new MenuMetadata(System, 20)
			};
		}
	}
}
