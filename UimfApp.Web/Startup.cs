namespace UimfApp.Web
{
	using System;
	using Microsoft.AspNetCore.Builder;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.DependencyInjection;
	using Microsoft.Extensions.Hosting;
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

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseMigrationsEndPoint();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseMiddleware(typeof(ErrorHandlingMiddleware));
			app.UseStaticFiles();

			app.UseAuthentication();
			app.UseRouting();
			app.UseCors(CorsAllowAllPolicy);
			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
				endpoints.MapFallbackToFile("index.html");
			});

			app.UseSession();
		}

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
				config.For<UserSession?>().Use(ctx => ctx.GetInstance<CookieManager>().GetUserSession()).AlwaysUnique();

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