namespace UimfApp.Infrastructure.Decorators
{
	using MediatR;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;

	public class SecurityGuard<TRequest, TResponse> : 
		IRequestHandlerDecorator<TRequest, TResponse> where TRequest : IRequest<TResponse>
	{
		private readonly DependencyInjectionContainer dependencyInjectionContainer;
		private readonly RequestHandlerGuardRegister requestHandlerGuardRegister;
		private readonly SystemPermissionManager permissionManager;
		private readonly UserContext userContext;

		public SecurityGuard(
			IRequestHandler<TRequest, TResponse> innerCommand,
			RequestHandlerGuardRegister requestHandlerGuardRegister,
			DependencyInjectionContainer dependencyInjectionContainer,
			UserContext userContext,
			SystemPermissionManager permissionManager)
		{
			this.InnerCommand = innerCommand;
			this.requestHandlerGuardRegister = requestHandlerGuardRegister;
			this.dependencyInjectionContainer = dependencyInjectionContainer;
			this.userContext = userContext;
			this.permissionManager = permissionManager;
		}

		public IRequestHandler<TRequest, TResponse> InnerCommand { get; }

		public TResponse Handle(TRequest message)
		{
			var type = this.InnerCommand.GetType();

			var securityContext = this.requestHandlerGuardRegister.Get(type);

			if (securityContext == null)
			{
				throw new ApplicationException($"Security context for '{type.FullName}' was not found.");
			}

			securityContext.EnforceSecurity<TRequest, TResponse>(
				this.InnerCommand,
				message,
				this.dependencyInjectionContainer, 
				this.userContext,
				this.permissionManager);
			
			return this.InnerCommand.Handle(message);
		}
	}
}
