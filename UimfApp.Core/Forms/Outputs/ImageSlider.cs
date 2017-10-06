namespace UimfApp.Core.Forms.Outputs
{
	using System.Collections.Generic;
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("image-slider")]
	public class ImageSlider
	{
		public bool CanEdit { get; set; }
		public int ContextId { get; set; }
		public string ContextType { get; set; }
		public IEnumerable<Image> Images { get; set; }
	}
}