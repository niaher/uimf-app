namespace UimfApp.Infrastructure
{
	public interface IAssemblyBootstrapper
	{
		/// <summary>
		/// Gets or sets priority which controls when in relation to other <see cref="IAssemblyBootstrapper"/>
		/// instances, this one should execute. <see cref="IAssemblyBootstrapper"/> instances with higher priority 
		/// will be run before the ones with the lower.
		/// </summary>
		int Priority { get; }

		void Start(DependencyInjectionContainer dependencyInjectionContainer);
	}
}
