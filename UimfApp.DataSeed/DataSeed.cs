namespace UimfApp.DataSeed
{
	using System.Threading.Tasks;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users;

	public class DataSeed
	{
		private readonly RoleManager<ApplicationRole> roleManager;
		private readonly UserManager<ApplicationUser> userManager;

		public DataSeed(
			UserManager<ApplicationUser> userManager,
			RoleManager<ApplicationRole> roleManager)
		{
			this.userManager = userManager;
			this.roleManager = roleManager;
		}

		public async Task Seed(bool productionEnvironment = false)
		{
			if (!productionEnvironment)
			{
				await this.SeedUsers();
			}
		}

		private async Task SeedUsers()
		{
			await this.roleManager.EnsureRoles(SystemRole.List.ToArray());

			await this.userManager.CreateAsync(new ApplicationUser
			{
				UserName = "admin@example.com",
				Email = "admin@example.com"
			}, "Password1");

			var user = await this.userManager.Users.SingleAsync(t => t.Email == "admin@example.com");

			await this.userManager.AddToRoleAsync(user, SystemRole.User.Name);
		}
	}
}