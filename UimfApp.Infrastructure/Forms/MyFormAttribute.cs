namespace UimfApp.Infrastructure.Forms
{
	using System;
	using System.Collections.Generic;
	using UiMetadataFramework.Core.Binding;

	public class MyFormAttribute : FormAttribute
	{
		/// <summary>
		/// Gets or sets parent menu where the form will show up.
		/// </summary>
		public string Menu { get; set; }

		/// <summary>
		/// Gets or sets relative position of this form inside the menu in relation
		/// to other menus.
		/// </summary>
		public int MenuOrderIndex { get; set; }

		/// <summary>
		/// Gets or sets text for the submit button.
		/// </summary>
		public string SubmitButtonLabel { get; set; } = "Submit";

		public override IDictionary<string, object> GetCustomProperties(Type type)
		{
			return new Dictionary<string, object>()
				.Set(nameof(this.SubmitButtonLabel), this.SubmitButtonLabel)
				.Set(nameof(this.PostOnLoadValidation), this.PostOnLoadValidation)
				.Set(nameof(this.Menu), this.Menu)
				.Set(nameof(this.MenuOrderIndex), this.MenuOrderIndex);
		}
	}
}
