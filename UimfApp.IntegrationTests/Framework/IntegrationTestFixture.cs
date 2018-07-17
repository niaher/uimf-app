namespace UimfApp.IntegrationTests.Framework
{
	using System;
	using UimfApp.DataSeed;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;

	public class IntegrationTestFixture : IDisposable
	{
		public readonly DataSeedDiContainer Container;

		public IntegrationTestFixture()
		{
			var dbContextOptions = ConfigurationReader.GetConfig().DbContextOptions();

			using (var connection = dbContextOptions.GetConnection())
			{
				connection.Open();
				Database.TruncateDatabase(connection).Wait();
			}

			this.Container = new DataSeedDiContainer(dbContextOptions);
			this.Container.Container.GetInstance<DataSeed>().SeedRequiredData().Wait();
		}

		public void Dispose()
		{
		}
	}
}
