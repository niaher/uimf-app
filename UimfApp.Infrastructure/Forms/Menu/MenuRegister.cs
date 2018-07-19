namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Generic;
	using System.Linq;
	using UiMetadataFramework.Core;

	public class MenuRegister : Register<MenuContainer>
	{
		public MenuRegister(DependencyInjectionContainer dependencyInjectionContainer) : base(dependencyInjectionContainer)
		{
		}

		public IMenuNode BuildMenu(IList<FormMetadata> forms)
		{
			var menuContainers = this.GetAllInstances().ToList();

			var groups = menuContainers
				.SelectMany(t => t.GetMenuGroups())
				.ToList();

			var root = new MenuBuilder(groups);

			// Add static menus based on [Form] attribute.
			forms.ForEach(t => root.AddMenuItemIfFormHasMenuConfiguration(t));

			// Add dynamic menus.
			menuContainers
				.SelectMany(t => t.GetDynamicMenuItems())
				.ForEach(t => root.AddMenuItem(t));

			return root.Build();
		}
	}
}