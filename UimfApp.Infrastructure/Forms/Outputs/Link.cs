namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("link")]
	public class Link
	{
		public Link(string url, string anchor)
		{
			this.Anchor = anchor;
			this.Url = url;
		}

		public string Anchor { get; }
		public string Url { get; }
	}
}
