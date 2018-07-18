namespace UimfApp.Filing.Commands
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;
	using Filer.Core;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Filing.Forms.Outputs;
	using UimfApp.Infrastructure;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	/// <summary>
	/// Displays files associated with a specific object.
	/// </summary>
	[Form(Id = "attached-files", PostOnLoad = true, Label = "Files")]
	public class AttachedFiles : AsyncForm<AttachedFiles.Request, AttachedFiles.Response>
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

		public override async Task<Response> Handle(Request message, CancellationToken cancellationToken)
		{
			var fileManager = this.entityFileManagers.GetInstance(message.ContextType);

			if (fileManager.CanViewFiles(message.ContextId))
			{
				var canDeleteDocuments = fileManager.CanDeleteFiles(message.ContextId, message.MetaTag);

				var files = await this.filer.FileContexts
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

				return new Response
				{
					Files = fileslist
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
					.WithCustomUi("btn-danger btn-icon", "Are you sure you want to remove the file?");
			}
		}

		public class Request : IRequest<Response>
		{
			[InputField(Hidden = true)]
			public int ContextId { get; set; }

			[InputField(Required = true, Hidden = true)]
			public string ContextType { get; set; }

			[InputField(Hidden = true)]
			public string MetaTag { get; set; }
		}

		public class Response : FormResponse
		{
			[OutputField(Label = "")]
			public IEnumerable<FileInfo> Files { get; set; }
		}
	}
}