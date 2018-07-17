namespace UimfApp.Core.Security.WorkItem
{
	using System.Collections.Generic;
	using CPermissions;
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure.User;

	public class WorkItemRoleChecker : IRoleChecker<UserContext, WorkItemRole, WorkItem>
	{
		public IEnumerable<WorkItemRole> GetRoles(UserContext user, WorkItem context)
		{
			if (context.AssignedToUserId == user.User.UserId)
			{
				yield return WorkItemRole.WorkItemAssignee;
			}

			if (context.CreatedByUserId == user.User.UserId)
			{
				yield return WorkItemRole.WorkItemCreator;
			}

			if (user.HasRole(CoreRoles.Admin))
			{
				yield return WorkItemRole.SysAdmin;
			}
		}
	}
}