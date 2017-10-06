namespace UimfApp.Infrastructure.Forms.Inputs
{
	using System.Collections.Generic;
	using UiMetadataFramework.Core.Binding;

	public class ValueListInputFieldBinding : InputFieldBinding
	{
		public ValueListInputFieldBinding() : base(typeof(ValueList<>), "value-list")
		{
		}
	}

	public class ValueList<T>
	{
		public IList<T> Items { get; set; }
	}
}