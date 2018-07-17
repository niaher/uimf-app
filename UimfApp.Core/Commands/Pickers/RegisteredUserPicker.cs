namespace UimfApp.Core.Commands.Pickers
{
	using System;
	using System.Linq;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Security;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Typeahead;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Core.Binding;

	[Form]
	[Secure(typeof(CoreActions), nameof(CoreActions.ManageSystem))]
	public class RegisteredUserTypeaheadRemoteSource : TypeaheadRemoteSource<RegisteredUserTypeaheadRemoteSource.Request, int>
	{
		private readonly CoreDbContext context;

		public RegisteredUserTypeaheadRemoteSource(CoreDbContext context)
		{
			this.context = context;
		}

		protected override TypeaheadResponse<int> Handle(Request message)
		{
			var persons = message.GetByIds
				? this.context.Users.Where(t => message.Ids.Items.Contains(t.Id))
				: this.context.Users.Where(t => t.Id.ToString() == message.Query || t.Name.Contains(message.Query, StringComparison.CurrentCultureIgnoreCase));

			return new TypeaheadResponse<int>
			{
				Items = persons
					.AsNoTracking()
					.Take(Request.ItemsPerRequest)
					.ToList()
					.Select(t => new TypeaheadItem<int>
					{
						Label = t.Name,
						Value = t.Id
					}).ToList(),
				TotalItemCount = persons.Count()
			};
		}

		public class Request : TypeaheadRequest<int>
		{
		}

		public class Response
		{
		}
	}
}