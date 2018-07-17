namespace UimfApp.Infrastructure.Forms.Inputs
{
	using UiMetadataFramework.Core.Binding;

	public class NumberRange
	{
		public NumberRange(decimal? min, decimal? max)
		{
			this.Min = min;
			this.Max = max;
		}

		public NumberRange()
		{
		}

		public decimal? Max { get; set; }
		public decimal? Min { get; set; }
	}

	public class NumberRangeInputFieldBinding : InputFieldBinding
	{
		public NumberRangeInputFieldBinding() : base(typeof(NumberRange), "number-range")
		{
		}
	}
}
