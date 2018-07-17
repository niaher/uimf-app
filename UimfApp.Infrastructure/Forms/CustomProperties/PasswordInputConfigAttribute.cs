namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Core.Binding;

	public class PasswordInputConfigAttribute : Attribute, ICustomPropertyAttribute
	{
		public PasswordInputConfigAttribute()
		{
		}

		public PasswordInputConfigAttribute(string regexDescription, string regex, bool requireConfirmation)
		{
			this.Regex = regex;
			this.RequireConfirmation = requireConfirmation;
			this.RegexDescription = regexDescription;
		}

		public string Regex { get; set; }
		public string RegexDescription { get; set; }
		public bool RequireConfirmation { get; set; }

		public object GetValue()
		{
			return new
			{
				this.Regex,
				this.RequireConfirmation,
				this.RegexDescription
			};
		}

		public string Name { get; set; } = "passwordInputConfig";
	}
}
