namespace UimfApp.App.EventNotification.Emails.Templates
{
	using Microsoft.Extensions.Options;
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Emails;
	using UimfApp.Infrastructure.Messages;

	public class WorkItemAssignedTemplate : EmailTemplate<WorkItemAssignedTemplate.Model>
	{
		public WorkItemAssignedTemplate(IOptions<AppConfig> appConfig, IViewRenderService viewRenderService)
			: base(appConfig, viewRenderService, nameof(WorkItemAssignedTemplate))
		{
		}

		protected override string GetSubject(Model model)
		{
			return $"Work item #{model.Id} assigned to you";
		}

		public class Model
		{
			private readonly AppConfig appConfig;

			public Model(WorkItem item, AppConfig appConfig)
			{
				this.Id = item.Id;
				this.AssigneeName = item.AssignedToUser.Name;
				this.appConfig = appConfig;
				this.Description = item.Description;
			}

			public string AssigneeName { get; set; }
			public string Description { get; set; }
			public int Id { get; set; }
			public string Url => $"{this.appConfig.SiteRoot}/#/form/WorkItem?Id={this.Id}";
		}
	}
}