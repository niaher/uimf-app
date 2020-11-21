namespace UimfApp.Filing.Commands
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;
	using Filer.Core;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Filing.Forms.Inputs;
	using UimfApp.Filing.Forms.Outputs;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.CustomProperties;
	using UimfApp.Infrastructure.User;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	/// <summary>
	/// Displays files associated with a specific object and allows uploading new files.
	/// </summary>
	[MyForm(Id = "attached-files-with-uploader", PostOnLoad = true, Label = "Files", SubmitButtonLabel = "Upload")]
	[CssClass(UiFormConstants.InputsHorizontalOneColumn)]
	public class AttachedFilesWithUploader : AsyncForm<AttachedFilesWithUploader.Request, AttachedFilesWithUploader.Response>
	{
		private readonly IFileManager context;
		private readonly EntityFileManagerRegister entityFileManagers;
		private readonly UserContext userContext;

		public AttachedFilesWithUploader(
			EntityFileManagerRegister entityFileManagers,
			IFileManager context,
			UserContext userContext)
		{
			this.entityFileManagers = entityFileManagers;
			this.context = context;
			this.userContext = userContext;
		}

		/// <summary>
		/// Gets inline form for either <see cref="AttachedFilesWithUploader"/> or <see cref="AttachedFiles"/>,
		/// depending on whether the user has permissions to upload files.
		/// </summary>
		/// <typeparam name="TContext">Context to which the files are attached.</typeparam>
		/// <param name="entityFileManagers"></param>
		/// <param name="contextId">Id of the entity to which the files are attached.</param>
		/// <param name="isMultiple">Whether user should be allowed to upload multiple files at once.</param>
		/// <param name="metadata">An arbitrary string indicating the type of file being attached. Can be used for security checks.</param>
		/// <returns></returns>
		public static InlineForm InlineForm<TContext>(
			EntityFileManagerRegister entityFileManagers,
			int contextId,
			bool isMultiple = true,
			string metadata = null)
		{
			var contextType = EntityFileManagerRegister.ContextTypeOf<TContext>();
			var fileManager = entityFileManagers.GetInstance(contextType);
			var canUploadFiles = fileManager.CanUploadFiles(contextId);
			if (canUploadFiles)
			{
				return new InlineForm
				{
					Form = typeof(AttachedFilesWithUploader).GetFormId(),
					InputFieldValues = new Dictionary<string, object>
					{
						{ nameof(Request.ContextType), contextType },
						{ nameof(Request.ContextId), contextId },
						{ nameof(Request.IsMultipe), isMultiple },
						{ nameof(Request.MetaTag), metadata }
					}
				};
			}

			return new InlineForm
			{
				Form = typeof(AttachedFiles).GetFormId(),
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(AttachedFiles.Request.ContextType), contextType },
					{ nameof(AttachedFiles.Request.ContextId), contextId },
					{ nameof(AttachedFiles.Request.MetaTag), metadata }
				}
			};
		}

		public override async Task<Response> Handle(Request message, CancellationToken cancellationToken)
		{
			var fileManager = this.entityFileManagers.GetInstance(message.ContextType);

			if (message.Uploader != null && message.Uploader.Files.Any())
			{
				if (!fileManager.CanUploadFiles(message.ContextId))
				{
					throw new PermissionException("Add file", this.userContext);
				}

				var documents = message.Uploader?.Files ?? new int[0];

				foreach (var fileId in documents)
				{
					await this.context.AttachFileToContextsAsync(fileId, $"{message.ContextType}:{message.ContextId}");
				}
			}

			if (fileManager.CanViewFiles(message.ContextId))
			{
				var canDeleteDocuments = fileManager.CanDeleteFiles(message.ContextId, message.MetaTag);

				var files = await this.context.FileContexts
					.Include(t => t.File)
					.Where(t => t.Value == message.ContextType + ":" + message.ContextId)
					.ToListAsync(cancellationToken: cancellationToken);

				var fileslist = files
					.Select(a => new FileInfo(
						a.File,
						GetBasicActions(message, a.File, canDeleteDocuments)
							.Union(fileManager.GetFileActions(message.ContextId, a.FileId))
							.AsActionList()))
					.ToList();

				var actions = fileManager.GetActions(message.ContextId, message.MetaTag, message.IsMultipe).ToList();

				return new Response
				{
					Files = fileslist,
					Actions = actions.AsActionList()
				};
			}

			return new Response();
		}

		private static IEnumerable<FormLink> GetBasicActions(Request message, File file, bool canDeleteFiles)
		{
			if (canDeleteFiles)
			{
				yield return DetachFile.Button(
						file.Id,
						message.ContextType,
						message.ContextId.ToString(),
						message.MetaTag)
					.WithAction(FormLinkActions.Run)
					.WithCustomUi("btn-danger btn-sm");
			}
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

			[InputField(Label = "Select files", Required = true, OrderIndex = 5)]
			public FileUploader Uploader { get; set; }
		}

		public class Response : FormResponse
		{
			public ActionList Actions { get; set; }

			[OutputField(Label = "")]
			public IEnumerable<FileInfo> Files { get; set; }
		}
	}
}