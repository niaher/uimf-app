namespace UimfApp.Infrastructure.Forms.Menu
{
	using System.Collections.Generic;

	/// <summary>
	/// Metadata used to generate <see cref="MenuGroupNode"/>.
	/// </summary>
	public class MenuGroup
	{
		public MenuGroup(string name, int orderIndex = 0)
		{
			this.Name = name;
			this.OrderIndex = orderIndex;
		}

		public string Name { get; set; }

		public int OrderIndex { get; set; }

		public IEnumerable<string> GetSubfolderInPath()
		{
			var folders = this.Name.Split('/');

			for (int i = 0; i < folders.Length; i++)
			{
				string path = "";
				for (int j = 0; j <= i; j++)
				{
					path += folders[j] + "/";
				}
				
				yield return path.TrimEnd('/');
			}
		}
	}
}