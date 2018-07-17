namespace UimfApp.Infrastructure.Messages
{
	using System.Net.Mail;
	using System.Threading.Tasks;

	public interface IEmailSender
	{
		Task SendEmailAsync(string email, string subject, string message);
		Task SendEmailAsync(MailMessage message);
	}
}
