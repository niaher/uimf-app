namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Generic;

	/// <summary>
	/// Represents a single node inside the menu tree.
	/// </summary>
	public interface IMenuNode
	{
		IList<IMenuNode> Children { get; }
		string Label { get; }
		int OrderIndex { get; }
	}
}