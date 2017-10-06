namespace UimfApp.Core.Filing
{
	using System.Collections.Generic;
	using UiMetadataFramework.Basic.Output;

	public interface IEntityFileManager
	{
		bool CanDeleteFiles(object entityId, string metTag);
		bool CanUploadFiles(object entityId);
		bool CanViewFiles(object entityId);
		IEnumerable<FormLink> GetActions(object entityId, string metaTag = null, bool isMultiple = false);
	}
}