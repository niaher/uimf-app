namespace UimfApp.Infrastructure.Tests
{
	using System.Collections.Concurrent;
	using System.Collections.Generic;
	using System.Reflection;
	using FluentAssertions;
	using UimfApp.DataSeed;
	using UimfApp.Infrastructure.Domain;
	using Xunit;

	public class EventManagerTest
	{
		public class Logger
		{
			public static ConcurrentDictionary<string, List<int>> HashCodes = new ConcurrentDictionary<string, List<int>>();

			public void AddItem(string listName, int item)
			{
				var list = HashCodes.GetOrAdd(listName, t => new List<int>());
				list.Add(item);
			}

			public List<int> GetHashCodes(string listName)
			{
				return HashCodes.GetOrAdd(listName, t => new List<int>());
			}
		}

		public class SomethingHappenedEvent : DomainEvent
		{
		}

		public class OnSomethingHappened : AppEventHandler<SomethingHappenedEvent>
		{
			public readonly Logger Logger;

			public OnSomethingHappened(EventManager manager, Logger logger) : base(manager)
			{
				this.Logger = logger;
			}

			public override void HandleEvent(SomethingHappenedEvent @event)
			{
				this.Logger.GetHashCodes("handlers").Add(this.GetHashCode());
				this.Logger.GetHashCodes("loggers").Add(this.Logger.GetHashCode());
			}
		}

		[Fact]
		public void EachEventInvokationGetsNewInstanceOfAllEventHandlerDependencies()
		{
			var container = new DataSeedDiContainer().Container;
			container.GetInstance<DependencyInjectionContainer>().RegisterUiMetadata(typeof(EventManagerTest).GetTypeInfo().Assembly);

			var eventManager = container.GetInstance<EventManager>();
			eventManager.RegisterAssembly(typeof(EventManagerTest).Assembly);

			eventManager.Streams.Publish(new SomethingHappenedEvent());
			eventManager.Streams.Publish(new SomethingHappenedEvent());

			Logger.HashCodes.Count.ShouldBeEquivalentTo(2);
			Logger.HashCodes["handlers"][0].Should().NotBe(Logger.HashCodes["handlers"][1]);
		}

		[Fact]
		public void EachEventInvokationGetsNewInstanceOfEventHandler()
		{
			var container = new DataSeedDiContainer().Container;
			container.GetInstance<DependencyInjectionContainer>().RegisterUiMetadata(typeof(EventManagerTest).GetTypeInfo().Assembly);

			var eventManager = container.GetInstance<EventManager>();
			eventManager.RegisterAssembly(typeof(EventManagerTest).Assembly);

			eventManager.Streams.Publish(new SomethingHappenedEvent());
			eventManager.Streams.Publish(new SomethingHappenedEvent());

			Logger.HashCodes.Count.ShouldBeEquivalentTo(2);
			Logger.HashCodes["loggers"][0].Should().NotBe(Logger.HashCodes["loggers"][1]);
		}
	}
}
