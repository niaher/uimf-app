namespace UimfApp.DataSeed
{
	using System;
	using System.IO;
	using System.Net.Mail;
	using System.Threading.Tasks;
	using Microsoft.Extensions.Options;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Messages;

	public class FakeMessageSender : IEmailSender, ISmsSender
	{
		private readonly AppConfig appConfig;

		public FakeMessageSender(IOptions<AppConfig> appConfig)
		{
			this.appConfig = appConfig.Value;
		}

		public Task SendEmailAsync(string email, string subject, string message)
		{
			var mailMessage = new MailMessage(this.appConfig.NoReplyEmail, email, subject, message);
			return this.SendEmailAsync(mailMessage);
		}

		public async Task SendEmailAsync(MailMessage message)
		{
			string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Temp", "Emails");
			Directory.CreateDirectory(path);

			var client = new SmtpClient("smtp.example.com")
			{
				DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory,
				PickupDirectoryLocation = path
			};

			await client.SendMailAsync(message);
		}

		public Task SendSmsAsync(string number, string message)
		{
			return Task.CompletedTask;
		}
	}
}
