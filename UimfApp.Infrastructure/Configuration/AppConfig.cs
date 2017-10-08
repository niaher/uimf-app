namespace UimfApp.Infrastructure.Configuration
{
	public class AppConfig
	{
		public string SiteRoot { get; set; }
		public string Version { get; set; }
		public string NoReplyEmail { get; set; }
		public string SmtpHost { get; set; }
		public string SmtpUsername { get; set; }
		public string SmtpPassword { get; set; }
		public int SmtpPort { get; set; }
	}
}