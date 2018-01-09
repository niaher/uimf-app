namespace UimfApp.Infrastructure.User
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using System.Security.Claims;

	/// <summary>
	/// Gives ability to retrieve information about current user and build corresponding
	/// <see cref="UserContext"/> object.
	/// </summary>
	public abstract class UserContextAccessor
	{
		private readonly List<IUserRoleChecker> managers = new List<IUserRoleChecker>();

		/// <summary>
		/// Gets claims for the current user.
		/// </summary>
		/// <returns>List of current user's roles.</returns>
		public abstract IEnumerable<Claim> GetClaims();

		/// <summary>
		/// Retrieves <see cref="UserContext"/> for the current user.
		/// </summary>
		/// <returns><see cref="UserContext"/> instance.</returns>
		/// <remarks>This method uses <see cref="IUserRoleChecker.GetRoles"/> to populate
		/// <see cref="UserContext.Roles"/>. For this reason this method must not be called
		/// from <see cref="IUserRoleChecker.GetRoles"/>, because it will cause
		/// <see cref="StackOverflowException"/>.</remarks>
		public UserContext GetUserContext()
		{
			var roles = this.managers
				.SelectMany(t => t.GetRoles(this))
				.Select(t => t.Name)
				.Distinct()
				.ToArray();

			// User is authenticated.
			var userId = this.GetUserId();
			if (userId != null)
			{
				return new UserContext(
					this.GetUsername(),
					userId.Value,
					roles);
			}

			// Unauthenticated user.
			return new UserContext(roles);
		}

		/// <summary>
		/// Gets id of the current user.
		/// </summary>
		/// <returns>Id of the current user or null if user is not authenticated.</returns>
		public abstract int? GetUserId();

		/// <summary>
		/// Gets username of the current user.
		/// </summary>
		/// <returns>Username of the current user or null if user is not authenticated.</returns>
		public abstract string GetUsername();

		/// <summary>
		/// Checks whether current user is authenticated or not.
		/// </summary>
		/// <returns>True is user is authenticated, otherwise false.</returns>
		public bool IsAuthenticated() => this.GetUserId() != null;

		/// <summary>
		/// Scans assembly for implementations of <see cref="IUserRoleChecker"/> and
		/// registers them, so that they can be used for construction of <see cref="UserContext"/>
		/// when using <see cref="GetUserContext"/> method.
		/// </summary>
		/// <param name="assembly"></param>
		public void RegisterAssembly(Assembly assembly)
		{
			var roleDecorators = assembly.ExportedTypes
				.Where(t => t.IsClass && !t.IsAbstract)
				.Where(t => t.ImplementsAtLeastOneInterface(typeof(IUserRoleChecker)))
				// Make sure not to register same item twice.
				.Where(t => this.managers.All(f => f.GetType() != t))
				.Select(Activator.CreateInstance)
				.Cast<IUserRoleChecker>()
				.ToList();

			this.managers.AddRange(roleDecorators);
		}
	}
}
