namespace UimfApp.Web
{
	using System;
	using Microsoft.AspNetCore.Builder;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.DependencyInjection;
	using Microsoft.Extensions.Logging;
	using StructureMap;
	using UimfApp.DependencyInjection;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.User;
	using UimfApp.Web.Email;
	using UimfApp.Web.Middleware;

	public class Startup
	{
		public const string CorsAllowAllPolicy = "AllowAll";

		public Startup(IConfiguration configuration)
		{
			this.Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(this.Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				//app.UseBrowserLink();
				app.UseDatabaseErrorPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}
			
			app.UseMiddleware(typeof(ErrorHandlingMiddleware));
			app.UseStaticFiles();
			app.UseAuthentication();
			app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");
			});

			app.UseSession();
		}

		// This method gets called by the runtime. Use this method to add services to the container.
		public IServiceProvider ConfigureServices(IServiceCollection services)
		{
			services.ConfigureMvc(this.Configuration);

			var container = new Container();

			container.ConfigureInfrastructure();
			container.ConfigureOptions();
			container.ConfigureAppNotifications();
			container.ConfigureIdentity();
			container.ConfigureMediatr();
			container.ConfigureDomainEvents();
			container.ConfigureUserRoleCheckers();
			container.ConfigureEmailTemplates();
			container.ConfigureEmailSenders<AuthMessageSender, AuthMessageSender>();

			// Data access.
			var coreDbContextOptions = this.Configuration.DbContextOptions();
			container.ConfigureDataAccess(coreDbContextOptions);

			container.Configure(config =>
			{
				config.For<UserContextAccessor>().Use<AppUserContextAccessor>();
				config.For<UserContext>().Use(ctx => ctx.GetInstance<UserContextAccessor>().GetUserContext());
				config.For<UserSession>().Use(ctx => ctx.GetInstance<CookieManager>().GetUserSession()).AlwaysUnique();

				config.Scan(_ =>
				{
					_.AssembliesFromApplicationBaseDirectory();
					_.AddAllTypesOf<IAssemblyBootstrapper>();
					_.AddAllTypesOf(typeof(Register<>));
					_.WithDefaultConventions();
				});
			});

			// Populate the container using the service collection.
			// This will register all services from the collection
			// into the container with the appropriate lifetime.
			container.Populate(services);

			// Finally, make sure we return an IServiceProvider. This makes
			// ASP.NET use the StructureMap container to resolve its services.
			var serviceProvider = container.GetInstance<IServiceProvider>();

			container.RunAssemblyBootstrapers();

			container.ConfigureRegisters();

			return serviceProvider;
		}
	}
}
