namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using CPermissions;

	public class SystemAction : UserAction
	{
		public static readonly SystemAction DoMagic = new SystemAction(nameof(DoMagic));
		public static readonly SystemAction ManageUsers = new SystemAction(nameof(ManageUsers));
		public static readonly SystemAction CreateGrant = new SystemAction(nameof(CreateGrant));
		public static readonly SystemAction ViewGrants = new SystemAction(nameof(ViewGrants));
		public static readonly SystemAction ManageCategoryInstalments = new SystemAction(nameof(ManageCategoryInstalments));
		public static readonly SystemAction Login = new SystemAction(nameof(Login));
		public static readonly SystemAction Logout = new SystemAction(nameof(Logout));
		public static readonly SystemAction ViewFiles = new SystemAction(nameof(ViewFiles));

		public static IEnumerable<SystemAction> List;

		static SystemAction()
		{
			List = typeof(SystemAction)
				.GetTypeInfo()
				.GetFields()
				.Where(a => a.FieldType == typeof(SystemAction))
				.Select(f => f.GetValue(null) as SystemAction)
				.ToList();
		}

		private SystemAction(string name) : base(name)
		{
		}

		public static SystemAction GetAction(string actionName)
		{
			return actionName == null ? null : List.SingleOrDefault(a => a.Name.Equals(actionName, StringComparison.OrdinalIgnoreCase));
		}
	}
}