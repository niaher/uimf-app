namespace UimfApp.Core.Commands
{
	using MediatR;
	using UimfApp.Core.Menus;
	using UimfApp.Infrastructure.Forms;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.MediatR;

	[MyForm(Menu = CoreMenus.Main, Id = "do-something", Label = "Do something")]
	public class DoSomeThing : IForm<DoSomeThing.Request, DoSomeThing.Response>
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