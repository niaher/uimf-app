namespace UimfApp.Core.Notification
{
	using System.Linq;
	using System.Threading.Tasks;
	using UimfApp.Infrastructure.Domain;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Notifications;

	public static class Extensions
	{
		public static bool AccessibleToUser(this Notification notification, UserContext userContext)
		{
			if (notification.Recipient.EntityType == NotificationRecipientType.UserId.Value &&
				notification.Recipient.EntityId == userContext.User.UserId.ToString())
			{
				return true;
			}

			if (notification.Recipient.EntityType == NotificationRecipientType.Role.Value &&
				userContext.HasRole(notification.Recipient.EntityId))
			{
				return true;
			}

			return false;
		}

		public static IQueryable<Notification> ForRole(this IQueryable<Notification> queryable, Role role)
		{
			return queryable
				.Where(t =>
					t.Recipient.EntityType == NotificationRecipientType.Role.Value &&
					t.Recipient.EntityId == role.Name);
		}

		public static IQueryable<Notification> ForUser(this IQueryable<Notification> queryable, int userId)
		{
			return queryable
				.Where(t =>
					t.Recipient.EntityType == NotificationRecipientType.UserId.Value &&
					t.Recipient.EntityId == userId.ToString());
		}

		public static IQueryable<Notification> ForUser(this IQueryable<Notification> queryable, UserContext userContext)
		{
			int userId = userContext.User.UserId;

			return queryable
				.Where(t =>
					t.Recipient.EntityType == NotificationRecipientType.UserId.Value && t.Recipient.EntityId == userId.ToString() ||
					t.Recipient.EntityType == NotificationRecipientType.Role.Value && userContext.Roles.Contains(t.Recipient.EntityId));
		}

		public static async Task PublishForAllUsers<T>(
			this NotificationsDbContext ns,
			string description,
			T entity,
			int userId,
			string summary,
			NotificationCategory category)
			where T : DomainEntity
		{
			var notification = new Notification(
				new EntityReference(NotificationRecipientType.UserId.Value, userId.ToString()),
				new EntityReference(typeof(T).FullName, entity.Key.ToString()),
				summary,
				description,
				category.Id);

			ns.Notifications.Add(notification);
			await ns.SaveChangesAsync();
		}
	}
}