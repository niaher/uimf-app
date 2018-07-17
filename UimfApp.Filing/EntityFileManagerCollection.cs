namespace UimfApp.Filing
{
	using System.Reflection;
	using UimfApp.Infrastructure;

	public class EntityFileManagerCollection : Register<IEntityFileManager>
	{
		public EntityFileManagerCollection(DependencyInjectionContainer dependencyInjectionContainer) : base(dependencyInjectionContainer)
		{
		}

		public static string ContextTypeOf<T>()
		{
			var typeInfo = typeof(T).GetTypeInfo();
			var attribute = typeInfo.GetCustomAttribute<FileContainerAttribute>();

			if (attribute == null)
			{
				throw new ApplicationException($"Cannot retrieve files for entity '{typeInfo.FullName}', because it is not a FileContainer.");
			}

			return attribute.ContextKey;
		}
	}
}
