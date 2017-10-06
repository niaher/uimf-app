namespace UimfApp.Core.Menus
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Forms.Menu;

	public sealed class GrantMenus : IMenuContainer
	{
		public const string Main = "Grants";

		public IList<MenuMetadata> GetMenuMetadata()
		{
			return new List<MenuMetadata>
			{
				new MenuMetadata(Main, 20)
			};
		}
	}
}