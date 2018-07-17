namespace UimfApp.Core.Commands.WorkItems
{
	using System;
	using System.Collections.Generic;
	using System.Threading;
	using System.Threading.Tasks;
	using UimfApp.Core.Commands.Pickers;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Security.WorkItem;
	using UimfApp.Help;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UimfApp.Infrastructure.Forms.Record;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.EventHandlers;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Core.Binding;

	[MyForm(Id = "edit-work-item", Label = "Edit work item", SubmitButtonLabel = "Save changes", PostOnLoad = true, PostOnLoadValidation = false)]
	[Secure(typeof(WorkItemAction), nameof(WorkItemAction.ManageWorkItem))]
	public class EditWorkItem : MyAsyncForm<EditWorkItem.Request, EditWorkItem.Response>
	{
		private readonly CoreDbContext context;

		public EditWorkItem(CoreDbContext context)
		{
			this.context = context;
		}

		public static FormLink<EditWorkItem> Button(int workItemId, string label = null)
		{
			return new FormLink<EditWorkItem>
			{
				Label = label ?? "Edit",
				Form = typeof(EditWorkItem).GetFormId(),
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.Id), workItemId }
				}
			};
		}

		public override async Task<Response> Handle(Request request, CancellationToken cancellationToken)
		{
			var item = await this.context.WorkItems.SingleOrExceptionAsync(t => t.Id == request.Id);

			if (request.Operation?.Value == RecordRequestOperation.Post)
			{
				item.ChangeDescription(request.Description?.Value);
				item.SetDeadline(request.DueOn);

				if (request.AssignTo?.Value != item.AssignedToUserId)
				{
					var assignee = request.AssignTo?.Value != null
						? await this.context.Users.FindOrExceptionAsync(request.AssignTo.Value.Value)
						: null;

					item.AssignToUser(assignee);
				}

				await this.context.SaveChangesAsync(cancellationToken);
			}

			return new Response
			{
				AssignedTo = new TypeaheadValue<int?>(item.AssignedToUserId),
				DueOn = item.DueOn,
				Description = new TextareaValue
				{
					Value = item.Description
				}
			};
		}

		public class Request : RecordRequest<Response>, ISecureHandlerRequest
		{
			[TypeaheadInputField(typeof(RegisteredUserTypeaheadRemoteSource), Label = "Assigned to")]
			[BindToOutput(nameof(Response.AssignedTo))]
			public TypeaheadValue<int?> AssignTo { get; set; }

			[InputField(OrderIndex = 10, Required = true)]
			[BindToOutput(nameof(Response.Description))]
			[Documentation(DocumentationPlacement.Hint, DocumentationSourceType.String, "Enter description for the work item. Markdown is accepted.")]
			public TextareaValue Description { get; set; }

			[InputField(Required = false, Label = "Due")]
			[BindToOutput(nameof(Response.DueOn))]
			public DateTime? DueOn { get; set; }

			[InputField(Hidden = true)]
			public int Id { get; set; }

			[NotField]
			public int ContextId => this.Id;
		}

		public class Response : RecordResponse
		{
			[NotField]
			public TypeaheadValue<int?> AssignedTo { get; set; }

			[NotField]
			public TextareaValue Description { get; set; }

			[NotField]
			public DateTime? DueOn { get; set; }
		}
	}
}