namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("alert")]
	public class Alert
	{
		public Alert(string heading, string message, string style)
		{
			this.Heading = heading;
			this.Message = message;
			this.Style = style;
		}

		public string Heading { get; set; }
		public string Message { get; set; }
		public string Style { get; set; }

		public static Alert Error(string heading, string message = null)
		{
			return new Alert(heading, message, "danger");
		}

		public static Alert Success(string heading, string message = null)
		{
			return new Alert(heading, message, "success");
		}

		public static Alert Warning(string heading, string message = null)
		{
			return new Alert(heading, message, "warning");
		}
	}
}
