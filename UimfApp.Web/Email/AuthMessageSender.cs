namespace UimfApp.Web.Email
{
	using System.IO;
	using System.Linq;
	using System.Net.Mail;
	using System.Text.RegularExpressions;
	using System.Threading.Tasks;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.Extensions.Options;
	using SendGrid;
	using SendGrid.Helpers.Mail;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Messages;
	using ApplicationException = UimfApp.Infrastructure.ApplicationException;

	public class AuthMessageSender : IEmailSender, ISmsSender
	{
		private readonly AppConfig appConfig;
		private readonly IWebHostEnvironment hostingEnvironment;

		public AuthMessageSender(IOptions<AppConfig> appConfig, IWebHostEnvironment hostingEnvironment)
		{
			this.hostingEnvironment = hostingEnvironment;
			this.appConfig = appConfig.Value;
		}

		public async Task SendEmailAsync(string email, string subject, string message)
		{
			if (this.appConfig.EmailDeliveryMethod == "SendGrid")
			{
				var apiKey = this.appConfig.SendGridApiKey;
				var client = new SendGridClient(apiKey);
				var from = new EmailAddress(this.appConfig.NoReplyEmail);
				var to = new EmailAddress(email);
				var plainTextContent = Regex.Replace(message, "<[^>]*>", "");
				var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, message);
				await client.SendEmailAsync(msg);
			}
			else if (this.appConfig.EmailDeliveryMethod == "LocalFolder")
			{
				string path = Path.Combine(this.hostingEnvironment.ContentRootPath, "Temp", "Emails");
				Directory.CreateDirectory(path);

				var client = new SmtpClient("smtp.example.com")
				{
					DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory,
					PickupDirectoryLocation = path
				};
				var mailMessage = new MailMessage
				{
					From = new MailAddress(this.appConfig.NoReplyEmail),
					To = { email },
					Body = message,
					Subject = subject,
					IsBodyHtml = true
				};
				await client.SendMailAsync(mailMessage);
			}
			else
			{
				throw new ApplicationException("Email delivery method is invalid.");
			}
		}

		public async Task SendEmailAsync(MailMessage message)
		{
			if (this.appConfig.EmailDeliveryMethod == "SendGrid")
			{
				var apiKey = this.appConfig.SendGridApiKey;
				var client = new SendGridClient(apiKey);
				var from = new EmailAddress(this.appConfig.NoReplyEmail);
				var to = new EmailAddress(message.To.First().Address);
				var plainTextContent = Regex.Replace(message.Body, "<[^>]*>", "");
				var msg = MailHelper.CreateSingleEmail(from, to, message.Subject, plainTextContent, message.Body);
				await client.SendEmailAsync(msg);
			}
			else if (this.appConfig.EmailDeliveryMethod == "LocalFolder")
			{
				string path = Path.Combine(this.hostingEnvironment.ContentRootPath, "Temp", "Emails");
				Directory.CreateDirectory(path);

				var client = new SmtpClient("smtp.example.com")
				{
					DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory,
					PickupDirectoryLocation = path
				};
				
				await client.SendMailAsync(message);
			}
			else
			{
				throw new ApplicationException("Email delivery method is invalid.");
			}
		}

		public Task SendSmsAsync(string number, string message)
		{
			// Plug in your SMS service here to send a text message.
			return Task.FromResult(0);
		}
	}
}
