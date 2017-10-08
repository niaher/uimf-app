namespace UimfApp.Infrastructure
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Linq.Expressions;
	using System.Reflection;
	using UimfApp.Infrastructure.Forms.Menu;
	using UimfApp.Infrastructure.Forms.Typeahead;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	public static class Extensions
	{
		public static ActionList AsActionList(this IEnumerable<FormLink> links)
		{
			return new ActionList(links.ToArray());
		}

		public static MultiSelect<T> AsMultiSelect<T>(this IEnumerable<T> items)
		{
			return new MultiSelect<T>(items.ToArray());
		}

		public static TypeaheadResponse<T> AsTypeaheadResponse<TItem, T>(
			this IList<TItem> queryable,
			Func<TItem, T> value,
			Func<TItem, string> label)
		{
			return new TypeaheadResponse<T>
			{
				Items = queryable.Select(t => new TypeaheadItem<T>
				{
					Label = label(t),
					Value = value(t)
				}),
				TotalItemCount = queryable.Count
			};
		}

		public static TypeaheadResponse<TKey> GetForTypeahead<TItem, TKey>(
			this IQueryable<TItem> queryable,
			TypeaheadRequest<TKey> request,
			Expression<Func<TItem, TypeaheadItem<TKey>>> select,
			Expression<Func<TItem, bool>> getById,
			Expression<Func<TItem, bool>> getByQuery)
		{
			if (request.GetByIds)
			{
				var items = queryable.Where(getById).Select(select).ToList();
				return new TypeaheadResponse<TKey>
				{
					Items = items,
					TotalItemCount = items.Count
				};
			}
			else
			{
				var items = queryable.Where(getByQuery).Select(select);

				return new TypeaheadResponse<TKey>
				{
					Items = items.Take(TypeaheadRequest<int>.ItemsPerRequest),
					TotalItemCount = items.Count()
				};
			}
		}

		public static IEnumerable<Type> GetInterfaces(this Type type, Type toFind)
		{
			if (toFind.GetTypeInfo().IsGenericType)
			{
				return type.GetTypeInfo()
					.GetInterfaces()
					.Where(t => t.IsConstructedGenericType && t.GetGenericTypeDefinition() == toFind);
			}

			return type.GetTypeInfo()
				.GetInterfaces()
				.Where(t => t == toFind);
		}

		public static void RegisterUiMetadata(this DependencyInjectionContainer dependencyInjectionContainer, Assembly assembly)
		{
			var actionRegister = dependencyInjectionContainer.GetInstance<ActionRegister>();
			actionRegister.RegisterAssembly(assembly);

			var metadataBinder = dependencyInjectionContainer.GetInstance<MetadataBinder>();
			metadataBinder.RegisterAssembly(assembly);

			var formRegistry = dependencyInjectionContainer.GetInstance<FormRegister>();
			formRegistry.RegisterAssembly(assembly);

			var menuRegister = dependencyInjectionContainer.GetInstance<MenuRegister>();
			menuRegister.RegisterAssembly(assembly);
		}

		public static T SingleOrException<T>(this IQueryable<T> queryable, Expression<Func<T, bool>> where)
		{
			var item = queryable.SingleOrDefault(where);
			if (item == null)
			{
				throw new BusinessException("Item not found.");
			}

			return item;
		}
	}
}