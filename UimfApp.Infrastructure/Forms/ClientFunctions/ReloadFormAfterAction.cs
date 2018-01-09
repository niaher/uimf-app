namespace UimfApp.Infrastructure.Forms.ClientFunctions
{
	using System;
	using System.Collections.Generic;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;

	/// <summary>
	/// Instructs form to be reloaded when a child action is performed. Child action
	/// is any action within <see cref="ActionList"/>, which is rendered inside
	/// the form or one of its inline forms.
	/// </summary>
	public class ReloadFormAfterAction : Attribute, IFormEventHandlerAttribute
	{
		public ReloadFormAfterAction(string formId)
		{
			this.FormId = formId;
		}

		/// <summary>
		/// Gets or sets id of the action (i.e. - id of any form inside <see cref="ActionList.Actions"/>)
		/// which when run, will cause the current form to be reloaded.
		/// </summary>
		public string FormId { get; }

		public string Id { get; } = "reload-form-after-action";
		public string RunAt { get; } = "action-list:run";

		public EventHandlerMetadata ToMetadata(Type formType, MetadataBinder binder)
		{
			return new EventHandlerMetadata(this.Id, this.RunAt)
			{
				CustomProperties = new Dictionary<string, object>()
					.Set(nameof(this.FormId), this.FormId)
			};
		}
	}
}
