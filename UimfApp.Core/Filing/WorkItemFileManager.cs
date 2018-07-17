namespace UimfApp.Core.Filing
{
	using System;
	using System.Collections.Generic;
	using UimfApp.Core.Domain;
	using UimfApp.Core.Security.WorkItem;
	using UimfApp.Filing;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.User;
	using UiMetadataFramework.Basic.Output;

	[RegisterEntry(Key)]
	public class WorkItemFileManager : IEntityFileManager
	{
		public const string Key = "work-item";
		private readonly WorkItemRepository repository;
		private readonly UserContext userContext;
		private readonly WorkItemPermissionManager workItemPermissionManager;

		public WorkItemFileManager(
			WorkItemPermissionManager workItemPermissionManager,
			UserContext userContext,
			WorkItemRepository repository)
		{
			this.workItemPermissionManager = workItemPermissionManager;
			this.userContext = userContext;
			this.repository = repository;
		}

		public bool CanDeleteFiles(object entityId, string metTag)
		{
			return this.CanDo(entityId, WorkItemAction.ManageWorkItem);
		}

		public bool CanUploadFiles(object entityId)
		{
			return this.CanDo(entityId, WorkItemAction.ManageWorkItem);
		}

		public bool CanViewFiles(object entityId)
		{
			return this.CanDo(entityId, WorkItemAction.ManageWorkItem);
		}

		public IEnumerable<FormLink> GetActions(object entityId, string metaTag = null, bool isMultiple = false)
		{
			yield break;
		}

		public IEnumerable<FormLink> GetFileActions(object entityId, int fileId)
		{
			yield break;
		}

		public static string ContextId(object id) => $"{Key}:{id}";

		private bool CanDo(object entityId, WorkItemAction action)
		{
			var verificationId = Convert.ToInt32(entityId);
			var verification = (WorkItem)this.repository.Find(verificationId);

			return this.workItemPermissionManager.CanDo(
				action,
				this.userContext,
				verification);
		}
	}
}