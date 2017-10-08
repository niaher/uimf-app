namespace UimfApp.Users
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.Design;

	public class DesignTimeApplicationDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
	{
		public ApplicationDbContext CreateDbContext(string[] args)
		{
			const string ConnectionString = "Server=(localdb)\\mssqllocaldb;Database=UimfApp;Trusted_Connection=True;MultipleActiveResultSets=true";
			var dbContextOptions = new DbContextOptionsBuilder().UseSqlServer(ConnectionString).Options;
			return new ApplicationDbContext(dbContextOptions);
		}
	}
}