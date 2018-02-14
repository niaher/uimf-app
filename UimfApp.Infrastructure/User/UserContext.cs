namespace UimfApp.Infrastructure.User
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using UimfApp.Infrastructure.Security;

	/// <summary>
	/// Represents information about a user executing the code.
	/// </summary>
	public class UserContext
	{
		/// <summary>
		/// Initializes a new instance of <see cref="UserContext"/> class.
		/// </summary>
		/// <param name="user">Instance of <see cref="UserContextData"/> or null if user is not authenticated.</param>
		/// <param name="roles">All static and dynamic roles the user holds.</param>
		internal UserContext(UserContextData user, params string[] roles)
		{
			this.Roles = roles;
			this.User = user;
		}

		public bool IsAuthenticated => this.User != null;

		/// <summary>
		/// Collection of <see cref="SystemRole"/> that the user has.
		/// </summary>
		public IEnumerable<string> Roles { get; }

		/// <summary>
		/// Information about the current user. If user is not authenticated
		/// this property will be null.
		/// </summary>
		public UserContextData User { get; }

		public bool HasRole(Role role)
		{
			return this.Roles.Any(t => t.Equals(role.Name, StringComparison.OrdinalIgnoreCase));
		}

		public override string ToString()
		{
			return this.User?.UserName;
		}
	}
}