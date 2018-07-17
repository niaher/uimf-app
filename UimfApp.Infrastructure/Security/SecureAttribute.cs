namespace UimfApp.Infrastructure.Security
{
	using System;
	using CPermissions;
	using ApplicationException = UimfApp.Infrastructure.ApplicationException;

	/// <summary>
	/// Used to apply <see cref="ObjectSecurityConfiguration"/> to an object.
	/// </summary>
	[AttributeUsage(AttributeTargets.Class)]
	public class SecureAttribute : Attribute
	{
		/// <summary>
		/// Instantiates a new instance of the <see cref="SecureAttribute"/> class.
		/// </summary>
		/// <param name="actionType">Type implementing <see cref="UserAction"/> or <see cref="UserAction{TContext}"/>.</param>
		/// <param name="actionName">Name of a static field inside <paramref name="actionType"/> which holds
		/// the <see cref="UserAction"/> or <see cref="UserAction{TContext}"/> to be used when performing security
		/// check.</param>
		public SecureAttribute(Type actionType, string actionName)
		{
			var fieldInfo = actionType.GetField(actionName);

			if (fieldInfo == null)
			{
				throw new ApplicationException($"Field '{actionType.FullName}.{actionName}' does not exist.");
			}

			this.Permission = fieldInfo.GetValue(null) as UserAction;

			if (this.Permission == null)
			{
				throw new ApplicationException($"Field '{actionType.FullName}.{actionName}' does not return a '{nameof(UserAction)}' instance.");
			}

			var contextUserAction = actionType.GetBaseClassOfType(typeof(UserAction<>));
			if (contextUserAction != null)
			{
				this.ContextType = contextUserAction.GenericTypeArguments[0];
			}
		}

		/// <summary>
		/// Gets the type of context against which the security check should be performed.
		/// This field will be non-null only if the value specified in the <see cref="Permission"/>
		/// property implements <see cref="UserAction{TContext}"/> (i.e. - is a context-based
		/// permission).
		/// </summary>
		public Type ContextType { get; }

		/// <summary>
		/// Gets the <see cref="UserAction"/> which is required to access the object
		/// being decorated by this attribute.
		/// </summary>
		public UserAction Permission { get; }
	}
}
