namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Core.Binding;

	public class NumberConfigAttribute : Attribute, ICustomPropertyAttribute
	{
		public NumberConfigAttribute()
		{
		}

		public NumberConfigAttribute(double step)
		{
			this.Step = step;
		}

		public NumberConfigAttribute(double step, double minValue, double maxValue)
		{
			this.MaxValue = maxValue;
			this.MinValue = minValue;
			this.Step = step;
		}

		public double? MaxValue { get; set; }
		public double? MinValue { get; set; }
		public double Step { get; set; }

		public object GetValue()
		{
			return new
			{
				this.MinValue,
				this.MaxValue,
				this.Step
			};
		}

		public string Name { get; set; } = "numberConfig";
	}
}
