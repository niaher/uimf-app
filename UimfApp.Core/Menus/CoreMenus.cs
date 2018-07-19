namespace UimfApp.Core.Menus
{
	using System.Collections.Generic;
	using System.Linq;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Notification;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms.Menu;

	[RegisterEntry("core")]
	public sealed class CoreMenus : MenuContainer
	{
		public const string WorkItems = "Work items";
		public const string System = "System";
		public const string Notifications = "Notifications";
		private readonly CoreDbContext context;

		public CoreMenus(CoreDbContext context)
		{
			this.context = context;
		}

		public override IEnumerable<MenuGroup> GetMenuGroups()
		{
			return new List<MenuGroup>
			{
				new MenuGroup(Notifications, -1),
				new MenuGroup(WorkItems, 15),
				new MenuGroup(System, 20)
			};
		}

		public override IEnumerable<MenuItem> GetDynamicMenuItems()
		{
			var notificationCount = this.context.WorkItems.Count();

			yield return MyNotifications
				.Button($"<i class='far fa-bell' title='Notifications'>{notificationCount}</i>")
				.AsMenuItem(Notifications);
		}
	}
}