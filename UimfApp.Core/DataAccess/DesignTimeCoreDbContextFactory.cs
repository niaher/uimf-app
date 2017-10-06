namespace UimfApp.Core.DataAccess
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.Design;

	public class DesignTimeCoreDbContextFactory : IDesignTimeDbContextFactory<CoreDbContext>
	{
		public CoreDbContext CreateDbContext(string[] args)
		{
			const string ConnectionString = "Server=(localdb)\\mssqllocaldb;Database=uimfapp;Trusted_Connection=True;MultipleActiveResultSets=true";
			var dbContextOptions = new DbContextOptionsBuilder().UseSqlServer(ConnectionString).Options;
			return new CoreDbContext(dbContextOptions);
		}
	}
}