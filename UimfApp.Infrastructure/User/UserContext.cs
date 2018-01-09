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
		/// Initializes a new instance of <see cref="UserContext"/> class,
		/// which represents an unauthenticated user.
		/// </summary>
		internal UserContext(params string[] roles)
		{
			this.Roles = roles;
		}

		/// <summary>
		/// Initializes a new instance of <see cref="UserContext"/> class, 
		/// which represents an authenticated user.
		/// </summary>
		/// <param name="userName"></param>
		/// <param name="userId"></param>
		/// <param name="roles"></param>
		internal UserContext(string userName, int userId, params string[] roles)
			: this(roles)
		{
			if (string.IsNullOrWhiteSpace(userName))
			{
				throw new ArgumentNullException(nameof(userName));
			}

			this.User = new UserContextData(userName, userId);
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
