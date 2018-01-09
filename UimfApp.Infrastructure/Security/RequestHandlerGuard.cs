namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Linq;
	using System.Reflection;
	using CPermissions;
	using MediatR;
	using UimfApp.Infrastructure.User;

	/// <summary>
	/// Provides ability to check if a user is allowed to run specific <see cref="IRequestHandler{TRequest,TResponse}"/>
	/// or <see cref="IAsyncRequestHandler{TRequest,TResponse}"/>.
	/// </summary>
	public class RequestHandlerGuard
	{
		public RequestHandlerGuard(Type type, EntitySecurityConfigurationRegister entitySecurityConfigurationRegister)
		{
			// If child implements ISecureHandler<,,>.
			this.ContextCommand = type.GetTypeInfo().GetInterfaces()
				.SingleOrDefault(t =>
				{
					if (!t.GetTypeInfo().IsGenericType)
					{
						return false;
					}

					var genericTypeDefinition = t.GetGenericTypeDefinition();
					return 
						genericTypeDefinition == typeof(ISecureHandler<,,>) || 
						genericTypeDefinition == typeof(IAsyncSecureHandler<,,>);
				});

			this.GetPermission = type.GetTypeInfo().GetMethod(nameof(ISecureHandler.GetPermission));

			if (this.ContextCommand != null)
			{
				// Get T from ISecureHandler<TContext,TRequest>
				var contextType = this.ContextCommand.GenericTypeArguments[0];

				if (!entitySecurityConfigurationRegister.Guards.TryGetValue(contextType, out var guard))
				{
					throw new BusinessException($"Context of type `{contextType.Name}` was not registered with the `SecurityGuard`.");
				}

				this.EntitySecurityConfiguration = guard;
				this.EnforceContextPermission =
					this.EntitySecurityConfiguration.PermissionManager.GetTypeInfo().GetMethod(nameof(SystemPermissionManager.EnforceCanDo));
			}

			// If child implements ISecureHandler.
			this.SystemCommand = type.GetTypeInfo().GetInterfaces().SingleOrDefault(t => t == typeof(ISecureHandler));
		}

		/// <summary>
		/// Gets type implementing <see cref="ISecureHandler{TContext,TRequest,TResponse}"/>.
		/// </summary>
		private Type ContextCommand { get; }

		/// <summary>
		/// Gets method <see cref="PermissionManager{TUser,TRole,TContext}.EnforceCanDo"/>.
		/// </summary>
		private MethodInfo EnforceContextPermission { get; }

		/// <summary>
		/// Gets <see cref="EntitySecurityConfiguration"/> instance if <see cref="ContextCommand"/>
		/// is not null, otherwise null.
		/// </summary>
		private EntitySecurityConfiguration EntitySecurityConfiguration { get; }

		/// <summary>
		/// Gets method <see cref="ISecureHandler.GetPermission"/>.
		/// </summary>
		private MethodInfo GetPermission { get; }

		/// <summary>
		/// Gets type implementing <see cref="ISecureHandler"/>.
		/// </summary>
		private Type SystemCommand { get; }

		/// <summary>
		/// Enforces that current user can invoke <paramref name="handler"/> with specific
		/// <paramref name="request"/> object.
		/// </summary>
		/// <typeparam name="TRequest">Type of request in <see cref="IRequestHandler{TRequest,TResponse}"/>.</typeparam>
		/// <typeparam name="TResponse">Type of response in <see cref="IRequestHandler{TRequest,TResponse}"/>.</typeparam>
		/// <param name="handler">Instance of <see cref="IRequestHandler{TRequest,TResponse}"/> or 
		/// <see cref="IAsyncRequestHandler{TRequest,TResponse}"/>.</param>
		/// <param name="request">Instance of <typeparamref name="TRequest"/>.</param>
		/// <param name="dependencyInjectionContainer"></param>
		/// <param name="userContext">User to check permissions for.</param>
		/// <param name="permissionManager">Instance of <see cref="SystemPermissionManager"/>.</param>
		public void EnforceSecurity<TRequest, TResponse>(
			object handler,
			TRequest request,
			DependencyInjectionContainer dependencyInjectionContainer,
			UserContext userContext,
			SystemPermissionManager permissionManager) where TRequest : IRequest<TResponse>
		{
			if (this.ContextCommand != null)
			{
				// Call GetPermission from IContextCommand.GetPermission.
				var permission = this.GetPermission.Invoke(handler, null);

				// Get context.
				var repository = (IEntityRepository)dependencyInjectionContainer.GetInstance(this.EntitySecurityConfiguration.Repository);
				var context = repository.Find(((ISecureHandlerRequest)request).ContextId);

				// Enforce permission.
				var pm = dependencyInjectionContainer.GetInstance(this.EntitySecurityConfiguration.PermissionManager);
				this.EnforceContextPermission.Invoke(pm, new[]
				{
					permission,
					userContext,
					context
				});
			}

			// If command implements ISecureHandler.
			if (this.SystemCommand != null)
			{
				var permission = this.GetPermission.Invoke(handler, null);
				permissionManager.EnforceCanDo((SystemAction)permission, userContext);
			}
		}
	}
}
