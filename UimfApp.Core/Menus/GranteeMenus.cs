namespace UimfApp.Core.Menus
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Forms.Menu;

	public sealed class GranteeMenus : IMenuContainer
	{
		public const string Main = "Grantees";

		public IList<MenuMetadata> GetMenuMetadata()
		{
			return new List<MenuMetadata>
			{
				new MenuMetadata(Main, 10)
			};
		}
	}
}