namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Core.Binding;

	public class HideIfNull : Attribute, ICustomPropertyAttribute
	{
		public object GetValue()
		{
			return true;
		}

		public string Name { get; set; } = "hideIfNull";
	}
}
