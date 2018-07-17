namespace UimfApp.Core.Security.WorkItem
{
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Security;

	[EntityRepository(EntityType = typeof(WorkItem))]
	public class WorkItemRepository : IEntityRepository
	{
		private readonly CoreDbContext context;

		public WorkItemRepository(CoreDbContext context)
		{
			this.context = context;
		}

		public object Find(int entityId)
		{
			return this.context.WorkItems
				.SingleOrException(t => t.Id == entityId);
		}
	}
}