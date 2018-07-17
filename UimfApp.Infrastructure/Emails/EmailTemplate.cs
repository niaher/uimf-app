namespace UimfApp.Infrastructure.Emails
{
	using System.Net.Mail;
	using System.Text;
	using System.Threading.Tasks;
	using Microsoft.Extensions.Options;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Messages;

	public abstract class EmailTemplate<T> : IEmailTemplate<T>
	{
		protected readonly string TemplateName;
		private readonly AppConfig appConfig;
		private readonly IViewRenderService viewRenderService;

		protected EmailTemplate(IOptions<AppConfig> appConfig, IViewRenderService viewRenderService, string name)
		{
			this.appConfig = appConfig.Value;
			this.viewRenderService = viewRenderService;
			this.TemplateName = name;
		}

		public async Task<MailMessage> Compile(T model, string to)
		{
			var body = await this.viewRenderService.RenderToString(model);

			return new MailMessage(this.appConfig.NoReplyEmail, to)
			{
				BodyEncoding = Encoding.UTF8,
				IsBodyHtml = true,
				Body = body + 
					"<br><br><hr><small>You are receiving this email because you " +
					$"are registered on <a href='{this.appConfig.SiteRoot}'>{this.appConfig.SiteRoot}</a>.</small>",
				Subject = this.GetSubject(model)
			};
		}

		protected abstract string GetSubject(T model);
	}
}
