namespace UimfApp.Infrastructure.Forms.Record
{
	using UiMetadataFramework.Basic.Input.Dropdown;
	using UiMetadataFramework.Core.Binding;

	public class RecordResponse : MyFormResponse
	{
		[NotField]
		public DropdownValue<RecordRequestOperation?> NextOperation { get; set; } = new DropdownValue<RecordRequestOperation?>(RecordRequestOperation.Post);
	}
}
