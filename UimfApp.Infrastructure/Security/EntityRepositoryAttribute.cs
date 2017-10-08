namespace UimfApp.Infrastructure.Security
{
	using System;

	/// <summary>
	/// Used to annotate <see cref="IEntityRepository"/>.
	/// </summary>
	public class EntityRepositoryAttribute : Attribute
	{
		/// <summary>
		/// Gets or sets <see cref="Type"/> of the entities which the repository will retrieve.
		/// </summary>
		public Type EntityType { get; set; }
	}
}