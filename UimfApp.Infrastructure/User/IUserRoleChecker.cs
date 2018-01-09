namespace UimfApp.Infrastructure.User
{
	using System.Collections.Generic;
	using UimfApp.Infrastructure.Security;

	/// <summary>
	/// Represents a class which can retrieve roles for the current user.
	/// </summary>
	public interface IUserRoleChecker
	{
		/// <summary>
		/// Gets roles for the current user.
		/// </summary>
		/// <param name="userContextAccessor">Instance of <see cref="UserContextAccessor"/>.</param>
		/// <returns>List of <see cref="SystemRole"/>.</returns>
		IEnumerable<SystemRole> GetRoles(UserContextAccessor userContextAccessor);
	}
}
