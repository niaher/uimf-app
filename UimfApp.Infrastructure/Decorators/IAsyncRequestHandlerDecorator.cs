namespace UimfApp.Infrastructure.Decorators
{
	using MediatR;

	public interface IAsyncRequestHandlerDecorator<in TRequest, TResponse> : IAsyncRequestHandler<TRequest, TResponse>
		where TRequest : IRequest<TResponse>
	{
		IAsyncRequestHandler<TRequest, TResponse> InnerCommand { get; }
	}
}
