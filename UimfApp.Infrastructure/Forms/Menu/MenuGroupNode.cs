namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Generic;

	public class MenuGroupNode : IMenuNode
	{
		public string Label { get; set; }
		public int OrderIndex { get; set; }
		public IList<IMenuNode> Children { get; set; } = new List<IMenuNode>();
	}
}