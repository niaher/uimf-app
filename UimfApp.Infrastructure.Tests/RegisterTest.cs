namespace UimfApp.Infrastructure.Tests
{
	using System;
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

		private abstract class Base<T>
		{
			public readonly B B;
			public T data;

			protected Base(B b)
			{
				this.B = b;
			}
		}

		private class A : Base<int>
		{
			public A(B b) : base(b)
			{
			}
		}

		private class B
		{
			public readonly string Name;

			public B(string name)
			{
				this.Name = name;
			}
		}

		[Fact]
		public void Test()
		{
			var container = new Container();
			//container.Configure(config => { config.For<B>().Use(c => new B("1")); });

			var child = container.CreateChildContainer();
			child.Configure(config => { config.For<B>().Use(c => new B("2")); });

			//var a1 = container.GetInstance<A>();
			//a1.B.Name.Should().Be("1");

			var a2 = child.GetInstance<A>();
			a2.B.Name.Should().Be("2");
		}
	}
}