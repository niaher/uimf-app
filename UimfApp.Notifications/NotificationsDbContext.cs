namespace UimfApp.Notifications
{
	using Microsoft.EntityFrameworkCore;

	public class NotificationsDbContext : DbContext
	{
		private readonly string schema;

		public NotificationsDbContext(DbContextOptions options, string schema = "ntf")
			: base(options)
		{
			this.schema = schema;
		}

		public DbSet<Notification> Notifications { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			modelBuilder.ApplyConfiguration(new NotificationMap(this.schema));
		}
	}
}