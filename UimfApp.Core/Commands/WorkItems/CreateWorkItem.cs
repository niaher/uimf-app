namespace UimfApp.Core.Commands.WorkItems
{
	using System.Collections.Generic;
	using System.Threading;
	using System.Threading.Tasks;
	using MediatR;
	using UimfApp.Core.Commands.Pickers;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Domain;
	using UimfApp.Core.Security;
	using UimfApp.Help;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Basic.Response;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[MyForm(Id = "create-work-item", SubmitButtonLabel = "Add work item", Label = "Create work item")]
	[Secure(typeof(CoreActions), nameof(CoreActions.ManageWorkItems))]
	public class CreateWorkItem : AsyncForm<CreateWorkItem.Request, CreateWorkItem.Response>
	{
		private readonly CoreDbContext context;
		private readonly UserSession userSession;

		public CreateWorkItem(CoreDbContext context, UserSession userSession)
		{
			this.context = context;
			this.userSession = userSession;
		}

		public static FormLink Button(string label = null)
		{
			return new FormLink
			{
				Label = label ?? "Create work item",
				Form = typeof(CreateWorkItem).GetFormId()
			};
		}

		public override async Task<Response> Handle(Request request, CancellationToken cancellationToken)
		{
			var assignee = request.AssignTo?.Value != null
				? await this.context.Users.FindOrExceptionAsync(request.AssignTo.Value.Value)
				: null;

			var creator = await this.context.Users.FindOrExceptionAsync(this.userSession.CurrentUserId);

			var item = new WorkItem(request.Description?.Value, creator);
			item.AssignToUser(assignee);

			this.context.WorkItems.Add(item);
			await this.context.SaveChangesAsync(cancellationToken);

			return new Response
			{
				Id = item.Id,
				Form = typeof(WorkItemOverview).GetFormId(),
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(WorkItemOverview.Request.Id), item.Id }
				}
			};
		}

		public class Response : RedirectResponse
		{
			[OutputField(Hidden = true)]
			public int Id { get; set; }
		}

		public class Request : IRequest<Response>
		{
			[TypeaheadInputField(typeof(RegisteredUserTypeaheadRemoteSource), Label = "Assign to", Required = false, OrderIndex = 10)]
			public TypeaheadValue<int?> AssignTo { get; set; }

			[InputField(OrderIndex = 1, Required = true)]
			[Documentation(DocumentationPlacement.Hint, DocumentationSourceType.String, "Enter description for the work item. Markdown is accepted.")]
			public TextareaValue Description { get; set; }
		}
	}
}