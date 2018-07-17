namespace UimfApp.Core.DataAccess
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.Extensions.Options;
	using UimfApp.Core.DataAccess.Mapping;
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.DataAccess;
	using UimfApp.Infrastructure.Domain;
	using UimfApp.Infrastructure.User;

	public class CoreDbContext : BaseDbContext
	{
		public CoreDbContext(DbContextOptions options, EventManager eventManager, UserSession userSession, IOptions<AppConfig> appConfig)
			: base(options, eventManager, appConfig, userSession)
		{
		}

		public virtual DbSet<RegisteredUser> Users { get; set; }
		public virtual DbSet<WorkItem> WorkItems { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.ApplyConfiguration(new RegisteredUserMap());
			builder.ApplyConfiguration(new WorkItemMap());
		}
	}
}