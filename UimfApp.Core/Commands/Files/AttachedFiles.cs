namespace UimfApp.Core.Commands.Files
{
	using System.Linq;
	using System.Reflection;
	using System.Threading.Tasks;
	using CPermissions;
	using Filer.Core;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Core.Filing;
	using UimfApp.Core.Forms.Outputs;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	[Form(Id = "attached-files", PostOnLoad = true, Label = "Files")]
	public class AttachedFiles : IAsyncForm<AttachedFiles.Request, AttachedFiles.Response>, ISecureHandler
	{
		private readonly EntityFileManagerCollection entityFileManagers;
		private readonly IFileManager filer;

		public AttachedFiles(
			EntityFileManagerCollection entityFileManagers,
			IFileManager filer)
		{
			this.entityFileManagers = entityFileManagers;
			this.filer = filer;
		}

		public async Task<Response> Handle(Request message)
		{
			var securityRule = this.entityFileManagers.GetManager(message.ContextType);

			if (securityRule.CanViewFiles(message.ContextId))
			{
				var files = await this.filer.FileContexts
					.Where(t => t.Value == message.ContextType + ":" + message.ContextId)
					.Select(a => new Document
					{
						Name = a.File.Name,
						HashId = a.FileId.ToString(),
						DateCreated = a.File.CreatedOn,
						Size = a.File.Size / 1024,
						FileExtension = a.File.Extension
					})
					.ToListAsync();

				var documents = files.Where(a => !a.IsImage());

				var images = files.Where(a => a.IsImage()).Select(a => new Image
				{
					Name = a.Name,
					HashId = a.HashId,
					DateCreated = a.DateCreated
				});

				var canDeleteDocuments = securityRule.CanDeleteFiles(message.ContextId, message.MetaTag);

				return new Response
				{
					ImageSlider =
						new ImageSlider
						{
							Images = images,
							CanEdit = canDeleteDocuments,
							ContextType = message.ContextType,
							ContextId = message.ContextId
						},
					DocumentList =
						new DocumentList
						{
							Documents = documents,
							CanEdit = canDeleteDocuments,
							ContextType = message.ContextType,
							ContextId = message.ContextId
						},
					Actions = securityRule.GetActions(message.ContextId, message.MetaTag, message.IsMultipe).AsActionList()
				};
			}

			return new Response();
		}

		public UserAction GetPermission()
		{
			return SystemAction.ViewFiles;
		}

		public static string ContextTypeOf<T>()
		{
			var typeInfo = typeof(T).GetTypeInfo();
			var attribute = typeInfo.GetCustomAttribute<FileContainerAttribute>();

			if (attribute == null)
			{
				throw new ApplicationException($"Cannot retrieve files for entity '{typeInfo.FullName}', because it is not a FileContainer.");
			}

			return attribute.ContextKey;
		}

		public class Request : IRequest<Response>
		{
			[InputField(Required = true)]
			public int ContextId { get; set; }

			[InputField(Required = true)]
			public string ContextType { get; set; }

			public bool IsMultipe { get; set; } = true;
			public string MetaTag { get; set; }
		}

		public class Response : FormResponse
		{
			public ActionList Actions { get; set; }
			public DocumentList DocumentList { get; set; }
			public ImageSlider ImageSlider { get; set; }
		}
	}
}