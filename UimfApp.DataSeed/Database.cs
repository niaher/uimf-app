namespace UimfApp.DataSeed
{
	using System;
	using System.Data.Common;
	using System.Threading.Tasks;
	using Respawn;
	using ApplicationException = System.ApplicationException;

	public static class Database
	{
		public static void EnforceIsLocalConnectionString(this string connectionString)
		{
			bool isLocal =
				connectionString.Contains("\\SQLEXPRESS", StringComparison.OrdinalIgnoreCase) ||
				connectionString.Contains("Server=.\\", StringComparison.OrdinalIgnoreCase) ||
				connectionString.Contains("Server=.;", StringComparison.OrdinalIgnoreCase) ||
				connectionString.Contains("Server=localhost", StringComparison.OrdinalIgnoreCase) ||
				connectionString.Contains("Server=(localdb)", StringComparison.OrdinalIgnoreCase);

			if (!isLocal)
			{
				throw new ApplicationException($"Connection string is not for a local database. The connection string is '{connectionString}'.");
			}
		}

		/// <summary>
		/// Deletes *all* data from the database. Use with caution!
		/// </summary>
		/// <param name="connection">Connection to the database which should be truncated.</param>
		public static async Task TruncateDatabase(DbConnection connection)
		{
			connection.ConnectionString.EnforceIsLocalConnectionString();

			var checkpoint = new Checkpoint
			{
				DbAdapter = DbAdapter.SqlServer
			};

			await checkpoint.Reset(connection);
		}
	}
}
