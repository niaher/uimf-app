namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Core.Binding;

	public class FileUploaderConfigAttribute : Attribute, ICustomPropertyAttribute
	{
		public string AllowedFileExtensions { get; set; }
		public bool AllowMultipleFiles { get; set; }

		public object GetValue()
		{
			return new
			{
				this.AllowMultipleFiles,
				this.AllowedFileExtensions
			};
		}

		public string Name { get; set; } = "fileUploaderConfig";
	}
}
