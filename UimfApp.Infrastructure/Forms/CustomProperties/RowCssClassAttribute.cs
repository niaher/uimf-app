namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Core.Binding;

	public class RowCssClassAttribute : Attribute, ICustomPropertyAttribute
	{
		public RowCssClassAttribute(string cssClass)
		{
			this.CssClass = cssClass;
		}

		public string CssClass { get; set; }
		public string Suffix { get; set; }

		public object GetValue()
		{
			return new
			{
				CssClass = this.CssClass,
				Suffix = this.Suffix
			};
		}

		public string Name { get; set; } = "rowCssClass";
	}
}
