namespace UimfApp.Notifications
{
	using MediatR;
	using System.Collections.Generic;
	using UiMetadataFramework.Core.Binding;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Outputs;

	[Form(Id = "notification-details", PostOnLoad = true)]
	public class NotificationDetails : MyForm<NotificationDetails.Request, NotificationDetail>
	{
		private readonly NotificationManagerCollection notificationManagerCollection;

		public NotificationDetails(
			NotificationManagerCollection notificationManagerCollection)
		{
			this.notificationManagerCollection = notificationManagerCollection;
		}

		protected override NotificationDetail Handle(Request message)
		{
			var repository = this.notificationManagerCollection.GetInstance(message.ContextType);
			return repository.GetLink(message.ContextId);
		}

		public static FormLink<NotificationDetails> Button(string cotextType, string contextId)
		{
			return new FormLink<NotificationDetails>
			{
				Form = typeof(NotificationDetails).GetFormId(),
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.ContextType), cotextType },
					{ nameof(Request.ContextId), contextId }
				}
			};
		}

		public class Request : IRequest<NotificationDetail>
		{
			public string ContextId { get; set; }
			public string ContextType { get; set; }
		}
	}

}
