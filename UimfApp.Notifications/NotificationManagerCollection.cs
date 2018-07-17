namespace UimfApp.Notifications
{
	using UimfApp.Infrastructure;

	public class NotificationManagerCollection : Register<INotificationManager>
	{
		public NotificationManagerCollection(DependencyInjectionContainer dependencyInjectionContainer) : base(dependencyInjectionContainer)
		{
		}
	}
}
