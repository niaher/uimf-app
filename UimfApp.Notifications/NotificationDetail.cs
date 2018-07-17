namespace UimfApp.Notifications
{
	using UiMetadataFramework.Basic.Output;
	using UimfApp.Infrastructure.Forms;

	public class NotificationDetail: MyFormResponse
	{
		public ActionList Actions { get; set; }
		public string Description { get; set; }

		/// <summary>
		/// Gets or sets link to the related entity.
		/// </summary>
		public FormLink Link { get; set; }
	}
}
