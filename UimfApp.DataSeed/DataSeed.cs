namespace UimfApp.DataSeed
{
	using System.Linq;
	using System.Threading.Tasks;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.Security;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users;
	using UimfApp.Users.Security;

	public class DataSeed
	{
		private readonly ActionRegister actionRegister;
		private readonly RoleManager<ApplicationRole> roleManager;
		private readonly UserManager<ApplicationUser> userManager;

		public DataSeed(
			UserManager<ApplicationUser> userManager,
			RoleManager<ApplicationRole> roleManager,
			ActionRegister actionRegister)
		{
			this.userManager = userManager;
			this.roleManager = roleManager;
			this.actionRegister = actionRegister;
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
			var manuallyAssignableSystemRoles = this.actionRegister.GetSystemRoles()
				.Where(t => !t.IsDynamicallyAssigned).Select(t => t.Name);

			await this.roleManager.EnsureRoles(manuallyAssignableSystemRoles);

			await this.userManager.CreateAsync(new ApplicationUser
			{
				UserName = "admin@example.com",
				Email = "admin@example.com"
			}, "Password1");

			var user = await this.userManager.Users.SingleAsync(t => t.Email == "admin@example.com");

			await this.userManager.AddToRoleAsync(user, CoreRoles.ToolUser.Name);
			await this.userManager.AddToRoleAsync(user, UserManagementRoles.UserAdmin.Name);
		}
	}
}