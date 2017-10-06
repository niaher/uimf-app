namespace UimfApp.Infrastructure.Decorators
{
	using System;
	using System.Linq;
	using System.Reflection;
	using MediatR;
	using UimfApp.Infrastructure.Security;

	public class SecurityGuard<TRequest, TResponse> : IRequestHandlerDecorator<TRequest, TResponse> where TRequest : IRequest<TResponse>
	{
		private readonly UserContext userContext;

		public SecurityGuard(IRequestHandler<TRequest, TResponse> innerCommand, UserContext userContext)
		{
			this.InnerCommand = innerCommand;
			this.userContext = userContext;
		}

		public IRequestHandler<TRequest, TResponse> InnerCommand { get; }

		public TResponse Handle(TRequest message)
		{
			// Get type of child.
			var type = this.InnerCommand.GetType();

			// If child implements ISecureHandler<,,>.
			Type contextCommand = type.GetTypeInfo().GetInterfaces()
				.SingleOrDefault(t => t.GetTypeInfo().IsGenericType && t.GetGenericTypeDefinition() == typeof(ISecureHandler<,,>));

			if (contextCommand != null)
			{
				// Get T from ISecureHandler<TContext,TRequest>
				var contextType = contextCommand.GenericTypeArguments[0];

				// Call GetPermission from IContextCommand.GetPermission.
				var permission = type.GetTypeInfo().GetMethod(nameof(ISecureHandler.GetPermission)).Invoke(this.InnerCommand, null);

				// Get context.
				var context = SecurityGuardCollection.GetContext(contextType, (ISecureHandlerRequest)message);

				// Get context's base type (otherwise we might end up with EF proxy).
				var contextBaseType = GetBaseType(context);

				this.EnforceContextPermission(contextBaseType, permission, context);
			}

			// If child implements ISecureHandler.
			Type systemCommand = type.GetTypeInfo().GetInterfaces().SingleOrDefault(t => t == typeof(ISecureHandler));

			if (systemCommand != null)
			{
				var permission = type.GetTypeInfo().GetMethod(nameof(ISecureHandler.GetPermission)).Invoke(this.InnerCommand, null);

				var permissionManager = new SystemPermissionManager();
				permissionManager.EnforceCanDo((SystemAction)permission, this.userContext);
			}

			var response = this.InnerCommand.Handle(message);

			return response;
		}

		private static Type GetBaseType(object context)
		{
			var entityType = context.GetType();
			if (entityType.GetTypeInfo().BaseType != null && entityType.Namespace == "System.Data.Entity.DynamicProxies")
			{
				return entityType.GetTypeInfo().BaseType;
			}

			return entityType;
		}

		private void EnforceContextPermission(Type contextBaseType, object permission, object context)
		{
			ContextSecurityGuard guard;
			if (SecurityGuardCollection.Guards.TryGetValue(contextBaseType, out guard))
			{
				if (guard == null)
				{
					throw new BusinessException($"Guard for context type '{contextBaseType.Name}' is missing.");
				}

				guard.EnforcePermission(this.userContext, permission, context);
			}
		}
	}
}