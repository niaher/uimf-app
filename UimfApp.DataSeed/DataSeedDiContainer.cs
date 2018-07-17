namespace UimfApp.DataSeed
{
	using System;
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.InMemory.Infrastructure.Internal;
	using StructureMap;
	using UimfApp.Core.DataAccess;
	using UimfApp.DependencyInjection;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.User;

	public class DataSeedDiContainer
	{
		public readonly ManuallyControlledLifecycle CoreDbContextLifecycle = new ManuallyControlledLifecycle();
		public readonly bool UsingInMemoryDatabase;

		/// <summary>
		/// Initializes a new instance of the <see cref="DataSeedDiContainer"/> class,
		/// which is preconfigured to use a real database specified with the connection
		/// string.
		/// </summary>
		public DataSeedDiContainer(string connectionString)
			: this(new DbContextOptionsBuilder().UseSqlServer(connectionString).Options)
		{
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="DataSeedDiContainer"/> class,
		/// which is preconfigured to use an in-memory-database.
		/// </summary>
		public DataSeedDiContainer()
			: this(new DbContextOptionsBuilder().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options)
		{
		}

		public DataSeedDiContainer(DbContextOptions dbContextOptions)
		{
			this.Container = new Container();

			this.UsingInMemoryDatabase = dbContextOptions.FindExtension<InMemoryOptionsExtension>() != null;

			this.Container.ConfigureInfrastructure();
			this.Container.ConfigureAppNotifications();
			this.Container.ConfigureIdentity();
			this.Container.ConfigureMediatr();
			this.Container.ConfigureDomainEvents();
			this.Container.ConfigureUserRoleCheckers();
			this.Container.ConfigureEmailTemplates();
			this.Container.ConfigureEmailSenders<FakeMessageSender, FakeMessageSender>();
			this.Container.ConfigureOptions(new AppConfig
			{
				NoReplyEmail = "noreply@example.com",
				SiteRoot = "localhost"
			});

			// Data access.
			this.Container.ConfigureDataAccess(dbContextOptions);
			this.Container.Configure(config => { config.For<CoreDbContext>().LifecycleIs(this.CoreDbContextLifecycle); });

			// Other.
			this.Container.Configure(config =>
			{
				config.For<UserContextAccessor>().Use<AppUserContextAccessor>();
				config.For<UserContext>().Use(ctx => ctx.GetInstance<UserContextAccessor>().GetUserContext());

				config.For<UserSession>().Use(t => this.CurrentUserSession).AlwaysUnique();
				config.For<UserSession>().Singleton();

				config.Scan(_ =>
				{
					_.AssembliesFromApplicationBaseDirectory();
					_.AddAllTypesOf<IAssemblyBootstrapper>();
					_.WithDefaultConventions();
				});
			});

			this.Container.RunAssemblyBootstrapers();
		}

		public Container Container { get; }

		/// <summary>
		/// Gets or sets user session configured for this container.
		/// </summary>
		public UserSession CurrentUserSession { get; set; }
	}
}