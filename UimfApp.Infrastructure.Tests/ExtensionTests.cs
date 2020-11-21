namespace UimfApp.Infrastructure.Tests
{
	using System;
	using FluentAssertions;
	using Xunit;

	public class ExtensionTests
	{
		private class A
		{
		}

		private class B : A
		{
		}

		private class C
		{
		}

		// ReSharper disable once UnusedTypeParameter
		private class D<T>
		{
		}

		private class E : D<int>
		{
		}

		private class F : E
		{
		}

		private class G<T> : D<T>
		{
		}

		[Fact]
		public void BaseClassOfTypeIsReceivedCorrectly()
		{
			typeof(A).GetBaseClassOfType(typeof(B)).Should().BeNull();
			typeof(B).GetBaseClassOfType(typeof(A)).Should().Be<A>();

			typeof(E).GetBaseClassOfType(typeof(D<>)).Should().Be<D<int>>();
			typeof(E).GetBaseClassOfType(typeof(D<int>)).Should().Be<D<int>>();
			typeof(F).GetBaseClassOfType(typeof(E)).Should().Be<E>();
			typeof(F).GetBaseClassOfType(typeof(D<>)).Should().Be<D<int>>();
			typeof(F).GetBaseClassOfType(typeof(D<int>)).Should().Be<D<int>>();

			typeof(G<>).GetBaseClassOfType(typeof(D<>)).Should().Be(typeof(D<>));
			typeof(G<int>).GetBaseClassOfType(typeof(D<>)).Should().Be<D<int>>();
		}

		[Fact]
		public void ImplementClassMethodWorksCorrectly()
		{
			// Self-implementation.
			typeof(A).ImplementsClass(typeof(A)).Should().BeTrue();
			typeof(D<>).ImplementsClass(typeof(D<>)).Should().BeTrue();
			typeof(D<int>).ImplementsClass(typeof(D<int>)).Should().BeTrue();
			typeof(D<int>).ImplementsClass(typeof(D<long>)).Should().BeFalse();

			// Inheritance with generics.
			typeof(G<>).ImplementsClass(typeof(D<>)).Should().BeTrue();
			typeof(G<int>).ImplementsClass(typeof(D<int>)).Should().BeTrue();
			typeof(G<int>).ImplementsClass(typeof(D<long>)).Should().BeFalse();

			// Other inheritance types.
			typeof(B).ImplementsClass(typeof(A)).Should().BeTrue();
			typeof(C).ImplementsClass(typeof(A)).Should().BeFalse();
			typeof(E).ImplementsClass(typeof(D<int>)).Should().BeTrue();
			typeof(E).ImplementsClass(typeof(D<>)).Should().BeTrue();
			typeof(F).ImplementsClass(typeof(D<int>)).Should().BeTrue();
			typeof(F).ImplementsClass(typeof(D<>)).Should().BeTrue();
		}

		[Fact]
		public void InFunctionWorks()
		{
			DayOfWeek.Monday.In(DayOfWeek.Monday, DayOfWeek.Friday).Should().BeTrue();
			DayOfWeek.Monday.In(DayOfWeek.Tuesday, DayOfWeek.Wednesday).Should().BeFalse();
			DayOfWeek.Monday.In(DayOfWeek.Monday, DayOfWeek.Monday, DayOfWeek.Tuesday).Should().BeTrue();

			DayOfWeek.Monday.In(DayOfWeek.Saturday).Should().BeFalse();
			DayOfWeek.Monday.In(DayOfWeek.Saturday, DayOfWeek.Sunday).Should().BeFalse();
		}
	}
}