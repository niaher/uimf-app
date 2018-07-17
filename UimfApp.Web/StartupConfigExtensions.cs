namespace UimfApp.Web
{
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.DependencyInjection;
	using Newtonsoft.Json.Converters;
	using Newtonsoft.Json.Serialization;
	using UimfApp.Infrastructure.Configuration;

	public static class StartupConfigExtensions
	{
		public static void ConfigureMvc(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddMvc()
				.AddJsonOptions(options =>
				{
					options.SerializerSettings.Converters.Add(new StringEnumConverter());
					options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Include;
					options.SerializerSettings.ContractResolver = new DefaultContractResolver
					{
						NamingStrategy = new CamelCaseNamingStrategy
						{
							ProcessDictionaryKeys = true,
							OverrideSpecifiedNames = false
						}
					};
				});

			// Enable session-state.
			services.AddDistributedMemoryCache();
			services.AddSession();

			// Configure options from appsettings.json.
			services.AddOptions();
			services.Configure<AppConfig>(configuration.GetSection("AppConfig"));

			services.AddCors(o => o.AddPolicy(Startup.CorsAllowAllPolicy, builder =>
			{
				builder.AllowAnyOrigin()
					.AllowAnyMethod()
					.AllowAnyHeader();
			}));
		}
	}
}
