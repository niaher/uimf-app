namespace UimfApp.DataSeed.Seeds
{
	using System.Threading.Tasks;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.Security;
	using UimfApp.DataSeed.Seeders;
	using UimfApp.Users.Security;

	public class Demo : Seed
	{
		private UserQuery admin;

		public Demo(DbContextOptions dbContextOptions) : base(dbContextOptions)
		{
		}

		public override async Task Run()
		{
			var dataSeed = this.Container.Container.GetInstance<DataSeed>();
			dataSeed.SeedRequiredData().Wait();

			await SeedUsers(dataSeed);

			await this.InitialiseData();
		}

		private static async Task SeedUsers(DataSeed dataSeed)
		{
			await dataSeed.EnsureUser("admin@example.com", "Password1", UserManagementRoles.UserAdmin, CoreRoles.Admin);
		}

		private async Task InitialiseData()
		{
			this.admin = await this.Seeder.EnsureUser("admin", CoreRoles.Admin);

			await this.admin.Do(async t =>
			{
				for (int i = 0; i < 100; i++)
				{
					await t.CreateWorkItem($"t{i}");
				}
			});
		}
	}
}