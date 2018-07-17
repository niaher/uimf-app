namespace UimfApp.Infrastructure.Forms
{
	using MediatR;
	using UiMetadataFramework.Core.Binding;

	public class ExcelRequest<T> : IRequest<T>
	{
		[NotField]
		public bool IsExcelRequest { get; set; } = false;
	}
}
