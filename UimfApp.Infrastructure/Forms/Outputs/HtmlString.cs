namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("html-string")]
	public class HtmlString
	{
		public HtmlString()
		{
		}

		public HtmlString(string html)
		{
			this.Value = html;
		}

		/// <summary>
		/// Gets or sets HTML string to render in the client.
		/// </summary>
		public string Value { get; set; }
	}
}
