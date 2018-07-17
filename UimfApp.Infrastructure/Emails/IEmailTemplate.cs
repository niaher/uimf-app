namespace UimfApp.Infrastructure.Emails
{
	using System.Net.Mail;
	using System.Threading.Tasks;

	public interface IEmailTemplate<in TModel>
	{
		Task<MailMessage> Compile(TModel model, string to);
	}
}
