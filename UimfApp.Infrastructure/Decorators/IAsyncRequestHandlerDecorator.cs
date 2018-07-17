namespace UimfApp.Infrastructure.Decorators
{
	using MediatR;

	public interface IAsyncRequestHandlerDecorator<in TRequest, TResponse> : IRequestHandler<TRequest, TResponse>
		where TRequest : IRequest<TResponse>
	{
		IRequestHandler<TRequest, TResponse> InnerCommand { get; }
	}
}
