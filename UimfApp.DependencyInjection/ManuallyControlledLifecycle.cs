namespace UimfApp.DependencyInjection
{
	using StructureMap;
	using StructureMap.Pipeline;

	public class ManuallyControlledLifecycle : ILifecycle
	{
		private bool scopeIsExpired;

		public readonly LifecycleObjectCache Cache = new LifecycleObjectCache();
		public string Description => "Manual";

		public ManuallyControlledLifecycle()
		{
			this.scopeIsExpired = false;
		}

		public void EjectAll(ILifecycleContext context)
		{
			this.Cache.DisposeAndClear();
		}

		public IObjectCache FindCache(ILifecycleContext context)
		{
			if (this.scopeIsExpired)
			{
				this.EjectAll(context);
				this.scopeIsExpired = false;
			}
			
			return this.Cache;
		}

		public void StartNew()
		{
			this.scopeIsExpired = true;
		}
	}
}
