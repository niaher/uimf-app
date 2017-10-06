namespace UimfApp.Infrastructure.Forms
{
	using System;
	using UiMetadataFramework.MediatR;

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

		public override object GetCustomProperties(Type type)
		{
			return new
			{
				this.SubmitButtonLabel,
				this.PostOnLoadValidation,
				this.Menu,
				this.MenuOrderIndex
			};
		}
	}
}