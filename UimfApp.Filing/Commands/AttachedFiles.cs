namespace UimfApp.Filing.Commands
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using System.Threading.Tasks;
	using Filer.Core;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfApp.Filing.Forms.Outputs;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Forms.Outputs;

	[Form(Id = "attached-files", PostOnLoad = true, Label = "Files")]
	public class AttachedFiles : IAsyncForm<AttachedFiles.Request, AttachedFiles.Response>
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
			var fileManager = this.entityFileManagers.GetManager(message.ContextType);

			if (fileManager.CanViewFiles(message.ContextId))
			{
				var canDeleteDocuments = fileManager.CanDeleteFiles(message.ContextId, message.MetaTag);
				var canUploadFiles = fileManager.CanUploadFiles(message.ContextId);

				var files = await this.filer.FileContexts
					.Include(t => t.File)
					.Where(t => t.Value == message.ContextType + ":" + message.ContextId)
					.ToListAsync();

				var files2 = files
					.Select(a => new FileInfo
					{
						Name = new Link(AppConfig.FileUrl(a.FileId), a.File.Name),
						CreatedOn = a.File.CreatedOn,
						Size = new FileSize(a.File.Size),
						CreatedByUser = a.File.CreatedByUserId != null
							? "#" + a.File.CreatedByUserId
							: null,
						FileExtension = a.File.Extension,
						Preview = GetPreviewImage(a.File),
						Actions = GetBasicActions(message, a, canDeleteDocuments)
							.Union(fileManager.GetFileActions(message.ContextId, a.FileId))
							.AsActionList()
					})
					.ToList();

				var actions = fileManager.GetActions(message.ContextId, message.MetaTag, message.IsMultipe).ToList();
				if (canUploadFiles)
				{
					actions.Add(AttachFiles.Button(
						message.ContextId,
						message.ContextType,
						message.MetaTag,
						message.IsMultipe));
				}

				return new Response
				{
					Files = files2,
					Actions = actions.AsActionList()
				};
			}

			return new Response();
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

		public static InlineForm InlineForm<TContext>(int contextId, bool isMultiple = true, string metadata = null)
		{
			return new InlineForm
			{
				Form = typeof(AttachedFiles).GetFormId(),
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.ContextType), ContextTypeOf<TContext>() },
					{ nameof(Request.ContextId), contextId },
					{ nameof(Request.IsMultipe), isMultiple },
					{ nameof(Request.MetaTag), metadata }
				}
			};
		}

		private static IEnumerable<FormLink> GetBasicActions(Request message, FileContext a, bool canDeleteFiles)
		{
			if (canDeleteFiles)
			{
				yield return DetachFile.Button(
						a.FileId,
						message.ContextType,
						message.ContextId.ToString(),
						message.MetaTag)
					.WithAction(FormLinkActions.Run);
			}
		}

		private static Image GetPreviewImage(File a)
		{
			return a.Name.IsImageFilename()
				? new Image(AppConfig.FileUrl(a.Id))
				: null;
		}

		public class Request : IRequest<Response>
		{
			[InputField(Hidden = true)]
			public int ContextId { get; set; }

			[InputField(Required = true, Hidden = true)]
			public string ContextType { get; set; }

			[InputField(Hidden = true)]
			public bool IsMultipe { get; set; } = true;

			[InputField(Hidden = true)]
			public string MetaTag { get; set; }
		}

		public class Response : FormResponse
		{
			public ActionList Actions { get; set; }

			[OutputField(Label = "")]
			public IEnumerable<FileInfo> Files { get; set; }
		}
	}
}
