namespace UimfApp.Core.Commands
{
	using System.Collections.Generic;
	using UimfApp.Core.Commands.WorkItems;
	using UimfApp.Infrastructure;
	using UiMetadataFramework.Basic.Output;

	public static class TabstripUtility
	{
		public static Tabstrip GetWorkItemTabs(string currentForm, int workItemId)
		{
			return new Tabstrip
			{
				CurrentTab = currentForm,
				Tabs = new List<Tab>
				{
					WorkItemOverview.Button(workItemId, "Overview").AsTab()
				}
			};
		}
	}
}