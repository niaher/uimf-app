namespace UimfApp.Filing.Forms.Outputs
{
	using System;
	using Filer.Core;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;

	public class FileInfo
	{
		public FileInfo(File file, ActionList actions)
		{
			this.Name = new Link(UiFormConstants.FileUrl(file.Id), file.Name);
			this.CreatedOn = file.CreatedOn;
			this.CreatedByUser = file.CreatedByUserId?.ToString();
			this.FileExtension = file.Extension;
			this.Preview = GetPreviewImage(file);
			this.Actions = actions;
			this.Size = new FileSize(file.Size);
		}

		[OutputField(Label = "", OrderIndex = 100)]
		public ActionList Actions { get; set; }

		[OutputField(Label = "Creator", OrderIndex = 20)]
		public string CreatedByUser { get; set; }

		[OutputField(Label = "Created on", OrderIndex = 10)]
		public DateTime CreatedOn { get; set; }

		[OutputField(Hidden = true, OrderIndex = 1)]
		public string FileExtension { get; set; }

		[OutputField(Label = "File", OrderIndex = 0)]
		public Link Name { get; set; }

		[OutputField(Label = "Preview", OrderIndex = 30)]
		public Image Preview { get; set; }

		[OutputField(Label = "Size", OrderIndex = 1)]
		public FileSize Size { get; set; }

		internal static Image GetPreviewImage(File a)
		{
			return a.Name.IsImageFilename()
				? new Image(UiFormConstants.FileUrl(a.Id))
				: null;
		}
	}
}