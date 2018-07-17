namespace UimfApp.Core.Commands.WorkItems
{
	using System;
	using System.Collections.Generic;
	using System.Threading;
	using System.Threading.Tasks;
	using Markdig;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Domain;
	using UimfApp.Core.Security;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.CustomProperties;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;

	[MyForm(Id = "work-item", PostOnLoad = true)]
	[Secure(typeof(CoreActions), nameof(CoreActions.ManageWorkItems))]
	public class WorkItemOverview : MyAsyncForm<WorkItemOverview.Request, WorkItemOverview.Response>
	{
		private readonly CoreDbContext context;
		private readonly UserSecurityContext userSecurityContext;

		public WorkItemOverview(CoreDbContext context, UserSecurityContext userSecurityContext)
		{
			this.context = context;
			this.userSecurityContext = userSecurityContext;
		}

		public static FormLink Button(int workItemId, string label = null)
		{
			return new FormLink
			{
				Label = label ?? $"#{workItemId}",
				Form = typeof(WorkItemOverview).GetFormId(),
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.Id), workItemId }
				}
			};
		}

		public override async Task<Response> Handle(Request request, CancellationToken cancellationToken)
		{
			var item = await this.context.WorkItems
				.Include(t => t.AssignedToUser)
				.SingleOrExceptionAsync(t => t.Id == request.Id);

			return new Response
			{
				Metadata = new MyFormResponseMetadata
				{
					Title = $"Work item #{item.Id}"
				},
				Description = new HtmlString(Markdown.ToHtml(item.Description)),
				CreatedOn = item.CreatedOn,
				CompletedOn = item.CompletedOn,
				DueOn = item.DueOn,
				CreatedBy = item.CreatedByUser?.Name,
				AssignedTo = item.AssignedToUser?.Name,
				Actions = this.GetActions(item).AsActionList()
			};
		}

		private IEnumerable<FormLink> GetActions(WorkItem item)
		{
			if (this.userSecurityContext.CanAccess<EditWorkItem>(item.Id))
			{
				yield return EditWorkItem.Button(item.Id, "Edit");
			}

			if (item.CompletedOn == null &&
				this.userSecurityContext.CanAccess<CompleteWorkItem>(item.Id))
			{
				yield return CompleteWorkItem.Button(item.Id, "Complete");
			}

			if (item.CompletedOn != null &&
				this.userSecurityContext.CanAccess<ReopenWorkItem>(item.Id))
			{
				yield return ReopenWorkItem.Button(item.Id, "Reopen");
			}
		}

		public class Request : IRequest<Response>
		{
			[InputField(Hidden = true)]
			public int Id { get; set; }
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
			[OutputField(OrderIndex = -10)]
			public ActionList Actions { get; set; }

			[OutputField(OrderIndex = 25, Label = "Assigned to")]
			[HideIfNull]
			public string AssignedTo { get; set; }

			[OutputField(OrderIndex = 20, Label = "Completed on")]
			[HideIfNull]
			public DateTime? CompletedOn { get; set; }

			[OutputField(OrderIndex = 9, Label = "Created by")]
			public string CreatedBy { get; set; }

			[OutputField(OrderIndex = 10, Label = "Created on")]
			public DateTime CreatedOn { get; set; }

			[OutputField(OrderIndex = 30, Label = "")]
			[CssClass("user-markdown-content")]
			public HtmlString Description { get; set; }

			[OutputField(OrderIndex = 15, Label = "Due")]
			[HideIfNull]
			public DateTime? DueOn { get; set; }
		}
	}
}