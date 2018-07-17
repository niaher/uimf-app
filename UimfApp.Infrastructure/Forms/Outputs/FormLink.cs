namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Basic.Output;

	// ReSharper disable once UnusedTypeParameter
	public class FormLink<TForm> : FormLink
	{
		public int? ContextId { get; set; }
	}
}
