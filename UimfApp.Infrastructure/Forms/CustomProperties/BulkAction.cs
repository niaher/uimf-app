namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;

	/// <summary>
	/// Can be applied to any <see cref="PaginatedData{T}"/> output field in order
	/// to allow a bulk action on the retrieved items.
	/// </summary>
	[CustomPropertyConfig(IsArray = true)]
	[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = true)]
	public class BulkAction : Attribute, ICustomPropertyAttribute
	{
		private readonly string formId;
		private readonly string itemIdentifierField;
		private readonly string label;

		/// <summary>
		/// Gets or sets list of property names inside "request" object. These "request" object
		/// properties will be used to set input values for the "bulk action" form (<see cref="formId"/>).
		/// </summary>
		private readonly string[] parameters;

		/// <summary>
		/// Adds a bulk action button to be rendered as part of the <see cref="PaginatedData{T}"/>
		/// output field. When added, the client should render a checkbox for each item
		/// in the list, allowing user to select items for which the bulk action should be
		/// executed.
		/// </summary>
		/// <param name="form">Form to be executed when user triggers the bulk action.</param>
		/// <param name="itemIdentifierField">Name of the output field in the class representing an
		///     item inside the <see cref="PaginatedData{T}"/>. Value of this output field will be sent to the
		///     server to identify the row for which the action should be executed.
		/// </param>
		/// <param name="label">Label for the button.</param>
		/// <param name="parameters"></param>
		public BulkAction(Type form, string itemIdentifierField, string label, params string[] parameters)
		{
			this.label = label;
			this.parameters = parameters;
			this.formId = form.GetFormId();
			this.itemIdentifierField = itemIdentifierField;
		}

		public object GetValue()
		{
			return new
			{
				Label = this.label,
				FormId = this.formId,
				ItemIdentifierField = this.itemIdentifierField,
				Parameters = this.parameters
			};
		}

		public string Name => "bulkAction";
	}
}
