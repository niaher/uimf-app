namespace UimfApp.Core.Security.WorkItem
{
	using UimfApp.Infrastructure.Security;

	public class WorkItemRole : Role
	{
		public static WorkItemRole SysAdmin = new WorkItemRole(nameof(SysAdmin));
		public static WorkItemRole WorkItemAssignee = new WorkItemRole(nameof(WorkItemAssignee));
		public static WorkItemRole WorkItemCreator = new WorkItemRole(nameof(WorkItemCreator));

		private WorkItemRole(string name) : base(name)
		{
		}
	}
}