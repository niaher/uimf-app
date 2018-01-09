namespace UimfApp.Web
{
	using System;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.DependencyInjection;
	using Newtonsoft.Json.Converters;
	using Newtonsoft.Json.Serialization;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Messages;
	using UimfApp.Users;
	using UimfApp.Web.Email;

	public static class StartupConfigExtensions
	{
		public static void ConfigureAuthentication(this IServiceCollection services)
		{
			services.AddIdentity<ApplicationUser, ApplicationRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddDefaultTokenProviders();

			services.ConfigureApplicationCookie(options =>
			{
				// Cookie settings
				options.Cookie.Expiration = TimeSpan.FromDays(150);
				options.LoginPath = "/Account/LogIn";
				options.LogoutPath = "/Account/LogOut";
			});

			services.Configure<IdentityOptions>(options =>
			{
				// Password settings
				options.Password.RequireDigit = true;
				options.Password.RequiredLength = 8;
				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequireUppercase = true;
				options.Password.RequireLowercase = false;

				// Lockout settings
				options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
				options.Lockout.MaxFailedAccessAttempts = 10;

				// User settings
				options.User.RequireUniqueEmail = true;
			});

			services.AddTransient<IEmailSender, AuthMessageSender>();
			services.AddTransient<ISmsSender, AuthMessageSender>();
		}

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
