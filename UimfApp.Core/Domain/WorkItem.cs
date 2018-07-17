// ReSharper disable AutoPropertyCanBeMadeGetOnly.Local
// ReSharper disable UnusedAutoPropertyAccessor.Local

namespace UimfApp.Core.Domain
{
	using System;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Domain;

	public class WorkItem : DomainEntityWithKeyInt32
	{
		protected WorkItem()
		{
		}

		public WorkItem(string description, RegisteredUser creator)
		{
			this.CreatedByUserId = creator.Id;
			this.CreatedByUser = creator;
			this.Description = description;
			this.CreatedOn = DateTime.UtcNow;
		}

		public virtual RegisteredUser AssignedToUser { get; private set; }
		public int? AssignedToUserId { get; private set; }
		public DateTime? CompletedOn { get; private set; }
		public virtual RegisteredUser CreatedByUser { get; private set; }
		public int CreatedByUserId { get; private set; }
		public DateTime CreatedOn { get; private set; }
		public string Description { get; private set; }
		public DateTime? DueOn { get; private set; }

		public void AssignToUser(RegisteredUser user)
		{
			this.AssignedToUserId = user?.Id;
			this.AssignedToUser = user;
		}

		public void ChangeDescription(string description)
		{
			if (this.CompletedOn != null)
			{
				throw new BusinessException("Cannot change description of a completed task.");
			}

			this.Description = description;
		}

		public void Complete()
		{
			if (this.CompletedOn != null)
			{
				return;
			}

			this.CompletedOn = DateTime.UtcNow;
		}

		public void MarkAsIncomplete()
		{
			this.CompletedOn = null;
		}

		public void Reopen()
		{
			this.CompletedOn = null;
		}

		public void SetDeadline(DateTime? deadline)
		{
			this.DueOn = deadline;
		}

		public void Unassign()
		{
			this.AssignedToUserId = null;
		}
	}
}