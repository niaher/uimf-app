namespace UimfApp.Core.Security.SomeThing
{
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Security;

	[EntityRepository(EntityType = typeof(SomeThing))]
	public class SomeThingRepository : IEntityRepository
	{
		private readonly CoreDbContext context;

		public SomeThingRepository(CoreDbContext context)
		{
			this.context = context;
		}

		public object Find(int entityId)
		{
			return this.context.SomeThings.SingleOrException(t => t.Id == entityId);
		}
	}
}