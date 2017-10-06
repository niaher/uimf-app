namespace UimfApp.Users
{
	using System.Collections.Generic;
	using Microsoft.AspNetCore.Identity;

	public class ApplicationUser : IdentityUser<int>
	{
		/// <summary>
		/// Navigation property for the roles this user belongs to.
		/// </summary>
		public virtual ICollection<ApplicationUserRole> Roles { get; } = new List<ApplicationUserRole>();

		/// <summary>
		/// Navigation property for the claims this user possesses.
		/// </summary>
		public virtual ICollection<ApplicationUserClaim> Claims { get; } = new List<ApplicationUserClaim>();

		/// <summary>
		/// Navigation property for this users login accounts.
		/// </summary>
		public virtual ICollection<ApplicationUserLogin> Logins { get; } = new List<ApplicationUserLogin>();
	}
}