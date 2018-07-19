namespace UimfApp.Core.Commands.WorkItems
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Domain;
	using UimfApp.Core.Menus;
	using UimfApp.Core.Security;
	using UimfApp.Help;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.EntityFramework;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;

	[MyForm(Id = "work-items", Label = "Work items", PostOnLoad = true, Menu = CoreMenus.WorkItems, SubmitButtonLabel = UiFormConstants.SearchLabel)]
	[Secure(typeof(CoreActions), nameof(CoreActions.ManageWorkItems))]
	[Documentation(DocumentationPlacement.Inline, DocumentationSourceType.String, "On this page you can see all work items.")]
	public class WorkItems : MyAsyncForm<WorkItems.Request, WorkItems.Response>
	{
		private readonly CoreDbContext context;
		private readonly UserSecurityContext userSecurityContext;

		public WorkItems(CoreDbContext context, UserSecurityContext userSecurityContext)
		{
			this.context = context;
			this.userSecurityContext = userSecurityContext;
		}

		public override async Task<Response> Handle(Request request, CancellationToken cancellationToken)
		{
			var query = this.context.WorkItems.AsQueryable();

			if (!string.IsNullOrWhiteSpace(request.Description))
			{
				query = query
					.Where(t => t.Description.Contains(request.Description));
			}

			var items = await query
				.Include(t => t.AssignedToUser)
				.Include(t => t.CreatedByUser)
				.PaginateAsync(t => new Item
				{
					Id = WorkItemOverview.Button(t.Id, t.Id.ToString()),
					Description = t.Description,
					CompletedOn = t.CompletedOn,
					CreatedOn = t.CreatedOn,
					DueOn = t.DueOn,
					AssignedTo = t.AssignedToUser?.Name,
					CreatedBy = t.CreatedByUser?.Name,
					Actions = this.GetActions(t).AsActionList()
				}, request.Paginator);

			return new Response
			{
				Items = items,
				Actions = new ActionList(CreateWorkItem.Button())
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
			[InputField(OrderIndex = 1)]
			[Documentation(DocumentationPlacement.Hint, DocumentationSourceType.String, "Enter *all or part* of the task's description.")]
			public string Description { get; set; }

			public Paginator Paginator { get; set; }
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
			[OutputField(OrderIndex = 0, Label = "")]
			public ActionList Actions { get; set; }

			[PaginatedData(nameof(Request.Paginator), Label = "", OrderIndex = 10)]
			public PaginatedData<Item> Items { get; set; }
		}

		public class Item
		{
			[OutputField(OrderIndex = 100, Label = "")]
			public ActionList Actions { get; set; }

			[OutputField(OrderIndex = 25, Label = "Assignee")]
			public string AssignedTo { get; set; }

			[OutputField(OrderIndex = 40, Label = "Completed on")]
			public DateTime? CompletedOn { get; set; }

			[OutputField(Label = "Created by", OrderIndex = 11)]
			public string CreatedBy { get; set; }

			[OutputField(OrderIndex = 10, Label = "Created on")]
			public DateTime CreatedOn { get; set; }

			[OutputField(OrderIndex = 20)]
			public string Description { get; set; }

			[OutputField(OrderIndex = 30, Label = "Due")]
			public DateTime? DueOn { get; set; }

			[OutputField(OrderIndex = 1)]
			[Documentation(
				DocumentationPlacement.Hint,
				DocumentationSourceType.String,
				"Work item's ID. Each work item has a unique ID, which is auto-assigned by the system.")]
			public FormLink Id { get; set; }
		}
	}
}