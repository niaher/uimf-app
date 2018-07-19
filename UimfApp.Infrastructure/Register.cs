namespace UimfApp.Infrastructure
{
	using System;
	using System.Collections.Concurrent;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;

	/// <summary>
	/// This class is used to scan assemblies for types which implement a specific interface
	/// or base class. All such types are registered in the internal collection and can later be
	/// instantiated at will.
	/// </summary>
	/// <typeparam name="T">The type of objects that the register will hold.</typeparam>
	public abstract class Register<T>
	{
		private readonly DependencyInjectionContainer dependencyInjectionContainer;

		private readonly ConcurrentDictionary<string, Func<T>> factories =
			new ConcurrentDictionary<string, Func<T>>();

		private readonly ConcurrentDictionary<Type, string> registeredTypes =
			new ConcurrentDictionary<Type, string>();

		protected Register(DependencyInjectionContainer dependencyInjectionContainer)
		{
			this.dependencyInjectionContainer = dependencyInjectionContainer;
		}

		/// <summary>
		/// Return list of <typeparamref name="T"/> object, one for each registered type.
		/// </summary>
		public IEnumerable<T> GetAllInstances()
		{
			foreach (var key in this.registeredTypes.Values)
			{
				yield return this.GetInstance(key);
			}
		}

		/// <summary>
		/// Instantiates a new instance of type which inherits from <typeparamref name="T"/>
		/// and whose <see cref="RegisterEntryAttribute.Key"/> matches the provided key.
		/// </summary>
		/// <param name="key">Name of the type to instantiate. This should correspond to the
		/// value stored in <see cref="RegisterEntryAttribute.Key"/>, which decorates the type.</param>
		/// <returns>Instance of <typeparamref name="T"/>.</returns>
		public T GetInstance(string key)
		{
			if (this.factories.TryGetValue(key, out var factory))
			{
				return factory.Invoke();
			}

			throw new ApplicationException($"Type '{key}' is not registered with '{this.GetType().FullName}'.");
		}

		/// <summary>
		/// Instantiates a new instance of type <typeparamref name="TItem" />.
		/// </summary>
		/// <returns>Instance of <typeparamref name="TItem"/>.</returns>
		public T GetInstance<TItem>()
		{
			this.registeredTypes.TryGetValue(typeof(TItem), out var key);
			return this.GetInstance(key);
		}

		/// <summary>
		/// Scans assembly for all types which implement <typeparamref name="T"/> and
		/// registers them all in the internal collection, so that they can be instantiated
		/// later.
		/// </summary>
		/// <param name="assembly">Assembly to scan.</param>
		public void RegisterAssembly(Assembly assembly)
		{
			var typesToRegister = assembly.ExportedTypes
				.Where(t => t.IsClass && !t.IsAbstract && !t.IsGenericType)
				.Where(t => t.ImplementsClass(typeof(T)) || t.GetInterfaces().Any(i => i == typeof(T)))
				.ToList();

			foreach (var type in typesToRegister)
			{
				var attribute = type.GetCustomAttribute<RegisterEntryAttribute>();
				this.registeredTypes.TryAdd(type, attribute.Key);
				this.factories.TryAdd(attribute.Key, () => (T)this.dependencyInjectionContainer.GetInstance(type));
			}
		}
	}
}