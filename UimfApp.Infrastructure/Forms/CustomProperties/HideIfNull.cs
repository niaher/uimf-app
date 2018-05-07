namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Core.Binding;

	/// <summary>
	/// Instructs client to hide output field if the value of that field is null.
	/// </summary>
	public class HideIfNull : Attribute, ICustomPropertyAttribute
	{
		public object GetValue()
		{
			return true;
		}

		public string Name { get; set; } = "hideIfNull";
	}
}