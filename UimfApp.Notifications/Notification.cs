// ReSharper disable UnusedAutoPropertyAccessor.Local

namespace UimfApp.Notifications
{
	using System;
	using UimfApp.Infrastructure;

	public class Notification
	{
		internal const int MaxDescriptionLength = 1000;
		internal const int MaxSummaryLength = 100;
		internal const int MaxEntityIdLength = 50;
		internal const int MaxEntityTypeLength = 200;
		internal const int MaxRecipientTypeLength = 50;
		internal const int MaxRecipientIdLength = 50;

		internal Notification()
		{
		}

		public Notification(EntityReference recipient, EntityReference relatedTo, string summary, string description, int? cateogory = null)
		{
			this.CreatedOn = DateTime.UtcNow;

			this.Recipient = recipient;
			recipient.EntityId.EnforceMaxLength(MaxRecipientIdLength);
			recipient.EntityType.EnforceMaxLength(MaxRecipientTypeLength);

			this.RelatedTo = relatedTo;
			relatedTo.EntityId.EnforceMaxLength(MaxEntityIdLength);
			relatedTo.EntityType.EnforceMaxLength(MaxEntityTypeLength);

			this.Summary = summary.EnforceMaxLength(MaxSummaryLength);
			this.Description = description.EnforceMaxLength(MaxDescriptionLength);
			this.Category = cateogory;
		}

		public DateTime? ArchivedOn { get; private set; }
		public int? Category { get; private set; }
		public DateTime CreatedOn { get; private set; }
		public string Description { get; private set; }
		public int Id { get; set; }
		public DateTime? ReadOn { get; private set; }
		public EntityReference Recipient { get; private set; }
		public EntityReference RelatedTo { get; private set; }
		public string Summary { get; private set; }

		public void Archive()
		{
			if (this.ArchivedOn != null)
			{
				return;
			}

			this.ArchivedOn = DateTime.UtcNow;
		}

		public void MarkAsRead()
		{
			if (this.ReadOn != null)
			{
				return;
			}

			this.ReadOn = DateTime.UtcNow;
		}

		public void MarkAsUnread()
		{
			this.ReadOn = null;
		}

		public void UnArchive()
		{
			this.ArchivedOn = null;
		}
	}
}
