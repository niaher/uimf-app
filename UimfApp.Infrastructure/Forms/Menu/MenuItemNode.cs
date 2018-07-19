namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Generic;
	using UiMetadataFramework.Basic.Output;

	public class MenuItemNode : FormLink, IMenuNode
	{
		public int OrderIndex { get; set; }
		public IList<IMenuNode> Children { get; set; } = new List<IMenuNode>();
	}
}