namespace UimfApp.DataSeed.Seeders
{
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;
	using Bogus;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.Internal;
	using UimfApp.Core.Commands.WorkItems;
	using UimfApp.Core.DataAccess;
	using UimfApp.Core.Domain;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Domain;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users;
	using UiMetadataFramework.Basic.Input;

	public class Seeder
	{
		protected readonly DataSeedDiContainer Container;
		protected readonly Faker Faker = new Faker();
		protected readonly DatabaseEntityTracker Tracker;

		public Seeder(DataSeedDiContainer container, DatabaseEntityTracker tracker)
		{
			this.Container = container;
			this.Tracker = tracker;
		}

		public UserSession UserSession
		{
			get => this.Container.CurrentUserSession;
			set => this.Container.CurrentUserSession = value;
		}

		public async Task<WorkItemQuery> CreateWorkItem(string name)
		{
			var command = new CreateWorkItem.Request
			{
				Description = new TextareaValue
				{
					Value = this.Faker.Lorem.Sentence()
				}
			};

			var response = await this.RunMediatorCommand(command);
			var workItem = this.GetContext().WorkItems.SingleOrException(t => t.Id == response.Id);

			this.Tracker.RegisterEntity(name, workItem);
			return new WorkItemQuery(name, this.Container, this.Tracker);
		}

		public async Task<UserQuery> EnsureUser(string name, params SystemRole[] roles)
		{
			var user = await this.EnsureUser(roles);
			this.Tracker.RegisterEntity(name, user, t => t.Id);
			return new UserQuery(name, this.Container, this.Tracker);
		}

		public T GetEntityByName<T>(string name)
			where T : DomainEntityWithKeyInt32
		{
			var id = this.Tracker.GetDomainEntityId<T>(name);
			return this.GetContext().Set<T>().SingleOrDefault(t => t.Id == id);
		}

		public void RegisterEntityId<TEntity, TEntityId>(string entityName, TEntityId id)
			where TEntity : DomainEntityWithKeyInt32
		{
			this.Tracker.RegisterEntity<TEntity, TEntityId>(entityName, id);
		}

		public Task<TResponse> RunMediatorCommand<TResponse>(IRequest<TResponse> request, CancellationToken cancellationToken = default(CancellationToken))
		{
			return this.Container.Container.GetInstance<IMediator>().Send(request, cancellationToken);
		}

		public UserQuery User(string name)
		{
			return new UserQuery(name, this.Container, this.Tracker);
		}

		protected CoreDbContext GetContext()
		{
			return this.Container.Container.GetInstance<CoreDbContext>();
		}

		private async Task<ApplicationUser> EnsureUser(params SystemRole[] roles)
		{
			var dynamicRoles = roles.Where(t => t.IsDynamicallyAssigned).ToList();

			if (dynamicRoles.Any())
			{
				throw new BusinessException(
					$"Cannot assign dynamic roles {dynamicRoles.Select(t => $"'{t.Name}'").Join()} to a user.");
			}

			var userManager = this.Container.Container.GetInstance<UserManager<ApplicationUser>>();

			var person = new Faker().Person;
			var email = this.Faker.Internet.ExampleEmail(person.FirstName, person.LastName);
			var result = await userManager.CreateAsync(new ApplicationUser
			{
				UserName = this.Faker.Internet.UserName(person.FirstName, person.LastName),
				Email = email
			}, "Password1");

			if (!result.Succeeded)
			{
				var errors = result.Errors.Select(t => $"{t.Code}: {t.Description}").Join("\n");
				throw new BusinessException(errors);
			}

			var user = await userManager.Users.SingleAsync(t => t.Email == email);

			foreach (var role in roles)
			{
				await userManager.AddToRoleAsync(user, role.Name);
			}

			var coreDbContext = this.GetContext();
			if (this.Container.UsingInMemoryDatabase)
			{
				coreDbContext.Users.Add(RegisteredUser.Create(user.Id, user.Email));
			}

			await coreDbContext.SaveChangesAsync();

			return user;
		}
	}

	public class WorkItemQuery : Query<WorkItem>
	{
		public WorkItemQuery(string entityName, DataSeedDiContainer container, DatabaseEntityTracker tracker) : base(entityName, container, tracker)
		{
		}
	}
}