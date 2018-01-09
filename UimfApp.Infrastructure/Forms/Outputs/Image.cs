namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("image")]
	public class Image
	{
		public Image(string url)
		{
			this.Url = url;
		}

		public string Url { get; set; }
	}
}
