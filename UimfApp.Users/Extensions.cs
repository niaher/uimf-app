namespace UimfApp.Users
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Security.Claims;
	using System.Threading.Tasks;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Security;

	public static class Extensions
	{
		public static async Task EnsureRoles(this RoleManager<ApplicationRole> roleManager, params SystemRole[] roles)
		{
			await roleManager.EnsureRoles(roles.Select(t => t.Name));
		}

		public static async Task EnsureRoles(this RoleManager<ApplicationRole> roleManager, IEnumerable<string> roles)
		{
			if (roles == null)
			{
				return;
			}

			foreach (var systemRole in roles)
			{
				var exists = await roleManager.RoleExistsAsync(systemRole);

				if (!exists)
				{
					var role = new ApplicationRole
					{
						Name = systemRole,
						NormalizedName = systemRole
					};

					(await roleManager.CreateAsync(role))
						.EnforceSuccess($"Failed to ensure role '{systemRole}'");

					(await roleManager.AddClaimAsync(role, new Claim(ClaimTypes.Role, systemRole, systemRole)))
						.EnforceSuccess($"Failed to add claim to role '{systemRole}'.");
				}
			}
		}

		public static void EnforceSuccess(this IdentityResult result, string message)
		{
			if (!result.Succeeded)
			{
				throw new ApplicationException($"{message}\n{result.Errors.Select(t => t.Description).JoinString("\n")}");
			}
		}

		private static string JoinString(this IEnumerable<string> items, string separator)
		{
			return string.Join(separator, items);
		}
	}
}