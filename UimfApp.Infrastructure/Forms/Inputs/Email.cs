namespace UimfApp.Infrastructure.Forms.Inputs
{
	using UiMetadataFramework.Core.Binding;

	public class Email
	{
		public Email(string value)
		{
			this.Value = value;
		}

		public Email()
		{
		}

		public string Value { get; set; }
	}

	public class EmailInputFieldBinding : InputFieldBinding
	{
		public EmailInputFieldBinding() : base(typeof(Email), "email")
		{
		}
	}
}
