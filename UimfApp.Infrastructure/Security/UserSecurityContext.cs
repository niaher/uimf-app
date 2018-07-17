namespace UimfApp.Infrastructure.Security
{
	using System;
	using UimfApp.Infrastructure.User;
	using ApplicationException = UimfApp.Infrastructure.ApplicationException;

	/// <summary>
	/// This class provides APIs to perform security checks for based on
	/// <see cref="SecureAttribute"/>.
	/// </summary>
	public class UserSecurityContext
	{
		public readonly UserContext UserContext;
		private readonly DependencyInjectionContainer dependencyInjectionContainer;
		private readonly EntitySecurityConfigurationRegister entityConfigurationRegister;
		private readonly ObjectSecurityConfigurationRegister objectSecurityConfigurationRegister;
		private readonly SystemPermissionManager systemPermissionManager;

		public UserSecurityContext(
			UserContext userContext,
			SystemPermissionManager systemPermissionManager,
			DependencyInjectionContainer dependencyInjectionContainer,
			EntitySecurityConfigurationRegister entityConfigurationRegister,
			ObjectSecurityConfigurationRegister objectSecurityConfigurationRegister)
		{
			this.UserContext = userContext;
			this.systemPermissionManager = systemPermissionManager;
			this.dependencyInjectionContainer = dependencyInjectionContainer;
			this.entityConfigurationRegister = entityConfigurationRegister;
			this.objectSecurityConfigurationRegister = objectSecurityConfigurationRegister;
		}

		/// <summary>
		/// Checks if the user can access object of the specified type.
		/// </summary>
		/// <typeparam name="T">Type for which the security check should be performed.</typeparam>
		/// <returns>True/false.</returns>
		public bool CanAccess<T>()
		{
			return this.CanAccess(typeof(T));
		}

		/// <summary>
		/// Checks if the user can access object of the specified type.
		/// </summary>
		/// <param name="type">Type for which the security check should be performed.</param>
		/// <returns>True/false.</returns>
		public bool CanAccess(Type type)
		{
			var secureForm = this.objectSecurityConfigurationRegister.GetSecureForm(type);

			if (secureForm == null)
			{
				return true;
			}

			EnforceContextlessSecurity(secureForm);

			return this.systemPermissionManager.CanDo(secureForm.Permission, this.UserContext);
		}

		/// <summary>
		/// Checks if the user can access object of the specified type against the given context.
		/// </summary>
		/// <param name="contextId">Id of the context against which the permission check should be done.</param>
		/// <typeparam name="T">Type for which the security check should be performed.</typeparam>
		/// <returns>True/false.</returns>
		public bool CanAccess<T>(int contextId)
			where T : class
		{
			return this.CanAccess(typeof(T), contextId);
		}

		/// <summary>
		/// Checks if the user can access object of the specified type against the given context.
		/// </summary>
		/// <param name="type">Type for which the security check should be performed.</param>
		/// <param name="contextId">Id of the context against which the permission check should be done.</param>
		/// <returns>True/false.</returns>
		public bool CanAccess(Type type, int contextId)
		{
			var secureForm = this.objectSecurityConfigurationRegister.GetSecureForm(type);

			if (secureForm == null)
			{
				return true;
			}

			var entitySecurityConfiguration = this.entityConfigurationRegister.Guards[secureForm.ContextType];
			var context = this.GetContext(contextId, entitySecurityConfiguration);

			// Call "EntityPermissionManager.CanDo".
			var pm = this.dependencyInjectionContainer.GetInstance(entitySecurityConfiguration.PermissionManager);
			return (bool)pm.GetType().GetMethod(nameof(EntityPermissionManager<UserContext, EntityAction<int, int>, int, int>.CanDo)).Invoke(pm, new[]
			{
				secureForm.Permission,
				this.UserContext,
				context
			});
		}

		/// <summary>
		/// Checks if the user can access object of the specified type. If the user has no
		/// permission then <see cref="PermissionException"/> is thrown.
		/// </summary>
		/// <param name="type">Type for which the security check should be performed.</param>
		/// <exception cref="PermissionException">Thrown if user has no permission to access object
		/// of the specified type and against the specified context.</exception>
		public void EnforceCanAccess(Type type)
		{
			var secureForm = this.objectSecurityConfigurationRegister.GetSecureForm(type);

			if (secureForm == null)
			{
				return;
			}

			EnforceContextlessSecurity(secureForm);

			this.systemPermissionManager.EnforceCanDo(secureForm.Permission, this.UserContext);
		}

		/// <summary>
		/// Checks if the user can access object of the specified type against the given context.
		/// If the user has no permission then <see cref="PermissionException"/> is thrown.
		/// </summary>
		/// <param name="type">Type for which the security check should be performed.</param>
		/// <param name="contextId">Id of the context against which the permission check should be done.</param>
		/// <exception cref="PermissionException">Thrown if user has no permission to access object
		/// of the specified type and against the specified context.</exception>
		public void EnforceCanAccess(Type type, int contextId)
		{
			var secureForm = this.objectSecurityConfigurationRegister.GetSecureForm(type);

			if (secureForm == null)
			{
				return;
			}

			var entitySecurityConfiguration = this.entityConfigurationRegister.Guards[secureForm.ContextType];
			var context = this.GetContext(contextId, entitySecurityConfiguration);

			// Call "EntityPermissionManager.CanDo".
			var pm = this.dependencyInjectionContainer.GetInstance(entitySecurityConfiguration.PermissionManager);
			pm.GetType().GetMethod(nameof(EntityPermissionManager<UserContext, EntityAction<int, int>, int, int>.EnforceCanDo)).Invoke(pm, new[]
			{
				secureForm.Permission,
				this.UserContext,
				context
			});
		}

		private static void EnforceContextlessSecurity(ObjectSecurityConfiguration objectSecurityConfiguration)
		{
			if (objectSecurityConfiguration.ContextType != null)
			{
				throw new ApplicationException(
					$"Permission '{objectSecurityConfiguration.Permission.Name}' is context-based. It must be " +
					$"checked against a specific instance of {objectSecurityConfiguration.ContextType.Name}. Therefore " +
					$"please use method '{nameof(CanAccess)}<THandler>(int contextId)'.");
			}
		}

		private object GetContext(int contextId, EntitySecurityConfiguration entitySecurityConfiguration)
		{
			var repository = (IEntityRepository)this.dependencyInjectionContainer.GetInstance(entitySecurityConfiguration.Repository);
			var context = repository.Find(contextId);
			return context;
		}
	}
}
