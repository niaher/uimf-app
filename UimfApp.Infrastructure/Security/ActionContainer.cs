namespace UimfApp.Infrastructure.Security
{
	using System.Collections.Generic;
	using System.Linq;

	/// <summary>
	/// Represents a class which should enumerate list of available <see cref="SystemAction"/>,
	/// by having them as static fields within the class definition.
	/// </summary>
	public abstract class ActionContainer
	{
		/// <summary>
		/// Gets all actions contained within this container.
		/// </summary>
		/// <returns>List of actions.</returns>
		public virtual IEnumerable<SystemAction> GetActions()
		{
			return this.GetType()
				.GetFields()
				.Where(a => a.FieldType == typeof(SystemAction))
				.Select(f => f.GetValue(null) as SystemAction)
				.ToList();
		}
	}
}
