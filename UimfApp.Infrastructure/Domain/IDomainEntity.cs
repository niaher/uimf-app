namespace UimfApp.Infrastructure.Domain
{
	using System.Collections.Generic;

	public interface IDomainEntity
	{
		ICollection<IDomainEvent> Events { get; }
		object Key { get; }
	}
}