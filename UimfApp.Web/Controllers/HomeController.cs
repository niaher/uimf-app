namespace UimfApp.Web.Controllers
{
	using Microsoft.AspNetCore.Mvc;

	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return this.File("~/index.html", "text/html");
		}
	}
}