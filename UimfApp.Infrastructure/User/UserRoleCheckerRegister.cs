namespace UimfApp.Infrastructure.User
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using UimfApp.Infrastructure.Security;

	/// <summary>
	/// Represents a collection of <see cref="IUserRoleChecker"/> objects.
	/// </summary>
	public class UserRoleCheckerRegister
	{
		private readonly List<IUserRoleChecker> managers = new List<IUserRoleChecker>();

		/// <summary>
		/// Gets dynamic roles for the given <see cref="UserContextData"/> instance.
		/// </summary>
		/// <param name="userContextData"><see cref="UserContextData"/> instance or null.</param>
		/// <returns>List of system roles that the user has.</returns>
		public IEnumerable<SystemRole> GetDynamicRoles(UserContextData userContextData)
		{
			return this.managers
				.SelectMany(t => t.GetDynamicRoles(userContextData))
				.Distinct()
				.ToArray();
		}

		/// <summary>
		/// Scans assembly for implementations of <see cref="IUserRoleChecker"/> and
		/// registers them in the collection.
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