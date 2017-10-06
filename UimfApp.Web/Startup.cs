namespace UimfApp.Web
{
	using System;
	using System.Linq;
	using System.Security.Claims;
	using Filer.Core;
	using Filer.EntityFrameworkCore;
	using MediatR;
	using Microsoft.AspNetCore.Builder;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.AspNetCore.Http;
	using Microsoft.EntityFrameworkCore;
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.DependencyInjection;
	using Microsoft.Extensions.Logging;
	using Nofy.Core;
	using Nofy.EntityFrameworkCore;
	using StructureMap;
	using StructureMap.TypeRules;
	using UimfApp.Core.Commands;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Filing;
	using UimfApp.DataSeed;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Decorators;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.Menu;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users;
	using UimfApp.Users.Commands;
	using UimfApp.Web.Forms;
	using UimfApp.Web.Middleware;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfDependencyInjectionContainer = UiMetadataFramework.Core.Binding.DependencyInjectionContainer;
	using AppDependencyInjectionContainer = UimfApp.Infrastructure.DependencyInjectionContainer;
	using NofyDataContext = Nofy.EntityFrameworkCore.DataContext;
	using FilerDataContext = Filer.EntityFrameworkCore.DataContext;

	public class Startup
	{
		public const string CorsAllowAllPolicy = "AllowAll";

		public Startup(IConfiguration configuration)
		{
			this.Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		private static UserContext GetUserContext(IContext ctx)
		{
			var contextAccessor = ctx.GetInstance<IHttpContextAccessor>();
			var httpContextUser = contextAccessor.HttpContext.User;

			if (!httpContextUser.Identity.IsAuthenticated)
			{
				return new UserContext();
			}

			return new UserContext
			{
				UserId = httpContextUser.Identity.Name,
				Roles = httpContextUser.Claims.Where(t => t.Type == ClaimTypes.Role).Select(t => t.Value)
					// Ensure that there is at least one role, otherwise "public" 
					// actions won't work.
					.Append(SystemRole.User.Name)
			};
		}

		private static EntityFileManagerCollection GetDocumentSecurityRuleCollection(AppDependencyInjectionContainer container)
		{
			var ruleCollection = new EntityFileManagerCollection(container);

			ruleCollection.RegisterAssembly(typeof(Core.Bootstrap).GetAssembly());

			return ruleCollection;
		}

		private static MetadataBinder GetMetadataBinder(IContext context)
		{
			var binder = new MetadataBinder(context.GetInstance<UimfDependencyInjectionContainer>());
			binder.RegisterAssembly(typeof(StringInputFieldBinding).GetAssembly());
			return binder;
		}

		// This method gets called by the runtime. Use this method to add services to the container.
		public IServiceProvider ConfigureServices(IServiceCollection services)
		{
			services.ConfigureAuthentication();
			services.ConfigureMvc(this.Configuration);

			// Register all assemblies with IRequestHandler.
			services.AddMediatR(typeof(CreateRequest));
			services.AddMediatR(typeof(InvokeForm));
			services.AddMediatR(typeof(MyForms));
			services.AddMediatR(typeof(ManageUsers));
			services.AddMediatR(typeof(Login));

			var container = new Container();

			container.Configure(config =>
			{
				config.For<MetadataBinder>().Use(t => GetMetadataBinder(t)).Singleton();
				config.For<FormRegister>().Singleton();
				config.For<MenuRegister>().Singleton();

				config.For<AppDependencyInjectionContainer>().Use(ctx => new AppDependencyInjectionContainer(ctx.GetInstance));
				config.For<UimfDependencyInjectionContainer>().Use(t => new UimfDependencyInjectionContainer(t.GetInstance));
				config.For(typeof(IRequestHandler<,>)).DecorateAllWith(typeof(SecurityGuard<,>));
				config.For<UserContext>().Use(ctx => GetUserContext(ctx));
				config.For<DataSeed>();

				config.For<EntityFileManagerCollection>()
					.Singleton()
					.Use(ctx => GetDocumentSecurityRuleCollection(ctx.GetInstance<AppDependencyInjectionContainer>()));

				// UimfApp.Users
				var connectionString = this.Configuration.GetConnectionString("UimfApp");
				var appDbContextOptions = new DbContextOptionsBuilder().UseSqlServer(connectionString).Options;
				config.For<ApplicationDbContext>().Use(ctx => new ApplicationDbContext(appDbContextOptions));

				// UimfApp.Core
				var coreDbContextOptions = new DbContextOptionsBuilder().UseSqlServer(connectionString).Options;
				config.For<CoreDbContext>().Use(ctx => new CoreDbContext(coreDbContextOptions));

				// Nofy.
				var nofyDbContextOptions = new DbContextOptionsBuilder().UseSqlServer(connectionString).Options;
				config.For<INotificationRepository>().Use<NotificationRepository>();
				config.For<NotificationRepository>().Use(ctx => new NotificationRepository(ctx.GetInstance<NofyDataContext>()));
				config.For<NofyDataContext>().Use(ctx => new NofyDataContext(nofyDbContextOptions, "ntf"));

				// Filer.
				var filerDbContextOptions = new DbContextOptionsBuilder().UseSqlServer(connectionString).Options;
				config.For<IFileManager>().Use<FileManager>();
				config.For<FilerDataContext>().Use(t => new FilerDataContext(filerDbContextOptions));

				config.Scan(_ =>
				{
					_.AssembliesFromApplicationBaseDirectory();
					_.AddAllTypesOf<IAssemblyBootstrapper>();
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

			// Run all assembly bootstrappers.
			foreach (var bootstrapper in serviceProvider.GetServices<IAssemblyBootstrapper>().OrderByDescending(t => t.Priority))
			{
				bootstrapper.Start(new AppDependencyInjectionContainer(t => container.GetInstance(t)));
			}

			return serviceProvider;
		}

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
	}
}