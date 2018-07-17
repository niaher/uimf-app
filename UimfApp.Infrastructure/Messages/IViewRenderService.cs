namespace UimfApp.Infrastructure.Messages
{
	using System.Threading.Tasks;

	public interface IViewRenderService
	{
		Task<string> RenderToString<TModel>(TModel model);
	}
}
