namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Concurrent;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;

	public class MenuRegister
	{
		private readonly DependencyInjectionContainer dependencyInjectionContainer;
		private readonly ConcurrentDictionary<string, MenuMetadata> menus = new ConcurrentDictionary<string, MenuMetadata>();

		public MenuRegister(DependencyInjectionContainer dependencyInjectionContainer)
		{
			this.dependencyInjectionContainer = dependencyInjectionContainer;
		}

		public IList<MenuMetadata> RegisteredMenus => this.menus.Values.ToList();

		public void RegisterAssembly(Assembly assembly)
		{
			var menuContainers = assembly.ExportedTypes
				.Where(t => t.GetTypeInfo().IsClass && !t.GetTypeInfo().IsAbstract && !t.GetTypeInfo().IsGenericType)
				.Where(t => t.GetTypeInfo().GetInterfaces().Any(i => i == typeof(IMenuContainer)))
				.ToList();

			foreach (var menuContainer in menuContainers)
			{
				var c = (IMenuContainer)this.dependencyInjectionContainer.GetInstance(menuContainer);
				foreach (var menu in c.GetMenuMetadata())
				{
					this.menus.TryAdd(menu.Name, menu);
				}
			}
		}
	}
}