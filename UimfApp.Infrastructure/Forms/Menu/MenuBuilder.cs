namespace UimfApp.Infrastructure.Forms.Menu
{
	using System;
	using System.Collections.Generic;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;

	/// <summary>
	/// Provides ability to build menu tree from list of <see cref="FormMetadata"/> and
	/// <see cref="MenuItem"/>.
	/// </summary>
	internal class MenuBuilder
	{
		private readonly Dictionary<string, MenuGroup> groups = new Dictionary<string, MenuGroup>();
		private readonly List<MenuItem> items = new List<MenuItem>();

		public MenuBuilder(IEnumerable<MenuGroup> groups)
		{
			foreach (var menuGroup in groups.DistinctBy(t => t.Name))
			{
				string normalizedGroupName = String.IsNullOrWhiteSpace(menuGroup.Name) ? "" : menuGroup.Name;
				this.groups.Add(normalizedGroupName, menuGroup);
			}
		}

		public void AddMenuItemIfFormHasMenuConfiguration(FormMetadata metadata)
		{
			var groupName = metadata.GetCustomProperty<string>(nameof(MyFormAttribute.Menu));

			if (groupName == null)
			{
				return;
			}

			var group = this.GetGroupMetadata(groupName);

			var item = new MenuItem
			{
				Group = group,
				OrderIndex = metadata.GetCustomProperty<int>(nameof(MyFormAttribute.MenuOrderIndex)),
				Label = metadata.Label,
				Form = metadata.Id
			};

			this.items.Add(item);
		}

		public void AddMenuItem(Forms.Menu.MenuItem item)
		{
			var group = this.GetGroupMetadata(item.MenuGroup);

			var result = new MenuItem
			{
				Group = group,
				OrderIndex = item.OrderIndex,
				Label = item.Label,
				Form = item.Form
			};

			this.items.Add(result);
		}

		public IMenuNode Build()
		{
			var root = new MenuGroupNode();
			var groupNodes = new Dictionary<string, MenuGroupNode>
			{
				{ "", root }
			};

			foreach (var item in this.items)
			{
				var folders = item.Group.GetSubfolderInPath();
				MenuGroupNode parent = null;

				foreach (var folder in folders)
				{
					var group = this.GetGroupMetadata(folder);

					var current = groupNodes[folder] = groupNodes.GetValueOrDefault(folder, null) ?? new MenuGroupNode
					{
						Label = group.Name.SubstringAfterLast("/", StringComparison.OrdinalIgnoreCase),
						OrderIndex = group.OrderIndex,
						Children = new List<IMenuNode>()
					};

					if (parent != null && parent.Children.Contains(current))
					{
						parent.Children.Add(current);
					}

					if (parent == null)
					{
						root.Children.Add(current);
					}

					parent = current;
				}

				(parent ?? root).Children.Add(new MenuItemNode
				{
					Label = item.Label,
					OrderIndex = item.OrderIndex,
					InputFieldValues = item.InputFieldValues,
					Form = item.Form,
					Action = item.Action,
					Children = new List<IMenuNode>()
				});
			}

			return root;
		}

		private MenuGroup GetGroupMetadata(string groupName)
		{
			string normalizedGroupName = String.IsNullOrWhiteSpace(groupName) ? "" : groupName;
			this.groups.TryGetValue(normalizedGroupName, out var group);

			if (group == null)
			{
				group = new MenuGroup(normalizedGroupName);
				this.groups.Add(normalizedGroupName, group);
			}

			return group;
		}

		private class MenuItem : FormLink
		{
			public MenuGroup Group { get; set; }
			public int OrderIndex { get; set; }
		}
	}
}