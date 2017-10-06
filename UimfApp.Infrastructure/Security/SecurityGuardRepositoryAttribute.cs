namespace UimfApp.Infrastructure.Security
{
	using System;

	/// <summary>
	/// Used to annotate <see cref="ISecurityGuardRepository"/>.
	/// </summary>
	public class SecurityGuardRepositoryAttribute : Attribute
	{
		/// <summary>
		/// Gets or sets <see cref="Type"/> of the entities which the repository will retrieve.
		/// </summary>
		public Type EntityType { get; set; }
	}
}