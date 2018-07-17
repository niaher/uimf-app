namespace UimfApp.Infrastructure.Emails
{
	using System;
	using System.Collections.Concurrent;
	using System.Linq;
	using System.Net.Mail;
	using System.Reflection;
	using System.Threading.Tasks;
	using UimfApp.Infrastructure.Messages;

	public class EmailTemplateRegister
	{
		private readonly DependencyInjectionContainer dependencyInjectionContainer;
		private readonly IEmailSender emailSender;
		private readonly ConcurrentDictionary<Type, Type> emailTemplateTypes = new ConcurrentDictionary<Type, Type>();

		public EmailTemplateRegister(IEmailSender emailSender, DependencyInjectionContainer dependencyInjectionContainer)
		{
			this.emailSender = emailSender;
			this.dependencyInjectionContainer = dependencyInjectionContainer;
		}

		public async Task<MailMessage> CompileEmail<T>(string to, T model)
		{
			this.emailTemplateTypes.TryGetValue(typeof(T), out var emailTemplateType);

			if (emailTemplateType == null)
			{
				throw new BusinessException($"Cannot find email template for model of type '{typeof(T).FullName}'.");
			}

			var template = (IEmailTemplate<T>)this.dependencyInjectionContainer.GetInstance(emailTemplateType);
			return await template.Compile(model, to);
		}

		public void RegisterAssembly(Assembly assembly)
		{
			assembly.ExportedTypes
				.Where(t => t.ImplementsGenericType(typeof(EmailTemplate<>)))
				.ForEach(t =>
				{
					var baseclass = t.GetBaseClassOfType(typeof(EmailTemplate<>));
					var modelType = baseclass.GenericTypeArguments[0];
					this.emailTemplateTypes.TryAdd(modelType, t);
				});
		}

		public async Task SendEmail<T>(string to, T model)
		{
			var mailMessage = await this.CompileEmail(to, model);
			await this.emailSender.SendEmailAsync(mailMessage);
		}
	}
}
