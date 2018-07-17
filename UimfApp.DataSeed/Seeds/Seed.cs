namespace UimfApp.DataSeed.Seeds
{
	using System;
	using System.Threading.Tasks;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.DataAccess;
	using UimfApp.DataSeed.Seeders;

	public abstract class Seed
	{
		protected readonly Seeder Seeder;
		protected DataSeedDiContainer Container;

		protected Seed(DbContextOptions options)
		{
			this.Container = new DataSeedDiContainer(options);

			this.Seeder = new Seeder(
				this.Container,
				new DatabaseEntityTracker());
		}

		protected CoreDbContext GetCoreDbContext()
		{
			return this.Container.Container.GetInstance<CoreDbContext>();
		}

		public abstract Task Run();

		protected static string NewGuid()
		{
			return Guid.NewGuid().ToString();
		}
	}
}
