namespace UimfApp.DependencyInjection
{
	using System;
	using System.Linq;
	using System.Reflection;
	using Filer.Core;
	using Filer.EntityFrameworkCore;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using Microsoft.Extensions.DependencyInjection;
	using Microsoft.Extensions.Logging;
	using Microsoft.Extensions.Logging.Abstractions;
	using Microsoft.Extensions.Options;
	using StructureMap;
	using StructureMap.Pipeline;
	using StructureMap.TypeRules;
	using UimfApp.Core.DataAccess;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Configuration;
	using UimfApp.Infrastructure.Decorators;
	using UimfApp.Infrastructure.Domain;
	using UimfApp.Infrastructure.Emails;
	using UimfApp.Infrastructure.Forms.Menu;
	using UimfApp.Infrastructure.Messages;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Notifications;
	using UimfApp.Users;
	using UiMetadataFramework.Basic.Input;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;
	using UimfDependencyInjectionContainer = UiMetadataFramework.Core.Binding.DependencyInjectionContainer;
	using AppDependencyInjectionContainer = UimfApp.Infrastructure.DependencyInjectionContainer;

	public static class Extensions
	{
		private static readonly Lazy<Assembly[]> AssembliesWithBootstrapper = new Lazy<Assembly[]>(GetAssembliesWithBootstrapper);
		private static readonly Lazy<Assembly[]> AssembliesWithRequestHandlers = new Lazy<Assembly[]>(GetAssembliesWithRequestHandlers);

		public static void ConfigureAppNotifications(this IContainer container)
		{
			container.Configure(config => config.For<App.EventNotification.Bootstrap>());
		}

		public static void ConfigureDataAccess(this IContainer container, DbContextOptions coreDbContextOptions)
		{
			container.Configure(config =>
			{
				config.For<DbContextOptions>().Use(coreDbContextOptions);

				// Core
				config.For<CoreDbContext>().Use(t => new CoreDbContext(
					coreDbContextOptions,
					t.GetInstance<EventManager>(),
					t.GetInstance<UserSession>(),
					t.GetInstance<IOptions<AppConfig>>()));

				// Users
				config.For<ApplicationDbContext>().Use(ctx => new ApplicationDbContext(coreDbContextOptions));

				// Notifications
				config.For<NotificationsDbContext>().Use(t => new NotificationsDbContext(coreDbContextOptions, "ntf"));

				// Filer
				config.For<IFileManager>().Use<FileManager>();
				config.For<DataContext>().Use(t => new DataContext(coreDbContextOptions));
			});
		}

		public static void ConfigureDomainEvents(this IContainer container)
		{
			container.Configure(config =>
			{
				var di = new AppDependencyInjectionContainer(t => container.GetNestedContainer().GetInstance(t));
				config.For<EventManager>().Use(t => new EventManager(di)).Singleton();

				// Set unique lifecycle for all AppEventHandler<> classes
				config.SetLifecycleForImplementationsOfGenericType(
					typeof(AppEventHandler<>),
					new UniquePerRequestLifecycle(),
					AssembliesWithBootstrapper.Value);
			});
		}

		public static void ConfigureEmailSenders<TEmailSender, TSmsSender>(this IContainer container)
			where TEmailSender : IEmailSender
			where TSmsSender : ISmsSender
		{
			container.ConfigureEmailSenders(typeof(TEmailSender), typeof(TSmsSender));
		}

		public static void ConfigureEmailSenders(this IContainer container, Type emailSenderType, Type smsSenderType)
		{
			container.Configure(config =>
			{
				config.For<IEmailSender>().Use(t => (IEmailSender)container.GetInstance(emailSenderType));
				config.For<ISmsSender>().Use(t => (ISmsSender)container.GetInstance(smsSenderType));
			});
		}

		public static void ConfigureEmailTemplates(this IContainer container)
		{
			container.Configure(config =>
			{
				config.For<IViewRenderService>().Use<ViewRenderService>();
				config.For<EmailTemplateRegister>().Singleton();
				config.SetLifecycleForImplementationsOfInterface(typeof(IEmailTemplate<>), new UniquePerRequestLifecycle(), AssembliesWithBootstrapper.Value);
			});
		}

