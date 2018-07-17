namespace UimfApp.Infrastructure.Forms.Outputs
{
	using UiMetadataFramework.Core.Binding;

	[OutputFieldType("text-value-multiline")]
	public class MultilineTextValue
	{
		public MultilineTextValue(string value)
		{
			this.Value = value;
		}

		public string Value { get; }

		public static MultilineTextValue FromText(string value)
		{
			if (string.IsNullOrWhiteSpace(value))
			{
				return null;
			}

			return new MultilineTextValue(value);
		}
	}
}
