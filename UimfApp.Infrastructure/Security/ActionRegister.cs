namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Collections.Concurrent;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using CPermissions;

	/// <summary>
	/// Keeps list of roles and allowed actions for each role. Provides simple API to scan
	/// assemblies for roles/actions (<see cref="RoleContainer"/>, <see cref="ActionContainer"/>) and 
	/// add register those roles/actions for future lookup.
	/// </summary>
	public class ActionRegister
	{
		private readonly ConcurrentDictionary<string, List<SystemAction>> registeredRoles = new ConcurrentDictionary<string, List<SystemAction>>();
		private readonly ConcurrentDictionary<string, SystemRole> roles = new ConcurrentDictionary<string, SystemRole>();

		/// <summary>
		/// Retrieves allowed actions for the specified role.
		/// </summary>
		/// <param name="role">Name of a role.</param>
		/// <returns>List of actions allowed for the role.</returns>
		public IEnumerable<UserAction> GetActions(string role)
		{
			this.registeredRoles.TryGetValue(role, out var actions);
			return actions ?? new List<UserAction>().AsEnumerable();
		}

		/// <summary>
		/// Attempts to get <see cref="SystemRole"/> given its name.
		/// </summary>
		/// <param name="role">Name of the role. Case-sensitive.</param>
		/// <returns><see cref="SystemRole"/> instance or null if specified role was not registered.</returns>
		public SystemRole GetRoleByName(string role)
		{
			this.roles.TryGetValue(role, out var result);
			return result;
		}

		/// <summary>
		/// Gets list of all registered roles.
		/// </summary>
		/// <returns></returns>
		public IEnumerable<SystemRole> GetSystemRoles()
		{
			return this.roles.Values;
		}

		/// <summary>
		/// Registers assembly making sure that all <see cref="ActionContainer"/> and <see cref="RoleContainer"/>
		/// classes are scanned and corresponding roles and actions are registered within this register.
		/// </summary>
		/// <param name="assembly"></param>
		public void RegisterAssembly(Assembly assembly)
		{
			var actionContainerTypes = assembly.ExportedTypes
				.Where(t => t.IsClass && !t.IsAbstract && !t.IsGenericType)
				.Where(t => typeof(ActionContainer).IsAssignableFrom(t))
				.ToList();

			foreach (var containerType in actionContainerTypes)
			{
				var container = (ActionContainer)Activator.CreateInstance(containerType);

				foreach (var action in container.GetActions())
				{
					foreach (var role in action.Roles)
					{
						var listOfRoleActions = this.registeredRoles.GetOrAdd(role.Name, new List<SystemAction>());
						this.roles.TryAdd(role.Name, role);

						if (!listOfRoleActions.Any(t => t.Name.Equals(action.Name, StringComparison.OrdinalIgnoreCase)))
						{
							listOfRoleActions.Add(action);
						}
					}
				}
			}

			var roleContainerTypes = assembly.ExportedTypes
				.Where(t => t.IsClass && !t.IsAbstract && !t.IsGenericType)
				.Where(t => typeof(RoleContainer).IsAssignableFrom(t))
				.ToList();

			foreach (var type in roleContainerTypes)
			{
				var container = (RoleContainer)Activator.CreateInstance(type);
				foreach (var role in container.GetRoles())
				{
					this.registeredRoles.TryAdd(role.Name, new List<SystemAction>());
					this.roles.TryAdd(role.Name, role);
				}
			}
		}
	}
}
