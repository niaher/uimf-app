namespace UimfApp.Infrastructure.Forms.Inputs
{
	using System;
	using UiMetadataFramework.Core.Binding;

	public class DateRange
	{
		public DateRange(DateTime? min, DateTime? max)
		{
			this.Min = min;
			this.Max = max;
		}

		public DateRange()
		{
		}

		public DateTime? Max { get; set; }
		public DateTime? Min { get; set; }
	}

	public class DateRangeInputFieldBinding : InputFieldBinding
	{
		public DateRangeInputFieldBinding() : base(typeof(DateRange), "date-range")
		{
		}
	}
}
