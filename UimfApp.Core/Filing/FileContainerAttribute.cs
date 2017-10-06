namespace UimfApp.Core.Filing
{
	using System;

	/// <summary>
	/// Used to annotate an entity which can have files attached to it.
	/// </summary>
	public class FileContainerAttribute : Attribute
	{
		public FileContainerAttribute(string contextKey)
		{
			this.ContextKey = contextKey;
		}

		/// <summary>
		/// Gets or sets context key which will comprise part of the unique
		/// identifier objects of the type being decorated.
		/// </summary>
		/// <example>When linking files with an object, the link is created by
		/// specifying "context", which should uniquely identify the object.
		/// For example if we are linking files with contract #123, then
		/// the context can be specified as "contract:123". The first part of this
		/// identifier is determined by <see cref="ContextKey"/>.</example>
		public string ContextKey { get; set; }
	}
}