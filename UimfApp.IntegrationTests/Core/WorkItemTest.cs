namespace UimfApp.IntegrationTests.Core
{
	using System.Threading.Tasks;
	using FluentAssertions;
	using UimfApp.DataSeed.Seeders;
	using UimfApp.IntegrationTests.Framework;
	using Xunit;

	public class WorkItemTest : IntegrationTest
	{
		public WorkItemTest(IntegrationTestFixture fixture) : base(fixture)
		{
		}

		[Fact]
		public async Task WorkItemCanBeCreatedByAnAuthenticatedUser()
		{
			await this.Seeder.EnsureUser("user");
			var task = await this.Seeder.LoginAs("user").CreateWorkItem("task");
			task.GetEntity().Should().NotBeNull();
		}
	}
}