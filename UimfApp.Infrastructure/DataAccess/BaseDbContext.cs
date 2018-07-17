namespace UimfApp.Infrastructure.DataAccess
{
	using System;
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;
	using Microsoft.EntityFrameworkCore;
	using Microsoft.Extensions.Options;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Domain;
	using UimfApp.Infrastructure.User;

	public abstract class BaseDbContext : DbContext
	{
		/// <summary>
		/// Represents ID of an unauthenticated user. Such user does not actually exist in the database.
		/// This ID is used by the <see cref="BaseDbContext"/> for auditing actions issued by unauthenticated
		/// users.
		/// </summary>
		public const int UnathenticatedUserId = -1;

		private readonly AppConfig appConfig;
		private readonly UserSession userSession;

		protected BaseDbContext(
			DbContextOptions options,
			EventManager eventManager,
			IOptions<AppConfig> appConfig,
			UserSession userSession,
			string baseSchema = "dbo") : base(options)
		{
			this.EventManager = eventManager;
			this.userSession = userSession;
			this.appConfig = appConfig.Value;
			this.BaseSchema = baseSchema;
		}

		protected BaseDbContext(
			DbContextOptions options,
			EventManager eventManager,
			IOptions<AppConfig> appConfig) : this(options, eventManager, appConfig, null)
		{
		}

		public string BaseSchema { get; }
		private EventManager EventManager { get; }

		public override int SaveChanges()
		{
			this.EnforceNotImpersonatingInProduction();

			var result = base.SaveChanges();

			this.PublishEvents();

			return result;
		}

		public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
		{
			this.EnforceNotImpersonatingInProduction();

			var result = await base.SaveChangesAsync(cancellationToken);

			this.PublishEvents();

			return result;
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);
		}

		private void EnforceNotImpersonatingInProduction()
		{
			if (this.userSession?.ImpersonatorUserId != null &&
				this.appConfig.Environment.Equals("Production", StringComparison.OrdinalIgnoreCase))
			{
				throw new BusinessException("Making data changes while impersonating in Production is not allowed.");
			}
		}

		private void PublishEvents()
		{
			var entities = this.ChangeTracker
				.Entries<DomainEntity>()
				.Select(po => po.Entity)
				.ToList();

			foreach (var entity in entities)
			{
				var events = entity.Events.ToArray();
				entity.Events.Clear();

				foreach (var domainEvent in events)
				{
					this.EventManager.Streams.Publish(domainEvent);
				}
			}
		}
	}
}