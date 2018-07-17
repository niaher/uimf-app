namespace UimfApp.Infrastructure.Security
{
	using System;
	using CPermissions;

	/// <summary>
	/// Encapsulates security configuration, which dictates how the security
	/// check for an object of type <see cref="ObjectType"/> is performed.
	/// </summary>
	public class ObjectSecurityConfiguration
	{
		public ObjectSecurityConfiguration(Type objectType, SecureAttribute attribute)
			: this(objectType, attribute.ContextType, attribute.Permission)
		{
		}

		public ObjectSecurityConfiguration(Type objectType, Type contextType, UserAction permission)
		{
			this.ObjectType = objectType;
			this.ContextType = contextType;
			this.Permission = permission;
		}

		/// <summary>
		/// Gets type of context for which the security check should be performed,
		/// before access to the object can be granted.
		/// </summary>
		public Type ContextType { get; }

		/// <summary>
		/// Gets <see cref="Type"/> of an object which needs to be protected.
		/// </summary>
		public Type ObjectType { get; }

		/// <summary>
		/// Gets permission required to access the object of type <see cref="ObjectType"/>.
		/// This permission can be either context-less (<see cref="UserAction"/>) or context-based
		/// (<see cref="UserAction{TContext}"/>).
		/// </summary>
		/// <remarks>
		/// If <see cref="ContextType"/> property is not null, then this property will hold a
		/// context-based permission, i.e. - <see cref="UserAction{TContext}"/> for
		/// <see cref="ContextType"/>. Otherwise it will hold a context-less/global permission
		/// (i.e. - <see cref="UserAction"/>).</remarks>
		public UserAction Permission { get; }
	}
}
