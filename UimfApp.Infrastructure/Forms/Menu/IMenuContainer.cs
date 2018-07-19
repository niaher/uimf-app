namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Generic;

	/// <summary>
	/// Provides ability to generate metadata used for building the app's main menu.
	/// </summary>
	public abstract class MenuContainer
	{
		public virtual IEnumerable<MenuItem> GetDynamicMenuItems()
		{
			yield break;
		}

		public virtual IEnumerable<MenuGroup> GetMenuGroups()
		{
			yield break;
		}
	}
}