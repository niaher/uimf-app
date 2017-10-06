namespace UimfApp.Users
{
	using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore;

	public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, int, ApplicationUserClaim, ApplicationUserRole,
		ApplicationUserLogin, ApplicationRoleClaim, ApplicationUserToken>
	{
		public ApplicationDbContext(DbContextOptions options)
			: base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<ApplicationUser>()
				.HasMany(e => e.Claims)
				.WithOne()
				.HasForeignKey(e => e.UserId)
				.IsRequired()
				.OnDelete(DeleteBehavior.Cascade);

			builder.Entity<ApplicationUser>()
				.HasMany(e => e.Logins)
				.WithOne()
				.HasForeignKey(e => e.UserId)
				.IsRequired()
				.OnDelete(DeleteBehavior.Cascade);

			builder.Entity<ApplicationUser>()
				.HasMany(e => e.Roles)
				.WithOne()
				.HasForeignKey(e => e.UserId)
				.IsRequired()
				.OnDelete(DeleteBehavior.Cascade);

			builder.Entity<ApplicationUserRole>()
				.HasOne(e => e.Role)
				.WithMany()
				.HasForeignKey(e => e.RoleId)
				.IsRequired()
				.OnDelete(DeleteBehavior.Cascade);
		}
	}
}