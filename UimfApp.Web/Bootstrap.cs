namespace UimfApp.Web
{
	using StructureMap.TypeRules;
	using UimfApp.Infrastructure;

	public class Bootstrap : IAssemblyBootstrapper
	{
		public int Priority { get; } = 0;

		public void Start(DependencyInjectionContainer dependencyInjectionContainer)
		{
			dependencyInjectionContainer.RegisterUiMetadata(this.GetType().GetAssembly());
		}
	}
}