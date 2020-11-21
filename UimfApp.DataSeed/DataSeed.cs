namespace UimfApp.DataSeed
{
	using System.Linq;
	using System.Threading.Tasks;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users;

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

		public async Task<ApplicationUser> EnsureUser(string email, string password, params SystemRole[] roles)
		{
			var dynamicRoles = roles.Where(t => t.IsDynamicallyAssigned).ToList();

			if (dynamicRoles.Any())
			{
				throw new BusinessException(
					$"Cannot assign dynamic roles {dynamicRoles.Select(t => $"'{t.Name}'").JoinStrings(", ")} to a user.");
			}

			await this.userManager.CreateAsync(new ApplicationUser
			{
				UserName = email,
				Email = email
			}, password);

			var user = await this.userManager.Users.SingleAsync(t => t.Email == email);

			foreach (var role in roles)
			{
				await this.userManager.AddToRoleAsync(user, role.Name);
			}

			return user;
		}

		/// <summary>
		/// Seeds only the minimum required data, without which the system won't function
		/// (e.g. - user roles).
		/// </summary>
		/// <returns></returns>
		public async Task SeedRequiredData()
		{
			await this.SeedRoles();
		}

		private async Task SeedRoles()
		{
			var manuallyAssignableSystemRoles = this.actionRegister.GetSystemRoles()
				.Where(t => !t.IsDynamicallyAssigned).Select(t => t.Name);

			await this.roleManager.EnsureRoles(manuallyAssignableSystemRoles);
		}
	}
}