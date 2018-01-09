namespace UimfApp.Filing.Forms.Outputs
{
	using System;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;
	using UimfApp.Infrastructure.Forms.Outputs;

	public class FileInfo
	{
		[OutputField(Label = "", OrderIndex = 100)]
		public ActionList Actions { get; set; }

		[OutputField(Label = "Creator", OrderIndex = 20)]
		public string CreatedByUser { get; set; }

		[OutputField(Label = "Created on", OrderIndex = 10)]
		public DateTime CreatedOn { get; set; }

		[OutputField(Hidden = true, OrderIndex = 1)]
		public string FileExtension { get; set; }

		[OutputField(Label = "Name", OrderIndex = 0)]
		public Link Name { get; set; }

		[OutputField(Label = "Preview", OrderIndex = -10)]
		public Image Preview { get; set; }

		[OutputField(Label = "Size", OrderIndex = 5)]
		public FileSize Size { get; set; }
	}
}
