namespace UimfApp.Filing.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("downloadable-file")]
	public class DownloadableFile
	{
		public DownloadableFile(string name, int id, string mimeType)
		{
			this.Name = name;
			this.Id = id;
			this.MimeType = mimeType;
		}

		/// <summary>
		/// Gets or sets unique ID of the file.
		/// </summary>
		public int Id { get; set; }

		/// <summary>
		/// Gets or sets mime type of this file.
		/// </summary>
		public string MimeType { get; set; }

		/// <summary>
		/// Gets or sets label for the file which will be shown to the user.
		/// </summary>
		public string Name { get; set; }
	}
}
