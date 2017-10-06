namespace UimfApp.Infrastructure
{
	using System;

	public class DependencyInjectionContainer
	{
		private readonly Func<Type, object> getter;

		public DependencyInjectionContainer(Func<Type, object> getter)
		{
			this.getter = getter;
		}

		public object GetInstance(Type type)
		{
			return this.getter(type);
		}

		public T GetInstance<T>()
		{
			return (T)this.GetInstance(typeof(T));
		}
	}
}