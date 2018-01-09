namespace UimfApp.Core
{
	using System;
	using System.Linq;
	using System.Linq.Expressions;
	using System.Threading.Tasks;
	using Microsoft.EntityFrameworkCore;
	using UimfApp.Infrastructure;

	internal static class Extensions
	{
		public static T FindOrException<T>(this DbSet<T> dbSet, object key) where T : class
		{
			var entity = dbSet.Find(key);

			if (entity == null)
			{
				throw new BusinessException("Item not found");
			}

			return entity;
		}

		public static async Task<T> FindOrExceptionAsync<T>(this DbSet<T> dbSet, object key) where T : class
		{
			var entity = await dbSet.FindAsync(key);

			if (entity == null)
			{
				throw new BusinessException("Item not found");
			}

			return entity;
		}

		public static async Task<T> SingleOrExceptionAsync<T>(this IQueryable<T> queryable, Expression<Func<T, bool>> where)
		{
			var item = await queryable.SingleOrDefaultAsync(where);
			if (item == null)
			{
				throw new BusinessException("Item not found.");
			}

			return item;
		}
	}
}
