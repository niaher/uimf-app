namespace UimfApp.Infrastructure.Security
{
	using System.Collections.Generic;
	using System.Linq;

	/// <summary>
	/// Represents a class which should enumerate list of available roles,
	/// by having them as static fields within the class definition.
	/// </summary>
	public class RoleContainer
	{
		/// <summary>
		/// Gets all actions contained within this container.
		/// </summary>
		/// <returns>List of actions.</returns>
		public virtual IEnumerable<SystemRole> GetRoles()
		{
			return this.GetType()
				.GetFields()
				.Where(a => a.FieldType == typeof(SystemRole))
				.Select(f => f.GetValue(null) as SystemRole)
				.ToList();
		}
	}
}