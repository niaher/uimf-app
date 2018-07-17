namespace UimfApp.Core.Events
{
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure.Domain;

	public class WorkItemAssigned : DomainEvent<WorkItem>
	{
		public WorkItemAssigned(WorkItem context) : base(context)
		{
		}
	}
}