namespace UimfApp.Infrastructure.Forms
{
	using MediatR;
	using UimfApp.Infrastructure.Forms.Typeahead;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.MediatR;

	public interface ITypeaheadRemoteSource<in TRequest, TKey> :
		IForm<TRequest, TypeaheadResponse<TKey>>,
		ITypeaheadRemoteSource
		where TRequest : IRequest<TypeaheadResponse<TKey>>
	{
	}
}
