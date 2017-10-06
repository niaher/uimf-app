namespace UimfApp.Infrastructure.Decorators
{
	using System;
	using System.Diagnostics;
	using System.Reflection;
	using CPermissions;
	using UimfApp.Infrastructure.Security;

	public class ContextSecurityGuard
	{
		public ContextSecurityGuard(Type permissionManager)
		{
			var baseType = permissionManager.GetTypeInfo().BaseType;
			Debug.Assert(baseType != null);

			this.ContextType = baseType.GenericTypeArguments[2];
			this.PermissionManager = permissionManager;
		}

		/// <summary>
		/// Gets or sets entity which this guard secures.
		/// </summary>
		public Type ContextType { get; }

		/// <summary>
		/// Gets or sets type of DbContext responsible for <see cref="ContextType"/>.
		/// </summary>
		internal Type DbContext { get; set; }

		/// <summary>
		/// Gets or sets type of Repository responsible for <see cref="ContextType"/>.
		/// </summary>
		internal Type Repository { get; set; }

		/// <summary>
		/// Gets or sets <see cref="IPermissionManager{TUserAction,TUser,TContext}"/> for <see cref="ContextType"/>.
		/// </summary>
		private Type PermissionManager { get; }

		public void EnforcePermission(UserContext userContext, object permission, object context)
		{
			var pm = Activator.CreateInstance(this.PermissionManager);
			var enforceCanDo = this.PermissionManager.GetTypeInfo().GetMethod(nameof(SystemPermissionManager.EnforceCanDo));

			enforceCanDo.Invoke(pm, new[] { permission, userContext, context });
		}
	}
}