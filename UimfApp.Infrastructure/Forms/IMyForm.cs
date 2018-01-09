namespace UimfApp.Infrastructure.Forms
{
	using MediatR;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.MediatR;

	public interface IMyForm<in TRequest, out TResponse> : IForm<TRequest, TResponse, MyFormResponseMetadata>
		where TResponse : FormResponse<MyFormResponseMetadata>
		where TRequest : IRequest<TResponse>
	{
	}

	public interface IMyForm<in TRequest, out TResponse, TResponseMetadata> : IForm<TRequest, TResponse, TResponseMetadata>
		where TResponse : FormResponse<TResponseMetadata>
		where TRequest : IRequest<TResponse>
		where TResponseMetadata : MyFormResponseMetadata
	{
	}

	public interface IMyAsyncForm<in TRequest, TResponse> : IAsyncForm<TRequest, TResponse, MyFormResponseMetadata>
		where TResponse : FormResponse<MyFormResponseMetadata>
		where TRequest : IRequest<TResponse>
	{
	}

	public interface IMyAsyncForm<in TRequest, TResponse, TResponseMetadata> : IAsyncForm<TRequest, TResponse, TResponseMetadata>
		where TResponse : FormResponse<TResponseMetadata>
		where TRequest : IRequest<TResponse>
		where TResponseMetadata : MyFormResponseMetadata
	{
	}
}
