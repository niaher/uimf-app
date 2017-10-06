namespace UimfApp.Users.Pickers
{
	using System;
	using System.Linq;
	using CPermissions;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Typeahead;
	using UimfApp.Infrastructure.Security;

	public class RoleTypeaheadRemoteSource : ITypeaheadRemoteSource<RoleTypeaheadRemoteSource.Request, string>,
		ISecureHandler
	{
		public const string Id = "UimfApp.Users.Pickers.RolePickerSource";

		public UserAction GetPermission()
		{
			return SystemAction.ManageUsers;
		}

		public TypeaheadResponse<string> Handle(Request message)
		{
			if (message.GetByIds)
			{
				return SystemRole.List
					.Where(t => message.Ids.Items.Any(i => i.Equals(t.Name, StringComparison.OrdinalIgnoreCase)))
					.ToList()
					.AsTypeaheadResponse(t => t.Name, t => t.Name);
			}

			return SystemRole.List.AsTypeaheadResponse(t => t.Name, t => t.Name);
		}

		public class Request : TypeaheadRequest<string>
		{
		}
	}
}