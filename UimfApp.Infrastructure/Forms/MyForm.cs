namespace UimfApp.Infrastructure.Forms
{
	using MediatR;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.MediatR;

	public abstract class MyForm<TRequest, TResponse> : Form<TRequest, TResponse, MyFormResponseMetadata>
		where TResponse : FormResponse<MyFormResponseMetadata>
		where TRequest : IRequest<TResponse>
	{
	}

	public abstract class MyForm<TRequest, TResponse, TResponseMetadata> : Form<TRequest, TResponse, TResponseMetadata>
		where TResponse : FormResponse<TResponseMetadata>
		where TRequest : IRequest<TResponse>
		where TResponseMetadata : MyFormResponseMetadata
	{
	}

	public abstract class MyAsyncForm<TRequest, TResponse> : AsyncForm<TRequest, TResponse, MyFormResponseMetadata>
		where TResponse : FormResponse<MyFormResponseMetadata>
		where TRequest : IRequest<TResponse>
	{
	}

	public abstract class MyAsyncForm<TRequest, TResponse, TResponseMetadata> : AsyncForm<TRequest, TResponse, TResponseMetadata>
		where TResponse : FormResponse<TResponseMetadata>
		where TRequest : IRequest<TResponse>
		where TResponseMetadata : MyFormResponseMetadata
	{
	}
}
