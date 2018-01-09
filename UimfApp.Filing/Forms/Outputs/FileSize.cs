namespace UimfApp.Filing.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("file-size")]
	public class FileSize
	{
		public FileSize(long bytes)
		{
			this.Bytes = bytes;
		}

		public long Bytes { get; set; }
	}
}