		public static void ConfigureIdentity(this IContainer container)
		{
			container.Configure(config =>
			{
				config.For<ILogger<SignInManager<ApplicationUser>>>().Use<NullLogger<SignInManager<ApplicationUser>>>();
				config.For<ILogger<UserManager<ApplicationUser>>>().Use<NullLogger<UserManager<ApplicationUser>>>();
				config.For<ILogger<RoleManager<ApplicationRole>>>().Use<NullLogger<RoleManager<ApplicationRole>>>();
			});

			var services = new ServiceCollection();

			services
				.AddIdentity<ApplicationUser, ApplicationRole>()
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

			container.Populate(services);
		}

		public static void ConfigureInfrastructure(this IContainer container)
		{
			container.Configure(config =>
			{
				config.For<MetadataBinder>().Use(t => GetMetadataBinder(t)).Singleton();
				config.For<FormRegister>().Singleton();
				config.For<MenuRegister>().Singleton();
				config.For<ActionRegister>().Singleton();

				config.For<EntitySecurityConfigurationRegister>().Singleton();
				config.For<IEntityRepository>().AlwaysUnique();
				config.For<ObjectSecurityConfigurationRegister>().Singleton();

				config.For<AppDependencyInjectionContainer>().Use(ctx => new AppDependencyInjectionContainer(ctx.GetInstance));
				config.For<UimfDependencyInjectionContainer>().Use(t => new UimfDependencyInjectionContainer(t.GetInstance));
			});
		}

		public static void ConfigureMediatr(this IContainer container)
		{
			var services = new ServiceCollection();

			// Register all other referenced assemblies.
			services.AddMediatR(AssembliesWithRequestHandlers.Value);

			container.Populate(services);

			container.Configure(config => { config.For(typeof(IRequestHandler<,>)).DecorateAllWith(typeof(SecurityDecorator<,>)); });
		}

		public static void ConfigureOptions(this IContainer container, AppConfig appConfig = null)
		{
			container.Configure(config =>
			{
				if (appConfig != null)
				{
					config.For<AppConfig>().Use(t => appConfig);
					config.For<IOptions<AppConfig>>().Use(t => new OptionsWrapper<AppConfig>(appConfig));
				}
				else
				{
					config.For<AppConfig>().Use(t => t.GetInstance<IOptions<AppConfig>>().Value);
				}
			});
		}

		public static void ConfigureRegisters(this IContainer container)
		{
			var registerTypes = AppDomain.CurrentDomain.GetAssemblies()
				.SelectMany(s => s.GetTypes())
				.Where(p => p.ImplementsGenericType(typeof(Register<>)) && p != typeof(Register<>))
				.ToList();

			foreach (var registerType in registerTypes)
			{
				var child = container.CreateChildContainer();
				child.Configure(childConfig =>
				{
					childConfig.For<AppDependencyInjectionContainer>()
						.Use(t => new AppDependencyInjectionContainer(c => child.GetInstance(c)));
				});
				
				var register = child
					// For some reason, if we don't set explicit dependency then the wrong
					// instance of `AppDependencyInjectionContainer` will be injected...
					// This happens only in some cases, but not others, which makes
					// it an absolute mystery. To avoid all this trouble we inject explicit
					// dependency using `With`. Strangely enough this only affects `Register<>`
					// classes...
					.With(child.GetInstance<AppDependencyInjectionContainer>())
					.GetInstance(registerType);

				var assembliesToRegister = AppDomain.CurrentDomain
					.GetAssemblies()
					.Where(a => !a.IsDynamic)
					.ToList();

				var registerAssemblyMethod = registerType.GetMethod(nameof(Register<int>.RegisterAssembly));

				foreach (var assembly in assembliesToRegister)
				{
					// ReSharper disable once PossibleNullReferenceException
					registerAssemblyMethod.Invoke(register, new object[] { assembly });
				}

				container.Configure(config =>
				{
					config.For(registerType)
						.Use(ctx => register)
						.Singleton();
				});
			}
		}

		public static void ConfigureUserRoleCheckers(this IContainer container)
		{
			var child = container.GetNestedContainer();
			child.Configure(config =>
			{
				config.For<CoreDbContext>().AlwaysUnique();
				config.For<IFileManager>().AlwaysUnique();
				config.For<ApplicationDbContext>().AlwaysUnique();
			});

			container.Configure(config =>
			{
				config.For<UserRoleCheckerRegister>()
					.Use(t => new UserRoleCheckerRegister(new AppDependencyInjectionContainer(x => child.GetInstance(x))))
					.Singleton();

				config.SetLifecycleForImplementationsOfInterface(typeof(IUserRoleChecker), new UniquePerRequestLifecycle(), AssembliesWithBootstrapper.Value);
			});
		}

