namespace UimfApp.Filing.Commands
{
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using Filer.Core;
	using MediatR;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfApp.Filing.Forms.Inputs;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.User;

	[Form(Id = "attach-files", Label = "Add files")]
	public class AttachFiles : IAsyncForm<AttachFiles.Request, AttachFiles.Response>
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
				throw new PermissionException("add file", this.userContext);
			}

			var documents = message.Uploader?.Files ?? new int[0];

			foreach (var fileId in documents)
			{
				await this.context.AttachFileToContexts(fileId, $"{message.ContextType}:{message.ContextId}");
			}

			return new Response();
		}

		public static FormLink Button(object id, string type, string meta = null, bool isMultiple = true)
		{
			return new FormLink
			{
				Form = typeof(AttachFiles).GetFormId(),
				Label = "Add file",
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.ContextId), id },
					{ nameof(Request.ContextType), type },
					{ nameof(Request.MetaTag), meta }
				}
			};
		}

		public class Response : FormResponse
		{
		}

		public class Request : IRequest<Response>
		{
			[InputField(Required = true, Hidden = true)]
			public string ContextId { get; set; }

			[InputField(Required = true, Hidden = true)]
			public string ContextType { get; set; }

			[InputField(Hidden = true)]
			public string MetaTag { get; set; }

			[InputField(Label = "Select files", Required = true)]
			public FileUploader Uploader { get; set; }
		}
	}
}
