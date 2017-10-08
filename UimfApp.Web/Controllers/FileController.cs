namespace UimfApp.Web.Controllers
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;
	using System.Threading.Tasks;
	using Filer.Core;
	using Microsoft.AspNetCore.Mvc;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Infrastructure;

	public class FileController : Controller
	{
		private readonly IFileManager fileManager;
		private readonly UserContext userContext;

		public FileController(IFileManager fileManager, UserContext userContext)
		{
			this.fileManager = fileManager;
			this.userContext = userContext;
		}

		/// <summary>
		/// Reads stream into a byte array.
		/// </summary>
		/// <param name="input">Stream instance.</param>
		/// <returns>Byte array.</returns>
		private static byte[] ReadFully(Stream input)
		{
			using (var ms = new MemoryStream())
			{
				input.CopyTo(ms);
				return ms.ToArray();
			}
		}

		[HttpGet]
		public virtual async Task<FileResult> Download(int id)
		{
			var file = await this.fileManager.Files
				.Include(t => t.Data)
				.SingleOrDefaultAsync(t => t.Id == id);

			var data = file.DecompressFile();

			return this.File(data, file.MimeType, file.Name);
		}

		[HttpGet]
		public List<string> GetWhiteListMimeType()
		{
			return MimeTypeUtils.WhiteListMimeType.Select(o => o.Key).ToList();
		}

		[HttpPost]
		public async Task<IActionResult> Upload()
		{
			var files = this.Request.Form.Files;

			if (files.Count > 1)
			{
				throw new NotSupportedException("Uploading multiple files is not supported at the moment.");
			}

			foreach (var file in files)
			{
				if (file.Length > 0)
				{
					using (var fileStream = file.OpenReadStream())
					{
						var fileId = await this.fileManager.SaveFile(
							file.FileName,
							file.ContentType,
							ReadFully(fileStream),
							CompressionFormat.GZip,
							this.userContext.UserName.ToInt());

						var entity = await this.fileManager.GetById(fileId);

						return new JsonResult(new
						{
							FileId = entity.Id,
							FileName = entity.Name,
							FileType = entity.MimeType,
							DateCreated = entity.CreatedOn
						});
					}
				}
			}

			return null;
		}
	}
}