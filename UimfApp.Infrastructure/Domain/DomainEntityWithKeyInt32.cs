namespace UimfApp.Infrastructure.Domain
{
	public abstract class DomainEntityWithKeyInt32 : DomainEntity
	{
		// ReSharper disable once UnusedAutoPropertyAccessor.Local
		public int Id { get; private set; }

		public override object Key => this.Id;
	}
}
