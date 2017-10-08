namespace UimfApp.Users.Pickers
{
	using System.Collections.Generic;
	using System.Linq;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Input.Typeahead;

	public class RoleTypeaheadInlineSource : ITypeaheadInlineSource<string>
	{
		private readonly ActionRegister actionRegister;

		public RoleTypeaheadInlineSource(ActionRegister actionRegister)
		{
			this.actionRegister = actionRegister;
		}

		public IEnumerable<TypeaheadItem<string>> GetItems()
		{
			return this.actionRegister
				.GetSystemRoles()
				.Where(t => t.IsDynamicallyAssigned == false)
				.ToList()
				.AsTypeaheadResponse(t => t.Name, t => t.Name).Items;
		}
	}
}