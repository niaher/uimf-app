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

			builder.Entity<ApplicationUser>().ToTable("AspNetUsers");
			builder.Entity<ApplicationRole>().ToTable("AspNetRoles");
			builder.Entity<ApplicationUserClaim>().ToTable("AspNetUserClaims");
			builder.Entity<ApplicationUserRole>().ToTable("AspNetUserRoles");
			builder.Entity<ApplicationUserLogin>().ToTable("AspNetUserLogins");
			builder.Entity<ApplicationRoleClaim>().ToTable("AspNetRoleClaims");
			builder.Entity<ApplicationUserToken>().ToTable("AspNetUserTokens");

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

			builder.Entity<ApplicationUser>()
				.Ignore(t => t.HasLoggedIn);

			builder.Entity<ApplicationUser>()
				.Property(t => t.Active)
				.HasColumnName("Active");

			builder.Entity<ApplicationUserRole>()
				.HasOne(e => e.Role)
				.WithMany()
				.HasForeignKey(e => e.RoleId)
				.IsRequired()
				.OnDelete(DeleteBehavior.Cascade);
		}
	}
}
