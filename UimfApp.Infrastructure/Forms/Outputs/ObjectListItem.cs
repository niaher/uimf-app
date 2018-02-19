namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	public class ObjectListItem<T>
	{
		[OutputField(Label = "")]
		public T Value { get; set; }
	}
}