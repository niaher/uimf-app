namespace UimfApp.Infrastructure
{
	using System;

	/// <summary>
	/// Used to annotate a type which can be registered in <see cref="Register{T}"/>.
	/// </summary>
	public class RegisterEntryAttribute : Attribute
	{
		public RegisterEntryAttribute(string key)
		{
			this.Key = key;
		}

		/// <summary>
		/// Gets or sets name for the type inside the <see cref="Register{T}"/>.
		/// </summary>
		public string Key { get; set; }
	}
}
