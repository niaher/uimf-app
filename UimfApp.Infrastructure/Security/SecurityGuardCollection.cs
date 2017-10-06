namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Collections.Concurrent;
	using System.Linq;
	using System.Reflection;
	using CPermissions;
	using UimfApp.Infrastructure.Decorators;

	public static class SecurityGuardCollection
	{
		public static ConcurrentDictionary<Type, ContextSecurityGuard> Guards = new ConcurrentDictionary<Type, ContextSecurityGuard>();

		static SecurityGuardCollection()
		{
			RegisterAssembly(typeof(SecurityGuardCollection).GetTypeInfo().Assembly);
		}

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
				var guard = new ContextSecurityGuard(permissionManager);
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
				.Where(t => t.GetTypeInfo().GetInterfaces().Any(i => i == typeof(ISecurityGuardRepository)))
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

			var repository = (ISecurityGuardRepository)Activator.CreateInstance(guard.Repository);
			return repository.Find(request.ContextId);
		}

		private static void RegisterRepository(Type repository)
		{
			var entityType = repository.GetTypeInfo().GetCustomAttribute<SecurityGuardRepositoryAttribute>().EntityType;

			ContextSecurityGuard guard;
			if (Guards.TryGetValue(entityType, out guard))
			{
				guard.Repository = repository;
			}
		}
	}
}