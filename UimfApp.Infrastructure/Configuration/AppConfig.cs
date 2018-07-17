namespace UimfApp.Infrastructure.Configuration
{
	public class AppConfig
	{
		public string Environment { get; set; }
		public string NoReplyEmail { get; set; }
		public string SiteRoot { get; set; }
		public string Version { get; set; }
		public string EmailDeliveryMethod { get; set; }
		public string SendGridApiKey { get; set; }
	}
}
