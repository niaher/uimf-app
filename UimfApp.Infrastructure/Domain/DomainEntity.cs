namespace UimfApp.Infrastructure.Domain
{
	using System.Collections.Generic;

	public abstract class DomainEntity
	{
		public ICollection<IDomainEvent> Events { get; } = new List<IDomainEvent>();
		public abstract object Key { get; }
	}
}
