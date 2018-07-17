namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	public class ObjectListItem<T>
	{
		public ObjectListItem()
		{
		}

		public ObjectListItem(T value)
		{
			this.Value = value;
		}

		[OutputField(Label = "")]
		public T Value { get; set; }
	}
}
