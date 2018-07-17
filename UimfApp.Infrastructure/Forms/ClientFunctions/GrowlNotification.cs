namespace UimfApp.Infrastructure.Forms.ClientFunctions
{
	using System;
	using System.Collections.Generic;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;

	public class GrowlNotification
	{
		public GrowlNotification(string message, GrowlNotificationStyle style) : this(null, message, style)
		{
		}

		public GrowlNotification(string heading, string message, GrowlNotificationStyle style)
		{
			this.Heading = heading;
			this.Message = message;

			switch (style)
			{
				case GrowlNotificationStyle.Success:
					this.Message = "success";
					break;
				case GrowlNotificationStyle.Warning:
					this.Message = "warning";
					break;
				case GrowlNotificationStyle.Danger:
					this.Message = "danger";
					break;
				default:
					throw new ArgumentOutOfRangeException(nameof(style), style, null);
			}
		}

		public string Heading { get; set; }
		public string Message { get; set; }
		public string Style { get; set; }

		public ClientFunctionMetadata GetClientFunctionMetadata()
		{
			var customProperties = new Dictionary<string, object>()
				.Set(nameof(this.Heading), this.Heading)
				.Set(nameof(this.Message), this.Message)
				.Set(nameof(this.Style), this.Style);

			return new ClientFunctionMetadata("growl", customProperties);
		}
	}
}
