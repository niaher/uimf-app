namespace UimfApp.Core.Security.WorkItem
{
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;

	public class WorkItemPermissionManager : EntityPermissionManager<UserContext, WorkItemAction, WorkItemRole, WorkItem>
	{
		public WorkItemPermissionManager() : base(new WorkItemRoleChecker())
		{
		}
	}
}