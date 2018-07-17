namespace UimfApp.DataSeed.App
{
	using System;
	using UimfApp.DataSeed.Seeds;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;

	internal class Program
	{
		private static void Main()
		{
			var config = ConfigurationReader.GetConfig();
			var dbContextOptions = config.DbContextOptions();

			using (var connection = dbContextOptions.GetConnection())
			{
				Console.WriteLine("Deleting old data...");

				connection.Open();
				Database.TruncateDatabase(connection).Wait();
			}

			Console.WriteLine("Seeding new data...");
			var demo = new Demo(dbContextOptions);
			demo.Run().Wait();

			Console.WriteLine("Data seed has completed successfully. Press any key to exit.");
			Console.ReadKey();
		}
	}
}
