namespace UimfApp.Core.Domain
{
	using System.Collections.Generic;
	using System.Linq;

	public class Category
	{
		public static Category Small = new Category(1, "Small", 15, 100);
		public static Category Medium = new Category(2, "Medium", 101, 500);
		public static Category Large = new Category(3, "Large", 501, 3000);

		private static readonly List<Category> List;

		static Category()
		{
			List = typeof(Category)
				.GetFields()
				.Where(a => a.FieldType == typeof(Category))
				.Select(f => f.GetValue(null) as Category)
				.ToList();
		}

		// ReSharper disable once UnusedMember.Local
		private Category()
		{
		}

		private Category(int id, string name, int min, int max)
		{
			this.Id = id;
			this.Name = name;
			this.Min = min;
			this.Max = max;
		}

		public int Id { get; protected set; }
		public int Max { get; protected set; }
		public int Min { get; protected set; }
		public string Name { get; protected set; }

		public static Category Get(int categoryId)
		{
			return List.SingleOrDefault(t => t.Id == categoryId);
		}
	}
}
