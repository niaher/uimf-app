namespace UimfApp.Core.Notification
{
	using System.Collections.Generic;
	using System.Linq;

	public class NotificationCategory
	{
		private static readonly List<NotificationCategory> List;
		public static NotificationCategory Grant = new NotificationCategory(1, "Grant", "Grant");

		static NotificationCategory()
		{
			List = typeof(NotificationCategory)
				.GetFields()
				.Where(a => a.FieldType == typeof(NotificationCategory))
				.Select(f => f.GetValue(null) as NotificationCategory)
				.ToList();
		}

		private NotificationCategory(int id, string name, string tag)
		{
			this.Id = id;
			this.Name = name;
			this.Tag = tag;
		}

		public int Id { get; }
		public string Name { get; }
		public string Tag { get; }

		public static NotificationCategory Parse(int? category)
		{
			return List.SingleOrDefault(t => t.Id == category);
		}
	}
}