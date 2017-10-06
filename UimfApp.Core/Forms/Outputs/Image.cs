namespace UimfApp.Core.Forms.Outputs
{
	using System;
	using System.Collections.Generic;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("image")]
	public class Image
	{
		public ICollection<FormLink> Actions { get; set; } = new List<FormLink>();
		public DateTime DateCreated { get; set; }
		public string HashId { get; set; }
		public string Name { get; set; }
		public long Size { get; set; }
	}
}