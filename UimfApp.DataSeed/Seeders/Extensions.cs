namespace UimfApp.DataSeed.Seeders
{
	using System;
	using System.Linq;
	using System.Threading.Tasks;
	using StructureMap;
	using StructureMap.Pipeline;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.User;

	public static class Extensions
	{
		public static T Do<T>(this T tester, string user, Action<T> action)
			where T : Seeder
		{
			var previousSession = tester.UserSession;
			tester.LoginAs(user);

			action(tester);

			tester.UserSession = previousSession;

			return tester;
		}

		public static async Task<T> Do<T>(this T tester, string user, Func<T, Task> action)
			where T : Seeder
		{
			var previousSession = tester.UserSession;
			tester.LoginAs(user);

			await action(tester);

			tester.UserSession = previousSession;

			return tester;
		}

		public static T LoginAs<T>(this T tester, string user)
			where T : Seeder
		{
			var userId = tester.User(user).GetEntity().Id;
			var session = new UserSession(userId);
			tester.UserSession = session;

			return tester;
		}

		public static void SetLifecycleForImplementationsOfGenericType(
			this Registry registry,
			Type genericType,
			UniquePerRequestLifecycle lifecycle,
			Type[] scanAssembliesContainingTypes)
		{
			scanAssembliesContainingTypes
				.Select(t => t.Assembly)
				.Distinct()
				.SelectMany(t => t.ExportedTypes)
				.Where(t => t.ImplementsGenericType(genericType))
				.ToList()
				.ForEach(t => registry.For(t).LifecycleIs(lifecycle));
		}

		public static void SetLifecycleForImplementationsOfInterface(
			this Registry registry,
			Type genericType,
			UniquePerRequestLifecycle lifecycle,
			Type[] scanAssembliesContainingTypes)
		{
			scanAssembliesContainingTypes
				.Select(t => t.Assembly)
				.Distinct()
				.SelectMany(t => t.ExportedTypes)
				.Where(genericType.IsAssignableFrom)
				.ToList()
				.ForEach(t => registry.For(t).LifecycleIs(lifecycle));
		}
	}
}
