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
		private readonly DependencyInjectionContainer dependencyInjectionContainer;
		private readonly List<Type> managers = new List<Type>();

		public UserRoleCheckerRegister(DependencyInjectionContainer dependencyInjectionContainer)
		{
			this.dependencyInjectionContainer = dependencyInjectionContainer;
		}

		/// <summary>
		/// Gets dynamic roles for the given <see cref="UserContextData"/> instance.
		/// </summary>
		/// <param name="userContextData"><see cref="UserContextData"/> instance or null.</param>
		/// <returns>List of system roles that the user has.</returns>
		public IEnumerable<SystemRole> GetDynamicRoles(UserContextData userContextData)
		{
			var roleCheckers = this.managers
				.Select(t => this.dependencyInjectionContainer.GetInstance(t))
				.Cast<IUserRoleChecker>();

			List<SystemRole> results = new List<SystemRole>();

			foreach (var roleChecker in roleCheckers)
			{
				var rolesToAdd = roleChecker.GetDynamicRoles(userContextData).ToList();
				results.AddRange(rolesToAdd);
			}

			return results.Distinct().ToArray();
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
				.Where(t => this.managers.All(f => f != t))
				.ToList();

			this.managers.AddRange(roleDecorators);
		}
	}
}
