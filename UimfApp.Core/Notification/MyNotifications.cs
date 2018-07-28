namespace UimfApp.Core.Notification
{
	using System;
	using System.Linq;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.Security;
	using UimfApp.Help;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.EntityFramework;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.CustomProperties;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Notifications;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Input.Dropdown;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;

	[MyForm(Id = "my-notifications", PostOnLoad = true, Label = "Notifications", SubmitButtonLabel = UiFormConstants.SearchLabel)]
	[Secure(typeof(CoreActions), nameof(CoreActions.ViewNotifications))]
	[Documentation(DocumentationPlacement.Inline, DocumentationSourceType.String, "Below is a list of new notifications for your account.")]
	[CssClass(UiFormConstants.InputsVerticalMultipleColumn)]
	public class MyNotifications : MyForm<MyNotifications.Request, MyNotifications.Response>
	{
		public enum NotificationStatus
		{
			ShowNotArchivedOnly = 1,
			ShowArchivedOnly = 2
		}

		private readonly NotificationManagerRegister notificationManagerRegister;
		private readonly NotificationsDbContext notificationsDbContext;
		private readonly UserContext userContext;

		public MyNotifications(
			UserContext userContext,
			NotificationsDbContext notificationsDbContext,
			NotificationManagerRegister notificationManagerRegister)
		{
			this.userContext = userContext;
			this.notificationsDbContext = notificationsDbContext;
			this.notificationManagerRegister = notificationManagerRegister;
		}

		public static FormLink Button(string label)
		{
			return new FormLink
			{
				Label = label,
				Form = typeof(MyNotifications).GetFormId()
			};
		}

		protected override Response Handle(Request message)
		{
			var query = this.notificationsDbContext
				.Notifications
				.ForUser(this.userContext)
				.Include(s => s.RelatedTo)
				.AsNoTracking();

			if (!string.IsNullOrEmpty(message.Title))
			{
				query = query.Where(a => a.Description.Contains(message.Title) || a.Summary.Contains(message.Title));
			}

			if (message.IsArchived != null)
			{
				if (message.IsArchived.Value == NotificationStatus.ShowArchivedOnly)
				{
					query = query.Where(t => t.ArchivedOn.HasValue);
				}
				else if (message.IsArchived.Value == NotificationStatus.ShowNotArchivedOnly)
				{
					query = query.Where(t => !t.ArchivedOn.HasValue);
				}
			}

			var notifications = query
				.OrderByDescending(t => t.Id)
				.Paginate(message.NotificationPaginator);

			return new Response
			{
				Metadata = new MyFormResponseMetadata
				{
					Title = "Notifications"
				},
				Items = notifications.Transform(t => new NotificationRow
				{
					Description = t.Description,
					CreatedOn = t.CreatedOn,
					Summary = t.Summary,
					Actions = GetActions(t),
					Archived = t.ArchivedOn != null,
					Link = this.notificationManagerRegister.GetInstance(t.RelatedTo.EntityType).GetLink(t.RelatedTo.EntityId).Link
				})
			};
		}

		private static ActionList GetActions(Notification t)
		{
			return t.ArchivedOn != null
				? new ActionList(UnArchive.Button(t.Id))
				: new ActionList(Archive.Button(t.Id));
		}

		public class Request : IRequest<Response>
		{
			[InputField(OrderIndex = 10, Label = "Is archived")]
			public DropdownValue<NotificationStatus> IsArchived { get; set; }

			public Paginator NotificationPaginator { get; set; }

			[InputField(Label = "Search query")]
			public string Title { get; set; }
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
			[OutputField(OrderIndex = 0)]
			public ActionList Actions { get; set; }

			[PaginatedData(nameof(Request.NotificationPaginator), Label = "")]
			public PaginatedData<NotificationRow> Items { get; set; }
		}

		public class NotificationRow
		{
			[OutputField(OrderIndex = 30)]
			public ActionList Actions { get; set; }

			[OutputField(OrderIndex = 5)]
			public bool Archived { get; set; }

			[OutputField(OrderIndex = 1, Label = "Created on")]
			public DateTime CreatedOn { get; set; }

			[OutputField(OrderIndex = 4)]
			public string Description { get; set; }

			[OutputField(OrderIndex = 4)]
			public FormLink Link { get; set; }

			[OutputField(OrderIndex = 3)]
			public string Summary { get; set; }
		}
	}
}