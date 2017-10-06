namespace UimfApp.Core.Forms.Outputs
{
	using System.Collections.Generic;
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("document-list")]
	public class DocumentList
	{
		public bool CanEdit { get; set; }
		public int ContextId { get; set; }
		public string ContextType { get; set; }
		public IEnumerable<Document> Documents { get; set; }
	}
}