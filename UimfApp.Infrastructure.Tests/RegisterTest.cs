namespace UimfApp.Infrastructure.Tests
{
	using System.Collections.Concurrent;
	using System.Collections.Generic;
	using FluentAssertions;
	using StructureMap;
	using UimfApp.DependencyInjection;
	using Xunit;

	public class RegisterTest
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

		public class Register : Register<IRegisteredItem>
		{
			public Register(DependencyInjectionContainer di) : base(di)
			{
			}
		}

		public interface IRegisteredItem
		{
			void DoSomething();
		}

		[RegisterEntry("item")]
		public class Item : IRegisteredItem
		{
			public readonly Logger Logger;

			public Item(Logger logger)
			{
				this.Logger = logger;
			}

			public void DoSomething()
			{
				this.Logger.GetHashCodes("handlers").Add(this.GetHashCode());
				this.Logger.GetHashCodes("loggers").Add(this.Logger.GetHashCode());
			}
		}

		[Fact]
		public void InstancesAndTheirDependenciesAreAlwaysUnique()
		{
			var container = new Container();
			container.ConfigureRegisters();

			var register = container.GetInstance<Register>();
			var item = register.GetInstance("item");
			item.DoSomething();

			var newItem = register.GetInstance("item");
			newItem.DoSomething();

			Logger.HashCodes.Count.ShouldBeEquivalentTo(2);
			Logger.HashCodes["loggers"][0].Should().NotBe(Logger.HashCodes["loggers"][1]);
			Logger.HashCodes["handlers"][0].Should().NotBe(Logger.HashCodes["handlers"][1]);
		}
	}
}