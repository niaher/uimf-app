namespace UimfApp.Infrastructure.Security
{
	using System;

	public abstract class Role
	{
		private readonly string typeName;

		protected Role(string name)
		{
			this.typeName = this.GetType().FullName;
			this.Name = name;
		}

		public string Name { get; }

		public bool Equals(Role other)
		{
			if (other == null)
			{
				return false;
			}

			// Even if role has same name, but different type, then they aren't the same thing.
			// For example LspRole.Creator and RequisitionRole.Creator aren't the same thing.
			if (this.typeName != other.typeName)
			{
				return false;
			}

			return
				ReferenceEquals(this.Name, other.Name) ||
				this.Name != null && this.Name.Equals(other.Name, StringComparison.OrdinalIgnoreCase);
		}

		public override bool Equals(object obj)
		{
			return this.Equals(obj as Role);
		}

		public override int GetHashCode()
		{
			return this.typeName.GetHashCode() + this.Name?.GetHashCode() ?? 0;
		}
	}
}