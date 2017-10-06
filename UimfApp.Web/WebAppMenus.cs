namespace UimfApp.Web
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Forms.Menu;

	public class WebAppMenus : IMenuContainer
	{
		public const string Account = "";

		public IList<MenuMetadata> GetMenuMetadata()
		{
			return new List<MenuMetadata>
			{
				new MenuMetadata(Account, 100)
			};
		}
	}
}