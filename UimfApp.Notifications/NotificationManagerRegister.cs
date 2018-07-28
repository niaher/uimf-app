namespace UimfApp.Notifications
{
	using UimfApp.Infrastructure;

	public class NotificationManagerRegister : Register<INotificationManager>
	{
		public NotificationManagerRegister(DependencyInjectionContainer dependencyInjectionContainer) : base(dependencyInjectionContainer)
		{
		}
	}
}
