namespace UimfApp.Infrastructure.Security
{
	using CPermissions;
	using MediatR;

	public interface ISecureHandler<TContext, in TRequest, out TResponse> : IRequestHandler<TRequest, TResponse>
		where TRequest : IRequest<TResponse>, ISecureHandlerRequest
	{
		UserAction<TContext> GetPermission();
	}

	public interface ISecureHandler<TContext, in TRequest> : ISecureHandler<TContext, TRequest, Unit>
		where TRequest : IRequest<Unit>, ISecureHandlerRequest
	{
	}

	public interface IAsyncSecureHandler<TContext, in TRequest, TResponse> : IAsyncRequestHandler<TRequest, TResponse>
		where TRequest : IRequest<TResponse>, ISecureHandlerRequest
	{
		UserAction<TContext> GetPermission();
	}

	public interface IAsyncSecureHandler<TContext, in TRequest> : IAsyncSecureHandler<TContext, TRequest, Unit>
		where TRequest : IRequest<Unit>, ISecureHandlerRequest
	{
	}
}
