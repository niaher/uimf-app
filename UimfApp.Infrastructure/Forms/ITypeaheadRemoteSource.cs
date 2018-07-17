namespace UimfApp.Infrastructure.Forms
{
	using MediatR;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.MediatR;
	using UimfApp.Infrastructure.Forms.Typeahead;

	public abstract class TypeaheadRemoteSource<TRequest, TKey> : Form<TRequest, TypeaheadResponse<TKey>>, ITypeaheadRemoteSource
		where TRequest : IRequest<TypeaheadResponse<TKey>>
	{
	}
}
