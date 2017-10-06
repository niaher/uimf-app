namespace UimfApp.Core.Filing
{
	using System;
	using System.Collections.Concurrent;
	using System.Linq;
	using System.Reflection;
	using UimfApp.Infrastructure;

	public class EntityFileManagerCollection
	{
		private readonly DependencyInjectionContainer dependencyInjectionContainer;

		private readonly ConcurrentDictionary<string, Func<IEntityFileManager>> managers =
			new ConcurrentDictionary<string, Func<IEntityFileManager>>();

		public EntityFileManagerCollection(DependencyInjectionContainer dependencyInjectionContainer)
		{
			this.dependencyInjectionContainer = dependencyInjectionContainer;
		}

		public IEntityFileManager GetManager(string entityType)
		{
			if (this.managers.TryGetValue(entityType, out var factory))
			{
				return factory.Invoke();
			}

			throw new Exception($"Conversation manager '{entityType}' is not registered.");
		}

		public void RegisterAssembly(Assembly assembly)
		{
			var assemblyManagers = assembly.ExportedTypes
				.Where(t => t.GetTypeInfo().IsClass && !t.GetTypeInfo().IsAbstract && !t.GetTypeInfo().IsGenericType)
				.Where(t => t.GetInterfaces().Any(i => i == typeof(IEntityFileManager)))
				.ToList();

			foreach (var manager in assemblyManagers)
			{
				var attribute = manager.GetTypeInfo().GetCustomAttribute<EntityFileManagerAttribute>();
				this.managers.TryAdd(attribute.EntityType, () => (IEntityFileManager)this.dependencyInjectionContainer.GetInstance(manager));
			}
		}
	}
}