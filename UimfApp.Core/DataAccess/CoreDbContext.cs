namespace UimfApp.Core.DataAccess
{
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.Domain;

	public class CoreDbContext : DbContext
	{
		public CoreDbContext(DbContextOptions options) : base(options)
		{
		}

		public virtual DbSet<SomeThing> SomeThings { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);
			builder.ApplyConfiguration(new SomeThingMap());
		}
	}
}