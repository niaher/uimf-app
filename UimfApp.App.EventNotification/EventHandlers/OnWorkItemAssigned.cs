namespace UimfApp.App.EventNotification.EventHandlers
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.Extensions.Options;
	using UimfApp.App.EventNotification.Emails.Templates;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Events;
	using UimfApp.Core.Notification;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Domain;
	using UimfApp.Infrastructure.Emails;
	using UimfApp.Notifications;

	public class OnWorkItemAssigned : AppEventHandler<WorkItemAssigned>
	{
		private readonly IOptions<AppConfig> appConfig;
		private readonly CoreDbContext dbContext;
		private readonly EmailTemplateRegister emailSender;
		private readonly NotificationsDbContext notificationsDbContext;

		public OnWorkItemAssigned(
			EventManager manager,
			EmailTemplateRegister emailSender,
			CoreDbContext dbContext,
			IOptions<AppConfig> appConfig,
			NotificationsDbContext notificationsDbContext) : base(manager)
		{
			this.emailSender = emailSender;
			this.dbContext = dbContext;
			this.appConfig = appConfig;
			this.notificationsDbContext = notificationsDbContext;
		}

		public override void HandleEvent(WorkItemAssigned @event)
		{
			var workItem = this.dbContext.WorkItems
				.Include(t => t.AssignedToUser)
				.SingleOrException(t => t.Id == @event.Context.Id);

			if (workItem.AssignedToUserId != null)
			{
				this.emailSender.SendEmail(
					workItem.AssignedToUser.Email,
					new WorkItemAssignedTemplate.Model(workItem, this.appConfig.Value)).Wait();

				this.notificationsDbContext.PublishForAllUsers(
					"",
					workItem,
					workItem.AssignedToUserId.Value,
					$"Work item #{workItem.Id} was assigned to {workItem.AssignedToUser.Name}.",
					NotificationCategory.WorkItem).Wait();
			}
		}
	}
}