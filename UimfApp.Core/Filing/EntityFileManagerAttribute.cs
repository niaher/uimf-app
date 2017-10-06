namespace UimfApp.Core.Filing
{
	using System;

	/// <summary>
	/// Used to annotate <see cref="IEntityFileManager"/>.
	/// </summary>
	public class EntityFileManagerAttribute : Attribute
	{
		/// <summary>
		/// Gets or sets name of the <see cref="Type"/> for which the this 
		/// <see cref="IEntityFileManager"/> will manage the documents.
		/// </summary>
		public string EntityType { get; set; }
	}
}