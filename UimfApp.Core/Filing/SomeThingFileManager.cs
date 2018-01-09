namespace UimfApp.Core.Filing
{
	using System;
	using System.Collections.Generic;
	using UiMetadataFramework.Basic.Output;
	using UimfApp.Core.Domain;
	using UimfApp.Core.Security.SomeThing;
	using UimfApp.Filing;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.User;

	[EntityFileManager(EntityType = Key)]
	public class SomeThingFileManager : IEntityFileManager
	{
		public const string Key = "something";
		private readonly SomeThingPermissionManager someThingPermissionManager;
		private readonly SomeThingRepository repository;
		private readonly UserContext userContext;

		public SomeThingFileManager(SomeThingRepository repository, SomeThingPermissionManager someThingPermissionManager, UserContext userContext)
		{
			this.repository = repository;
			this.someThingPermissionManager = someThingPermissionManager;
			this.userContext = userContext;
		}

		public bool CanDeleteFiles(object entityId, string metTag)
		{
			return this.CanDo(entityId, SomeThingAction.Edit);
		}

		public bool CanUploadFiles(object entityId)
		{
			return this.CanDo(entityId, SomeThingAction.Edit);
		}

		public bool CanViewFiles(object entityId)
		{
			return this.CanDo(entityId, SomeThingAction.View);
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

		private bool CanDo(object entityId, SomeThingAction action)
		{
			var grantId = Convert.ToInt32(entityId);
			var grant = (SomeThing)this.repository.Find(grantId);

			return this.someThingPermissionManager.CanDo(
				action,
				this.userContext,
				grant);
		}
	}
}
