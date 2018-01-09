namespace UimfApp.Filing.Commands
{
	using System.Collections.Generic;
	using System.Linq;
	using Filer.Core;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.User;

	[Form(Id = "detach-file")]
	public class DetachFile : IForm<DetachFile.Request, DetachFile.Response>
	{
		private readonly IFileManager context;
		private readonly EntityFileManagerCollection documentSecurityRules;
		private readonly UserContext userContext;

		public DetachFile(IFileManager context, EntityFileManagerCollection documentSecurityRule, UserContext userContext)
		{
			this.context = context;
			this.documentSecurityRules = documentSecurityRule;
			this.userContext = userContext;
		}

		public Response Handle(Request message)
		{
			var manager = this.documentSecurityRules.GetManager(message.ContextType);
			var canDelete = manager.CanDeleteFiles(message.ContextId, message.MetaTag);

			if (!canDelete)
			{
				throw new PermissionException("delete file", this.userContext);
			}

			var file = this.context.Files
				.Include(t => t.Contexts)
				.SingleOrDefault(t => t.Id == message.FileId);

			if (file != null)
			{
				this.context.DetachFileFromContexts(message.FileId, file.Contexts.Select(t => t.Value).ToArray());
			}

			return new Response();
		}

		public static FormLink Button(int fileId, string contextType, string contextId, string metaTag)
		{
			return new FormLink
			{
				Form = typeof(DetachFile).GetFormId(),
				Label = "Delete document",
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.FileId), fileId },
					{ nameof(Request.ContextType), contextType },
					{ nameof(Request.ContextId), contextId },
					{ nameof(Request.MetaTag), metaTag }
				}
			};
		}

		public class Request : IRequest<Response>
		{
			[InputField(Hidden = true, Required = true)]
			public string ContextId { get; set; }

			[InputField(Hidden = true, Required = true)]
			public string ContextType { get; set; }

			[InputField(Required = true, Hidden = true)]
			public int FileId { get; set; }

			[InputField(Hidden = true)]
			public string MetaTag { get; set; }
		}

		public class Response : FormResponse
		{
		}
	}
}
