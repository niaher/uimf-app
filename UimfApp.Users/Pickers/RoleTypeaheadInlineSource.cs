namespace UimfApp.Users.Pickers
{
	using System.Collections.Generic;
	using System.Linq;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Input.Typeahead;

	public class RoleTypeaheadInlineSource : ITypeaheadInlineSource<string>
	{
		public IEnumerable<TypeaheadItem<string>> GetItems()
		{
			return SystemRole.List
				.Where(t => !Equals(t, SystemRole.UnauthenticatedUser))
				.ToList()
				.AsTypeaheadResponse(t => t.Name, t => t.Name).Items;
		}
	}
}