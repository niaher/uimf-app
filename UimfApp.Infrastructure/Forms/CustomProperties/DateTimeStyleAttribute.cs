namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Core.Binding;

	public class DateTimeStyleAttribute : StringPropertyAttribute
	{
		public DateTimeStyleAttribute(DateTimeStyle style)
			: base("dateTimeStyle", Serialize(style))
		{
		}

		private static string Serialize(DateTimeStyle value)
		{
			switch (value)
			{
				case DateTimeStyle.Date:
					return "date";
				case DateTimeStyle.DateTime:
					return "dateTime";
				case DateTimeStyle.Time:
					return "time";
				default:
					throw new ArgumentOutOfRangeException(nameof(value), value, null);
			}
		}
	}

	public enum DateTimeStyle
	{
		Date,
		DateTime,
		Time
	}
}
