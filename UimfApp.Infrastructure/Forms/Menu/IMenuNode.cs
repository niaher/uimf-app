namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Generic;

	/// <summary>
	/// Represents a single node inside the menu tree.
	/// </summary>
	public interface IMenuNode
	{
		IReadOnlyCollection<IMenuNode> Children { get; }
		string Label { get; }
		int OrderIndex { get; }
		void AddNode(IMenuNode node);
	}
}