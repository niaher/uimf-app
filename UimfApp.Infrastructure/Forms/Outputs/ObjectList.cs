namespace UimfApp.Infrastructure.Forms.Outputs
{
	using System.Collections.Generic;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("object-list")]
	public class ObjectList<T>
	{
		public ObjectList(IEnumerable<T> items, MetadataBinder binder)
		{
			this.Items = items;
			this.Metadata = binder.BindOutputFields(typeof(T));
		}

		public IEnumerable<T> Items { get; set; }
		public IEnumerable<OutputFieldMetadata> Metadata { get; set; }
	}
}
