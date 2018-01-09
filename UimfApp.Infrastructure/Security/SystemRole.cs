namespace UimfApp.Infrastructure.Security
{
	/// <summary>
	/// Represents a role which is not bound to any specific entity, but is
	/// rather a global role which user has across the entire system.
	/// </summary>
	public class SystemRole : Role
	{
		public SystemRole(string name, bool isDynamicallyAssigned = false) : base(name)
		{
			this.IsDynamicallyAssigned = isDynamicallyAssigned;
		}

		/// <summary>
		/// Gets a value indicating that this role is assigned dynamically by the 
		/// app and cannot be assigned manually.
		/// </summary>
		public bool IsDynamicallyAssigned { get; }
	}
}
