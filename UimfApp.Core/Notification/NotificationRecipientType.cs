namespace UimfApp.Core.Notification
{
	public class NotificationRecipientType
	{
		public static readonly NotificationRecipientType Role = new NotificationRecipientType("1", "Role");
		public static readonly NotificationRecipientType UserId = new NotificationRecipientType("2", "UserId");

		private NotificationRecipientType(string value, string displayName)
		{
			this.Value = value;
			this.Name = displayName;
		}

		public string Name { get; }
		public string Value { get; }
	}
}