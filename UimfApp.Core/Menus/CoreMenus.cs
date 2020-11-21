namespace UimfApp.Core.Menus
{
	using System;
	using System.Collections.Generic;
	using UimfApp.Core.Notification;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Menu;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Notifications;

	[RegisterEntry("core")]
	public sealed class CoreMenus : MenuContainer
	{
		public const string WorkItems = "Work items";
		public const string System = "System";
		public const string Notifications = "Notifications";
		private readonly NotificationsDbContext context;
		private readonly UserSecurityContext userSecurityContext;

		public CoreMenus(NotificationsDbContext context, UserSecurityContext userSecurityContext)
		{
			this.context = context;
			this.userSecurityContext = userSecurityContext;
		}

		public override IEnumerable<MenuItem> GetDynamicMenuItems()
		{
			if (this.userSecurityContext.CanAccess(typeof(MyNotifications)))
			{
				//var notificationCount = this.context.Notifications
				//	.Count(t => t.ReadOn == null && t.ArchivedOn == null);

				var count = new Random().Next(1, 100);

				yield return MyNotifications
					.Button($"<i class='far fa-bell' title='Notifications'></i>{UiFormConstants.CounterForTopMenu(count)}")
					.AsMenuItem(Notifications);
			}
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
	}
}