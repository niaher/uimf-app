namespace UimfApp.Infrastructure.Security
{
	using System.Collections.Generic;
	using CPermissions;

	/// <summary>
	/// Represents an action that user can perform within the system.
	/// </summary>
	public class SystemAction : UserAction
	{
		/// <summary>
		/// Gets or sets list of roles that have permission to use this action.
		/// </summary>
		public readonly IEnumerable<SystemRole> Roles;

		/// <summary>
		/// Initializes a new instance of the <see cref="SystemAction"/> class.
		/// </summary>
		/// <param name="name">Name of the action. Must be unique.</param>
		public SystemAction(string name) : this(name, null)
		{
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="SystemAction"/> class.
		/// </summary>
		/// <param name="name">Name of the action. Must be unique.</param>
		/// <param name="roles">List of roles that have permission to use this action.</param>
		public SystemAction(string name, params SystemRole[] roles) : base(name)
		{
			this.Roles = roles ?? new SystemRole[0];
		}
	}
}
