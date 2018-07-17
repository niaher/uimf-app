namespace UimfApp.IntegrationTests.Framework
{
	using UimfApp.DataSeed;
	using UimfApp.DataSeed.Seeders;
	using Xunit;

	/// <summary>
	/// Serves as a base class for an integration test.
	/// </summary>
	[Collection(IntegrationTestCollection.Name)]
	public abstract class IntegrationTest
	{
		protected readonly Seeder Seeder;
		protected DataSeedDiContainer Container;

		/// <summary>
		/// Instantiates a new instance of <see cref="IntegrationTest"/> class.
		/// </summary>
		protected IntegrationTest(IntegrationTestFixture fixture)
		{
			// By placing the initialization logic in the constructor, we ensure that 
			// database/etc initialization is done per each [Fact] method.
			this.Container = fixture.Container;

			this.Seeder = new Seeder(
				this.Container,
				new DatabaseEntityTracker());
		}
	}
}
