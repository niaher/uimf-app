namespace UimfApp.Infrastructure.Forms
{
	public static class UiFormConstants
	{
		public const string SearchLabel = "<i class='fa fa-search'></i> Search";
		public const string EditSubmitLabel = "Save changes";
		public const string EditLabel = "<i class='fa fa-edit'></i>";
		public const string DeleteLabel = "<i class='fa fa-times'></i>";
		public const string EditIconLabel = "<i class='far fa-edit'></i>";
		public const string ImpersonationLabel = "<i class='far fa-eye'></i>";
		public const string StopImpersonationLabel = "<i class='far fa-eye-slash'></i>";
		public const string NotificationsLabel = "<i class='far fa-bell' title='Notifications'></i>";
		public const string SubTabsTemplate = "subtabs-template";
		public const string SubTabsClass = "subtabs";

		public const string InputsVerticalMultipleColumn = "inputs-vertical-multiple-column";
		public const string InputsVerticalOneColumn = "inputs-vertical-one-column";
		public const string OutputsVerticalOneColumn = "outputs-vertical-one-column";
		public const string InputsHorizontalOneColumn = "inputs-horizontal-one-column";
		public const string OutputsHorizontalOneColumn = "outputs-horizontal-one-column";
		public const string InputsHorizontalMultipleColumn = "inputs-horizontal-one-column";
		public const string OutputsHorizontalMultipleColumn = "outputs-horizontal-one-column";
		public const string OutputsVerticalMultipleColumn = "outputs-vertical-multiple-column";

		public const string CardLayout = "card-layout";

		public static string CounterForTopMenu(int count) => count == 0 ? "" : $"<span class='count'>{count}</span>";
		public static string FileUrl(int fileId) => $"/file/download?id={fileId}";
	}
}