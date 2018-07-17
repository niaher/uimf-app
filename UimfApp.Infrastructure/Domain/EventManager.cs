namespace UimfApp.Infrastructure.Domain
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using CEvents;

	public class EventManager
	{
		private readonly StreamManager eventStreamManager;

		public EventManager(DependencyInjectionContainer di)
		{
			this.eventStreamManager = new StreamManager(di, this);
		}

		public EventStreamManager Streams => this.eventStreamManager;

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
			private readonly DependencyInjectionContainer dependencyInjectionContainer;
			private readonly EventManager eventManager;
			private readonly List<Assembly> registeredAssemblies = new List<Assembly>();

			public StreamManager(DependencyInjectionContainer di, EventManager eventManager)
			{
				this.dependencyInjectionContainer = di;
				this.eventManager = eventManager;
			}

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
					// Create instance of Handler<T> (i.e. - new Handler<T>(handler, this.eventManager, this.dependencyInjectionContainer).
					// We do this to wrap `handler` inside Handler<T>, ensuring that a new instance of `handler` is
					// used for each event invokation. Alternatively we could do `this.RegisterHandler(handler)` 
					// directly, but that would mean that we'll have a singleton instance of our event
					// handler, which is far from ideal.
					var eventType = handler.GetInterfaces()
						.Single(t => t.IsGenericType && t.GetGenericTypeDefinition() == typeof(IEventHandler<>))
						.GenericTypeArguments[0];

					var handlerType = typeof(Handler<>).MakeGenericType(eventType);
					object outer = Activator.CreateInstance(
						handlerType,
						handler,
						this.eventManager,
						this.dependencyInjectionContainer);

					this.RegisterHandler(outer);
				}
			}

			public IEventStream<T> Stream<T>()
			{
				return this.EventStream<T>();
			}

			private class Handler<T> : AppEventHandler<T>
			{
				private readonly DependencyInjectionContainer container;
				private readonly Type inner;

				public Handler(Type inner, EventManager manager, DependencyInjectionContainer container) : base(manager)
				{
					this.inner = inner;
					this.container = container;
				}

				public override void HandleEvent(T @event)
				{
					try
					{
						var handler = (AppEventHandler<T>)this.container.GetInstance(this.inner);
						handler.HandleEvent(@event);
					}
					catch (Exception)
					{
						//TODO: implement error log
					}
				}
			}
		}
	}
}
