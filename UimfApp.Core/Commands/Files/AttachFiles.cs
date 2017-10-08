namespace UimfApp.Core.Commands.Files
{
	using System;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using CPermissions;
	using Filer.Core;
	using MediatR;
	using UimfApp.Core.Filing;
	using UimfApp.Core.Security;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms.Inputs;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.MediatR;

	[Form(Id = "attach-files")]
	public class AttachFiles : IAsyncForm<AttachFiles.Request, AttachFiles.Response>, ISecureHandler
	{
		private readonly IFileManager context;
		private readonly EntityFileManagerCollection entityFileSecurityRuleCollection;
		private readonly UserContext userContext;

		public AttachFiles(IFileManager context, EntityFileManagerCollection entityFileSecurityRuleCollection, UserContext userContext)
		{
			this.context = context;
			this.entityFileSecurityRuleCollection = entityFileSecurityRuleCollection;
			this.userContext = userContext;
		}

		public async Task<Response> Handle(Request message)
		{
			var rule = this.entityFileSecurityRuleCollection.GetManager(message.ContextType);
			if (!rule.CanUploadFiles(message.ContextId))
			{
				throw new PermissionException("add documents", this.userContext.UserName);
			}

			var documents = message.Documents?.Items ?? new List<string>();

			foreach (var fileId in documents)
			{
				await this.context.AttachFileToContexts(Convert.ToInt32(fileId), $"{message.ContextType}:{message.ContextId}");
			}

			return new Response();
		}

		public UserAction GetPermission()
		{
			return CoreActions.ViewFiles;
		}

		public static FormLink Button(object id, string type, string meta = null, bool isMultiple = true)
		{
			return new FormLink
			{
				Form = typeof(AttachFiles).GetFormId(),
				Label = "$AddDocuments",
				InputFieldValues =
				{
					{ nameof(Request.ContextId), id },
					{ nameof(Request.ContextType), type },
					{ nameof(Request.MetaTag), meta },
					{ nameof(Request.IsMultiple), isMultiple }
				}
			};
		}

		public class Response : FormResponse
		{
		}

		public class Request : IRequest<Response>
		{
			public string ContextId { get; set; }
			public string ContextType { get; set; }
			public ValueList<string> Documents { get; set; }
			public bool IsMultiple { get; set; }
			public string MetaTag { get; set; }
		}
	}
}