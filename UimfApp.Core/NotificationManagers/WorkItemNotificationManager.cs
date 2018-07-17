namespace UimfApp.Core.NotificationManagers
{
	using System;
	using UimfApp.Core.Commands.WorkItems;
	using UimfApp.Infrastructure;
	using UimfApp.Notifications;

	[RegisterEntry("UimfApp.Core.Domain.WorkItem")]
	public class WorkItemNotificationManager : INotificationManager
	{
		public NotificationDetail GetLink(object entityId)
		{
			return new NotificationDetail
			{
				Link = WorkItemOverview.Button(Convert.ToInt32(entityId), "Open work item")
			};
		}
	}
}