namespace UimfApp.Notifications
{
	using Microsoft.EntityFrameworkCore;

	[Owned]
	public class EntityReference
	{
		public EntityReference()
		{
		}

		public EntityReference(string entityType, string entityId)
		{
			this.EntityId = entityId;
			this.EntityType = entityType;
		}

		public string EntityId { get; set; }
		public string EntityType { get; set; }
	}
}
