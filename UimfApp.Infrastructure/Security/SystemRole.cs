namespace UimfApp.Infrastructure.Security
{
	public class SystemRole : Role
	{
		/// <summary>
		/// Gets a value indicating that this role is assigned dynamically by the 
		/// app and cannot be assigned manually.
		/// </summary>
		public bool IsDynamicallyAssigned { get; }

		public SystemRole(string name, bool isDynamicallyAssigned = false) : base(name)
		{
			this.IsDynamicallyAssigned = isDynamicallyAssigned;
		}
	}
}