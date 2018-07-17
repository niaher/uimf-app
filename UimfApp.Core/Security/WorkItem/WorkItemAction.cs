namespace UimfApp.Core.Security.WorkItem
{
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure.Security;

	public class WorkItemAction : EntityAction<WorkItem, WorkItemRole>
	{
		public static readonly WorkItemAction ManageWorkItem =
			new WorkItemAction(nameof(ManageWorkItem), WorkItemRole.WorkItemCreator, WorkItemRole.WorkItemAssignee, WorkItemRole.SysAdmin);

		private WorkItemAction(string name, params WorkItemRole[] roles) : base(name, roles)
		{
		}
	}
}