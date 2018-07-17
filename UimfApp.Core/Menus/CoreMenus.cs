namespace UimfApp.Core.Menus
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Forms.Menu;

	public sealed class CoreMenus : IMenuContainer
	{
		public const string WorkItems = "Work items";
		public const string System = "System";
		public const string Notifications = "Notifications";

		public IList<MenuMetadata> GetMenuMetadata()
		{
			return new List<MenuMetadata>
			{
				new MenuMetadata(Notifications, -1),
				new MenuMetadata(WorkItems, 15),
				new MenuMetadata(System, 20)
			};
		}
	}
}