namespace UimfApp.Core.Commands.Files
{
	using System.Linq;
	using CPermissions;
	using Filer.Core;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.Filing;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[Form(Id = "detach-file")]
	public class DetachFile : IForm<DetachFile.Request, DetachFile.Response>, ISecureHandler
	{
		private readonly IFileManager context;
		private readonly EntityFileManagerCollection documentSecurityRules;

		public DetachFile(IFileManager context, EntityFileManagerCollection documentSecurityRule)
		{
			this.context = context;
			this.documentSecurityRules = documentSecurityRule;
		}

		//public FormMetadata Metadata { get; } = new FormMetadata
		//{
		//	Type = FormType.Form,
		//	Inputs =
		//	{
		//		new TextInput(nameof(Request.HashId)) { Required = true, Hidden = true },
		//		new TextInput(nameof(Request.MetaTag)) { Hidden = true }
		//	}
		//};

		public Response Handle(Request message)
		{
			var manager = this.documentSecurityRules.GetManager(message.ContextType);
			manager.CanDeleteFiles(message.ContextId, message.MetaTag);

			int fileId = int.Parse(message.HashId);

			var file = this.context.Files
				.Include(t => t.Contexts)
				.SingleOrDefault(t => t.Id == fileId);

			if (file != null)
			{
				this.context.DetachFileFromContexts(fileId, file.Contexts.Select(t => t.Value).ToArray());
			}

			return new Response();
		}

		public UserAction GetPermission()
		{
			return SystemAction.ViewFiles;
		}

		public static FormLink Button(string hashId)
		{
			return new FormLink
			{
				Form = typeof(DetachFile).GetFormId(),
				Label = "Delete document",
				InputFieldValues =
				{
					{ nameof(Request.HashId), hashId }
				}
			};
		}

		public class Request : IRequest<Response>
		{
			[InputField(Hidden = true)]
			public int ContextId { get; set; }

			[InputField(Hidden = true)]
			public string ContextType { get; set; }

			[InputField(Required = true, Hidden = true)]
			public string HashId { get; set; }

			[InputField(Hidden = true)]
			public string MetaTag { get; set; }
		}

		public class Response : FormResponse
		{
		}
	}
}