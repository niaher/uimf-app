namespace UimfApp.Core.Notification
{
	using Nofy.Core;
	using Nofy.Core.Model;
	using UimfApp.Infrastructure.Domain;
	using UiMetadataFramework.Basic.Output;

	public static class Extensions
	{
		public static NotificationAction AsNotificationAction(this FormLink btn, string label)
		{
			return new NotificationAction
			{
				Label = label,
				ActionLink = btn.Form
			};
		}

		public static void PublishForUser<T>(
			this NotificationService ns,
			string description,
			T entity,
			string summary,
			NotificationCategory category,
			params NotificationAction[] actions)
			where T : IDomainEntity
		{
			ns.Publish(new Notification(
				description,
				typeof(T).FullName,
				entity.Key.ToString(),
				NotificationRecipientType.Role.Value,
				"User",
				summary,
				category.Id,
				actions));
		}
	}
}