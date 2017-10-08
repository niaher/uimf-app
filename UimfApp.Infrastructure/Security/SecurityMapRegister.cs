namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Collections.Concurrent;
	using System.Linq;
	using System.Reflection;
	using CPermissions;
	using UimfApp.Infrastructure.Decorators;

	/// <summary>
	/// Represents a collection of <see cref="SecurityMap"/> objects.
	/// </summary>
	public static class SecurityMapRegister
	{
		public static ConcurrentDictionary<Type, SecurityMap> Guards = new ConcurrentDictionary<Type, SecurityMap>();

		static SecurityMapRegister()
		{
			RegisterAssembly(typeof(SecurityMapRegister).GetTypeInfo().Assembly);
		}

		/// <summary>
		/// Scans assembly for <see cref="IPermissionManager{TUserAction,TUser,TContext}"/> and adds keeps
		/// the result for future reference.
		/// </summary>
		/// <param name="assembly"></param>
		public static void RegisterAssembly(Assembly assembly)
		{
			var permissionManagers = assembly.ExportedTypes
				.Where(t =>
				{
					var typeInfo = t.GetTypeInfo();

					return typeInfo.IsClass &&
						!typeInfo.IsAbstract &&
						!typeInfo.IsGenericType;
				})
				.Where(t => t.GetTypeInfo().GetInterfaces()
					.Any(i => i.GetTypeInfo().IsGenericType && i.GetGenericTypeDefinition() == typeof(IPermissionManager<,,>)))
				.ToList();

			foreach (var permissionManager in permissionManagers)
			{
				var guard = new SecurityMap(permissionManager);
				Guards.TryAdd(guard.ContextType, guard);
			}

			var repositories = assembly.ExportedTypes
				.Where(t =>
				{
					var typeInfo = t.GetTypeInfo();

					return typeInfo.IsClass &&
						!typeInfo.IsAbstract &&
						!typeInfo.IsGenericType;
				})
				.Where(t => t.GetTypeInfo().GetInterfaces().Any(i => i == typeof(IEntityRepository)))
				.ToList();

			foreach (var repository in repositories)
			{
				RegisterRepository(repository);
			}
		}

		internal static object GetContext(Type contextType, ISecureHandlerRequest request)
		{
			if (!Guards.TryGetValue(contextType, out var guard))
			{
				throw new BusinessException($"Context of type `{contextType.Name}` was not registered with the `SecurityGuard`.");
			}

			var repository = (IEntityRepository)Activator.CreateInstance(guard.Repository);
			return repository.Find(request.ContextId);
		}

		private static void RegisterRepository(Type repository)
		{
			var entityType = repository.GetTypeInfo().GetCustomAttribute<EntityRepositoryAttribute>().EntityType;

			if (Guards.TryGetValue(entityType, out var map))
			{
				map.Repository = repository;
			}
		}
	}
}