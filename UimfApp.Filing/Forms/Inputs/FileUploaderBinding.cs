namespace UimfApp.Filing.Forms.Inputs
{
	using UiMetadataFramework.Core.Binding;

	public class FileUploaderBinding : InputFieldBinding
	{
		public FileUploaderBinding() : base(typeof(FileUploader), "file-uploader")
		{
		}
	}

	public class FileUploader
	{
		public int[] Files { get; set; }
	}
}
