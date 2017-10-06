namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;

	public class SystemRole : Role
	{
		public static List<SystemRole> List = new List<SystemRole>();

		public static readonly SystemRole User = new SystemRole(nameof(User));
		public static readonly SystemRole UnauthenticatedUser = new SystemRole(nameof(UnauthenticatedUser));

		private readonly string name;

		static SystemRole()
		{
			typeof(SystemRole).GetTypeInfo().GetFields()
				.Where(a => a.FieldType == typeof(SystemRole))
				.ToList()
				.ForEach(f => List.Add(f.GetValue(null) as SystemRole));
		}

		private SystemRole(string name) : base(name)
		{
			this.name = name;
		}

		public static explicit operator SystemRole(string roleName)
		{
			var role = List.SingleOrDefault(a => a.name.Equals(roleName, StringComparison.OrdinalIgnoreCase));

			if (role == null)
			{
				throw new BusinessException($"Role '${roleName}' doesn't exist.");
			}

			return role;
		}
	}
}