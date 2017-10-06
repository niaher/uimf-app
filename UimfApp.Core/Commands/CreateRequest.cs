namespace UimfApp.Core.Commands
{
	using MediatR;
	using UimfApp.Core.Menus;
	using UimfApp.Infrastructure.Forms;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.MediatR;

	[MyForm(Menu = CoreMenus.Main)]
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