namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Collections.Concurrent;
	using System.Linq;
	using System.Reflection;
	using CPermissions;

	/// <summary>
	/// Represents a collection of <see cref="EntitySecurityConfiguration"/> objects.
	/// </summary>
	public class EntitySecurityConfigurationRegister
	{
		public ConcurrentDictionary<Type, EntitySecurityConfiguration> Guards = new ConcurrentDictionary<Type, EntitySecurityConfiguration>();
		private readonly DependencyInjectionContainer depencyInjectionContainer;

		public EntitySecurityConfigurationRegister(DependencyInjectionContainer depencyInjectionContainer)
		{
			this.depencyInjectionContainer = depencyInjectionContainer;
		}

		/// <summary>
		/// Scans assembly for <see cref="IPermissionManager{TUserAction,TUser,TContext}"/> and adds keeps
		/// the result for future reference.
		/// </summary>
		/// <param name="assembly"></param>
		public void RegisterAssembly(Assembly assembly)
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
				var guard = new EntitySecurityConfiguration(permissionManager);
				this.Guards.TryAdd(guard.ContextType, guard);
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
				this.RegisterRepository(repository);
			}
		}

		internal object GetContext(Type contextType, ISecureHandlerRequest request)
		{
			if (!this.Guards.TryGetValue(contextType, out var guard))
			{
				throw new BusinessException($"Context of type `{contextType.Name}` was not registered with the `SecurityGuard`.");
			}

			var repository = (IEntityRepository)this.depencyInjectionContainer.GetInstance(guard.Repository);
			return repository.Find(request.ContextId);
		}

		private void RegisterRepository(Type repository)
		{
			var entityType = repository.GetTypeInfo().GetCustomAttribute<EntityRepositoryAttribute>().EntityType;

			if (this.Guards.TryGetValue(entityType, out var map))
			{
				map.Repository = repository;
			}
		}
	}
}
