namespace UimfApp.Core.EventHandlers
{
	using UimfApp.Core.Events;
	using UimfApp.Infrastructure.Domain;

	public class OnWorkItemAssigned : AppEventHandler<WorkItemAssigned>
	{
		public OnWorkItemAssigned(EventManager manager) : base(manager)
		{
		}

		public override void HandleEvent(WorkItemAssigned @event)
		{
			// Event-handling code goes here.
		}
	}
}