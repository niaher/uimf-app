namespace UimfApp.Web
{
	using System.IO;
	using Microsoft.AspNetCore;
	using Microsoft.AspNetCore.Hosting;
	using StructureMap.AspNetCore;

	public class Program
	{
		public static void Main(string[] args)
		{
			BuildWebHost(args).Run();
		}

		public static IWebHost BuildWebHost(string[] args) =>
			WebHost.CreateDefaultBuilder(args)
				.UseKestrel()
				.UseContentRoot(Directory.GetCurrentDirectory())
				.UseIISIntegration()
				.UseStartup<Startup>()
				.UseApplicationInsights()
				.UseStructureMap()
				.Build();
	}
}
