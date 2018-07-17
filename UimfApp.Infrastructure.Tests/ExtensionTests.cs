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
			typeof(B).GetBaseClassOfType(typeof(A)).ShouldBeEquivalentTo(typeof(A));

			typeof(E).GetBaseClassOfType(typeof(D<>)).ShouldBeEquivalentTo(typeof(D<int>));
			typeof(E).GetBaseClassOfType(typeof(D<int>)).ShouldBeEquivalentTo(typeof(D<int>));
			typeof(F).GetBaseClassOfType(typeof(E)).ShouldBeEquivalentTo(typeof(E));
			typeof(F).GetBaseClassOfType(typeof(D<>)).ShouldBeEquivalentTo(typeof(D<int>));
			typeof(F).GetBaseClassOfType(typeof(D<int>)).ShouldBeEquivalentTo(typeof(D<int>));

			typeof(G<>).GetBaseClassOfType(typeof(D<>)).ShouldBeEquivalentTo(typeof(D<>));
			typeof(G<int>).GetBaseClassOfType(typeof(D<>)).ShouldBeEquivalentTo(typeof(D<int>));
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
			DayOfWeek.Monday.In(DayOfWeek.Monday, DayOfWeek.Friday).ShouldBeEquivalentTo(true);
			DayOfWeek.Monday.In(DayOfWeek.Tuesday, DayOfWeek.Wednesday).ShouldBeEquivalentTo(false);
			DayOfWeek.Monday.In(DayOfWeek.Monday, DayOfWeek.Monday, DayOfWeek.Tuesday).ShouldBeEquivalentTo(true);

			DayOfWeek.Monday.In(DayOfWeek.Saturday).ShouldBeEquivalentTo(false);
			DayOfWeek.Monday.In(DayOfWeek.Saturday, DayOfWeek.Sunday).ShouldBeEquivalentTo(false);
		}
	}
}