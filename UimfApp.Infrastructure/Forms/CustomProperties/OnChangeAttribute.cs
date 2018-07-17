namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using System.Collections.Generic;
	using System.Reflection;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;

	public class DependentOn : Attribute, IFieldEventHandlerAttribute
	{
		public DependentOn(string field)
		{
			this.Field = field;
		}

		private string Field { get; }

		public string Id { get; } = "depend-on";
		public string RunAt { get; } = "input:changed";

		public EventHandlerMetadata ToMetadata(PropertyInfo property, MetadataBinder binder)
		{
			return new EventHandlerMetadata(this.Id, this.RunAt)
			{
				CustomProperties = new Dictionary<string, object>().Set(nameof(this.Field), this.Field)
			};
		}

		public bool ApplicableToInputField { get; } = true;
		public bool ApplicableToOutputField { get; } = false;
	}
}
