namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Diagnostics;
	using System.Reflection;
	using CPermissions;

	/// <summary>
	/// Represents a map between an entity, a repository which can retrieve such entities
	/// and <see cref="IPermissionManager{TUserAction,TUser}"/> which can check context permissions 
	/// for such entities.
	/// </summary>
	public class EntitySecurityConfiguration
	{
		public EntitySecurityConfiguration(Type permissionManager)
		{
			var baseType = permissionManager.GetTypeInfo().BaseType;
			Debug.Assert(baseType != null);

			// ReSharper disable once PossibleNullReferenceException
			this.ContextType = baseType.GenericTypeArguments[3];
			this.PermissionManager = permissionManager;
		}

		/// <summary>
		/// Gets or sets entity which this guard secures.
		/// </summary>
		public Type ContextType { get; }

		/// <summary>
		/// Gets or sets <see cref="IPermissionManager{TUserAction,TUser,TContext}"/> for <see cref="ContextType"/>.
		/// </summary>
		internal Type PermissionManager { get; }

		/// <summary>
		/// Gets or sets type of repository responsible for retrieval of <see cref="ContextType"/>.
		/// </summary>
		internal Type Repository { get; set; }
	}
}
