namespace UimfApp.Users
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Security.Claims;
	using System.Threading.Tasks;
	using System.Web;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Messages;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Commands;

	public static class Extensions
	{
		public static void EnforceSuccess(this IdentityResult result, string message)
		{
			if (!result.Succeeded)
			{
				throw new ApplicationException($"{message}\n{result.Errors.Select(t => t.Description).Join("\n")}");
			}
		}

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

		public static async Task SendConfirmationEmail(
			this ApplicationUser applicationUser,
			AppConfig appConfig,
			IEmailSender emailSender,
			UserManager<ApplicationUser> userManager)
		{
			var code = await userManager.GenerateEmailConfirmationTokenAsync(applicationUser);

			var confirmAccountUrl = $"{appConfig.SiteRoot}#/form/confirm-account" +
				$"?{nameof(ConfirmAccount.Request.Token)}={HttpUtility.UrlEncode(code)}" +
				$"&{nameof(ConfirmAccount.Request.Id)}={applicationUser.Id}";

			await emailSender.SendEmailAsync(
				applicationUser.Email,
				"Confirm your account",
				$"Please confirm your account by clicking this link: <a href=\"{confirmAccountUrl}\">{confirmAccountUrl}</a>");
		}
	}
}
