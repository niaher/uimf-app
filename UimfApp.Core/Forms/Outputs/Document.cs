namespace UimfApp.Core.Forms.Outputs
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("document")]
	public class Document
	{
		public ICollection<FormLink> Actions { get; set; } = new List<FormLink>();
		public FormLink CreatedByUser { get; set; }
		public DateTime DateCreated { get; set; }
		public string FileExtension { get; set; }
		public string HashId { get; set; }
		public string Name { get; set; }
		public long Size { get; set; }

		public bool IsImage() => new[] { "png", "jpg", "gif", "jpeg", "bmp" }.Any(t => t == this.FileExtension.ToLower());
	}
}