namespace UimfApp.Infrastructure.Forms.Attributes
{
	using System;

	public class HtmlStringAttribute : Attribute
	{
		/// <summary>
		/// Gets or sets HTML string representing.
		/// </summary>
		public string Html { get; set; }
	}
}
