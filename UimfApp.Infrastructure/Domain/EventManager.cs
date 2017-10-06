namespace UimfApp.Infrastructure.Domain
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using CEvents;

	public class EventManager
	{
		public static readonly EventManager Instance = new EventManager();
		private readonly StreamManager eventStreamManager = new StreamManager();

		static EventManager()
		{
			Instance.RegisterAssembly(typeof(EventManager).GetTypeInfo().Assembly);
		}

		private EventManager()
		{
		}

		public static EventStreamManager Streams => Instance.eventStreamManager;

		public void RegisterAssembly(Assembly assembly)
		{
			this.eventStreamManager.RegisterAssembly(assembly);
		}

		public void RegisterHandler(object handler)
		{
			this.eventStreamManager.RegisterHandler(handler);
		}

		public IEventStream<T> Stream<T>()
		{
			return this.eventStreamManager.Stream<T>();
		}

		private class StreamManager : EventStreamManager
		{
			private readonly List<Assembly> registeredAssemblies = new List<Assembly>();

			public void RegisterAssembly(Assembly assembly)
			{
				if (this.registeredAssemblies.Contains(assembly))
				{
					return;
				}

				this.registeredAssemblies.Add(assembly);

				// Add event streams.
				var domainEvents = assembly.ExportedTypes
					.Where(t =>
					{
						var typeInfo = t.GetTypeInfo();

						return typeInfo.IsClass &&
							!typeInfo.IsAbstract &&
							!typeInfo.IsGenericType &&
							typeInfo.GetInterfaces().Any(i => i == typeof(IDomainEvent) && i.FullName != null);
					})
					.ToList();

				foreach (var domainEvent in domainEvents)
				{
					var streamType = typeof(EventStream<>).MakeGenericType(domainEvent);
					var stream = Activator.CreateInstance(streamType);
					this.AddEventStream(stream);
				}

				// Register handlers.
				var handlers = assembly.ExportedTypes
					.Where(t =>
					{
						var info = t.GetTypeInfo();

						return info.IsClass &&
							!info.IsAbstract &&
							!info.IsGenericType;
					})
					.Where(t => t.GetTypeInfo().GetInterfaces().Any(i => i.GetTypeInfo().IsGenericType && i.GetGenericTypeDefinition() == typeof(IEventHandler<>)))
					.ToList();

				foreach (var handler in handlers)
				{
					var type = Activator.CreateInstance(handler);
					this.RegisterHandler(type);
				}
			}

			public IEventStream<T> Stream<T>()
			{
				return this.EventStream<T>();
			}
		}
	}
}