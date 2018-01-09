namespace UimfApp.Web.Email
{
	using System.Net;
	using System.Net.Mail;
	using System.Threading.Tasks;
	using Microsoft.Extensions.Options;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Messages;

	public class AuthMessageSender : IEmailSender, ISmsSender
	{
		private readonly AppConfig appConfig;

		public AuthMessageSender(IOptions<AppConfig> appConfig)
		{
			this.appConfig = appConfig.Value;
		}

		public async Task SendEmailAsync(string email, string subject, string message)
		{
			var client = new SmtpClient(this.appConfig.SmtpHost, this.appConfig.SmtpPort)
			{
				EnableSsl = true,
				Credentials = new NetworkCredential(this.appConfig.SmtpUsername, this.appConfig.SmtpPassword)
			};

			var mailMessage = new MailMessage { From = new MailAddress(this.appConfig.NoReplyEmail) };
			mailMessage.To.Add(email);
			mailMessage.Body = message;
			mailMessage.Subject = subject;
			mailMessage.IsBodyHtml = true;

			await client.SendMailAsync(mailMessage);
		}

		public Task SendSmsAsync(string number, string message)
		{
			// Plug in your SMS service here to send a text message.
			return Task.FromResult(0);
		}
	}
}
