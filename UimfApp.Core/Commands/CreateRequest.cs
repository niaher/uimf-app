namespace UimfApp.Core.Commands
{
	using MediatR;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.MediatR;

	public class CreateRequest : IForm<CreateRequest.Request, CreateRequest.Response>
	{
		public Response Handle(Request message)
		{
			return new Response();
		}

		public class Response : FormResponse
		{
		}

		public class Request : IRequest<Response>
		{
		}
	}
}