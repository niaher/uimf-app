namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Generic;
	using System.Linq;
	using UiMetadataFramework.Basic.Output;

	public class MenuItemNode : FormLink, IMenuNode
	{
		private List<IMenuNode> children = new List<IMenuNode>();
		public int OrderIndex { get; set; }
		public IReadOnlyCollection<IMenuNode> Children => this.children.AsReadOnly();

		public void AddNode(IMenuNode node)
		{
			if (!this.children.Contains(node))
			{
				this.children.Add(node);
				this.children = this.children.OrderBy(t => t.OrderIndex).ToList();
			}
		}
	}
}