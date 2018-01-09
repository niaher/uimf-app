namespace UimfApp.Infrastructure.Domain
{
	public abstract class DomainEvent : DomainEvent<int>
	{
		protected DomainEvent() : base(0)
		{
		}
	}

	public class DomainEvent<T> : IDomainEvent
	{
		public DomainEvent(T context)
		{
			this.Context = context;
		}

		public T Context { get; }
	}
}