		public static void RunAssemblyBootstrapers(this IContainer container)
		{
			foreach (var bootstrapper in container.GetAllInstances<IAssemblyBootstrapper>().OrderByDescending(t => t.Priority))
			{
				bootstrapper.Start(new AppDependencyInjectionContainer(container.GetInstance));
			}
		}

		private static Assembly[] GetAssembliesWithBootstrapper()
		{
			var mainAssemblies = new[]
			{
				typeof(Core.Bootstrap).Assembly,
				typeof(App.EventNotification.Bootstrap).Assembly,
				typeof(Filing.Bootstrap).Assembly,
				typeof(Help.Bootstrap).Assembly,
				typeof(Users.Bootstrap).Assembly,
				typeof(Infrastructure.Bootstrap).Assembly
			};

			// Load all referenced assemblies that belong to the solution.
			Assembly
				.GetEntryAssembly()
				.GetReferencedAssemblies()
				.Where(t => t.FullName.Contains("UimfApp"))
				.ForEach(t => Assembly.Load(t));

			return AppDomain.CurrentDomain
				.GetAssemblies()
				.Where(t => !mainAssemblies.Contains(t))
				.Where(assembly => assembly.GetTypes().Any(t => typeof(IAssemblyBootstrapper).IsAssignableFrom(t)))
				.Union(mainAssemblies)
				.Distinct()
				.ToArray();
		}

		/// <summary>
		/// Gets all referenced (directly and indirectly) assemblies which contain implementations
		/// of <see cref="IRequestHandler{TRequest,TResponse}"/>.
		/// </summary>
		/// <returns>List of matching assemblies.</returns>
		/// <remarks></remarks>
		private static Assembly[] GetAssembliesWithRequestHandlers()
		{
			var mainAssemblies = new[]
			{
				// Third-party assemblies with `IRequestHandler`s
				typeof(InvokeForm).Assembly,

				// App's assemblies with `IRequestHandler`s
				typeof(Core.Bootstrap).Assembly,
				typeof(App.EventNotification.Bootstrap).Assembly,
				typeof(Filing.Bootstrap).Assembly,
				typeof(Help.Bootstrap).Assembly,
				typeof(Users.Bootstrap).Assembly,
				typeof(Infrastructure.Bootstrap).Assembly
			};

			// Load all referenced assemblies that belong to the solution.
			Assembly
				.GetEntryAssembly()
				.GetReferencedAssemblies()
				.Where(t => t.FullName.Contains("UimfApp"))
				.ForEach(t => Assembly.Load(t));

			// Try find other assemblies that might have `IRequestHandler`s
			return AppDomain.CurrentDomain
				.GetAssemblies()
				.Where(t => !mainAssemblies.Contains(t))
				.Where(assembly => assembly.GetTypes().Any(t => t.ImplementsGenericType(typeof(IRequestHandler<,>))))
				.Union(mainAssemblies)
				.Distinct()
				.ToArray();
		}

		private static MetadataBinder GetMetadataBinder(IContext context)
		{
			var binder = new MetadataBinder(context.GetInstance<UimfDependencyInjectionContainer>());
			binder.RegisterAssembly(typeof(StringInputFieldBinding).GetAssembly());
			return binder;
		}

		private static void SetLifecycleForImplementationsOfGenericType(
			this Registry registry,
			Type genericType,
			UniquePerRequestLifecycle lifecycle,
			Assembly[] assembliesToScan)
		{
			assembliesToScan
				.Distinct()
				.SelectMany(t => t.ExportedTypes)
				.Where(t => t.ImplementsGenericType(genericType))
				.ToList()
				.ForEach(t => registry.For(t).LifecycleIs(lifecycle));
		}

		private static void SetLifecycleForImplementationsOfInterface(
			this Registry registry,
			Type genericType,
			UniquePerRequestLifecycle lifecycle,
			Assembly[] assembliesToScan)
		{
			assembliesToScan
				.Distinct()
				.SelectMany(t => t.ExportedTypes)
				.Where(genericType.IsAssignableFrom)
				.ToList()
				.ForEach(t => registry.For(t).LifecycleIs(lifecycle));
		}
	}
}