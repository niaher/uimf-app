namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("documentation")]
	public class Documentation
	{
		public Documentation()
		{
			
		}

		public Documentation(string htmlString)
		{
			this.Value = htmlString;
		}

		/// <summary>
		/// Gets or sets HTML string to render in the client.
		/// </summary>
		public string Value { get; set; }
	}
}
