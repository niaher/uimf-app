namespace UimfApp.Infrastructure.Tests
{
	using System.Threading.Tasks;
	using FluentAssertions;
	using UimfApp.App.EventNotification.Emails.Templates;
	using UimfApp.Core.Domain;
	using UimfApp.DataSeed;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Emails;
	using Xunit;

	public class EmailTests
	{
		[Fact]
		public async Task CanCompileEmail()
		{
			var container = new DataSeedDiContainer();
			var emailTemplateRegister = container.Container.GetInstance<EmailTemplateRegister>();

			var user = RegisteredUser.Create(1, "jack");
			var workItem = new WorkItem("do magic", user);

			var model = new WorkItemAssignedTemplate.Model(workItem, new AppConfig());

			var email = await emailTemplateRegister.CompileEmail(
				"test@example.com",
				model);

			email.Should().NotBeNull();
		}
	}
}