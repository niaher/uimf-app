namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using UiMetadataFramework.Core.Binding;

	public class ListType : StringPropertyAttribute
	{
		public ListType(string value)
			: base("listType", value)
		{
		}
	}
}
