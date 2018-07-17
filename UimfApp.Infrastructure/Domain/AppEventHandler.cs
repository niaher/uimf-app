namespace UimfApp.Infrastructure.Domain
{
	using CEvents._EventHandler;

	public abstract class AppEventHandler<T> : EventHandler<T>
	{
		protected AppEventHandler(EventManager manager) : base(manager.Stream<T>())
		{
		}
	}
}
