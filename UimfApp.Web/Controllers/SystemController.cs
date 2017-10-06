namespace UimfApp.Web.Controllers
{
	using System.Threading.Tasks;
	using Microsoft.AspNetCore.Mvc;
	using UimfApp.DataSeed;

	public class SystemController : Controller
	{
		private readonly DataSeed seed;

		public SystemController(DataSeed seed)
		{
			this.seed = seed;
		}

		/// <summary>
		/// Seeds sample data to be able to run the app. This should only be used
		/// for test deployments and never in production environments.
		/// </summary>
		public async Task<ActionResult> Seed()
		{
			if (!this.Request.IsLocal())
			{
				return this.Forbid();
			}

			await this.seed.Seed();
			return this.Ok("OK");
		}
	}
}