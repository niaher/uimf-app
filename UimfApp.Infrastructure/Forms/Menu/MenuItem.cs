namespace UimfApp.Infrastructure.Forms.Menu
{
	using UiMetadataFramework.Basic.Output;

	/// <summary>
	/// Represents a menu item which should be rendered on the client.
	/// </summary>
	public class MenuItem : FormLink
	{
		public MenuItem()
		{
		}

		public MenuItem(string menuGroup, int orderIndex = 0)
		{
			this.MenuGroup = menuGroup;
			this.OrderIndex = orderIndex;
		}

		public string MenuGroup { get; set; }
		public int OrderIndex { get; set; }
	}
}