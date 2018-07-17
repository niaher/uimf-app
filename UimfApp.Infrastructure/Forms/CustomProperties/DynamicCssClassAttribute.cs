namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	using System;
	using UiMetadataFramework.Core.Binding;

	/// <summary>
	/// Instructs client to apply CSS class based on the value of an output field.
	/// </summary>
	public class DynamicCssClassAttribute : Attribute, ICustomPropertyAttribute
	{
		/// <summary>
		/// Initialises a new instance of the <see cref="DynamicCssClassAttribute"/> class.
		/// </summary>
		/// <param name="cssClassPrefix">Constant string to be used as the prefix for the CSS
		/// class.</param>
		/// <param name="outputFieldAsSuffix">
		/// Name of a property in the "response" class. The value of this property
		/// will be concatenated with the constant specified by <see cref="CssClassPrefix"/>.
		/// </param>
		public DynamicCssClassAttribute(string cssClassPrefix, string outputFieldAsSuffix)
		{
			this.CssClassPrefix = cssClassPrefix;
			this.OutputFieldAsSuffix = outputFieldAsSuffix;
		}

		/// <summary>
		/// Gets or sets the prefix of the CSS class to be applied to the element.
		/// The value indicated here will be treated as a constant. The final CSS
		/// class applied to the element will be a combination of <see cref="CssClassPrefix"/>
		/// value and value of the output field specified by <see cref="OutputFieldAsSuffix"/>.
		/// </summary>
		/// <example>If this property is set to "label-" and <see cref="OutputFieldAsSuffix"/>
		/// is set to <code>nameof(SomeProperty)</code> then the final
		/// CSS class applied will be <code>$"level-{valueOfSomeProperty}"</code>.
		/// </example>
		public string CssClassPrefix { get; set; }

		/// <summary>
		/// Name of a property in the "response" class. The value of this property
		/// will be concatenated with the constant specified by <see cref="CssClassPrefix"/>.
		/// </summary>
		public string OutputFieldAsSuffix { get; set; }

		public object GetValue()
		{
			return new
			{
				CssClass = this.CssClassPrefix,
				Suffix = this.OutputFieldAsSuffix
			};
		}

		public string Name { get; set; } = "dynamicCssClass";
	}
}
