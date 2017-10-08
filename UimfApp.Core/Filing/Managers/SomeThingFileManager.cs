namespace UimfApp.Core.Filing.Managers
{
	using System.Collections.Generic;
	using UiMetadataFramework.Basic.Output;

	[EntityFileManager(EntityType = Key)]
	public class SomeThingFileManager : IEntityFileManager
	{
		public const string Key = "something";

		public bool CanDeleteFiles(object entityId, string metTag)
		{
			return true;
		}

		public bool CanUploadFiles(object entityId)
		{
			return true;
		}

		public bool CanViewFiles(object entityId)
		{
			return true;
		}

		public IEnumerable<FormLink> GetActions(object entityId, string metaTag = null, bool isMultiple = false)
		{
			return new List<FormLink>
			{
				//AttachFiles.Button(entityId, Key, metaTag, isMultiple)
			};
		}

		public static string ContextId(object id) => $"{Key}:{id}";
	}
}