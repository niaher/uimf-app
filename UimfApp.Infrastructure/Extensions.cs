namespace UimfApp.Infrastructure
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Linq.Expressions;
	using System.Reflection;
	using UimfApp.Infrastructure.Forms.Menu;
	using UimfApp.Infrastructure.Forms.Outputs;
	using UimfApp.Infrastructure.Forms.Typeahead;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;
	using UiMetadataFramework.Basic.Input.Typeahead;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Basic.Response;
	using UiMetadataFramework.Core.Binding;
	using UiMetadataFramework.MediatR;

	public static class Extensions
	{
		public static ActionList AsActionList<T>(this IEnumerable<T> links)
			where T : FormLink
		{
			// ReSharper disable once CoVariantArrayConversion
			return new ActionList(links.ToArray());
		}

		public static MultiSelect<T> AsMultiSelect<T>(this IEnumerable<T> items)
		{
			return new MultiSelect<T>(items.ToArray());
		}

		public static ObjectList<T> AsObjectList<T>(this IEnumerable<T> items, MetadataBinder binder)
		{
			return new ObjectList<T>(items, binder);
		}

		public static RedirectResponse AsRedirectResponse(this FormLink formLink)
		{
			return new RedirectResponse
			{
				Form = formLink.Form,
				InputFieldValues = formLink.InputFieldValues
			};
		}

		public static Tab AsTab(this FormLink formLink, string style = null)
		{
			return new Tab
			{
				Form = formLink.Form,
				InputFieldValues = formLink.InputFieldValues,
				Label = formLink.Label,
				Style = style
			};
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

		public static void EnforceMaxLength(this string value, int maxLength)
		{
			if (maxLength < 0)
			{
				throw new ArgumentException("Max length cannot be less than zero.", nameof(maxLength));
			}

			if (value?.Length > maxLength)
			{
				throw new BusinessException($"Maximum allowed length exceeded. At most {maxLength} characters is allowed.");
			}
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

		/// <summary>
		/// Checks whether type implements at least one of the specified interfaces.
		/// </summary>
		/// <param name="type">Type to check.</param>
		/// <param name="interfaces">Interfaces, at least one of which should be implemented by <paramref name="type"/>.</param>
		/// <returns>True or false.</returns>
		public static bool ImplementsAtLeastOneInterface(this Type type, params Type[] interfaces)
		{
			var genericInterfaces = interfaces.Where(t => t.IsGenericType).ToList();
			var nonGenericInterfaces = interfaces.Where(t => !t.IsGenericType).ToList();

			return type.GetInterfaces().Any(i =>
			{
				if (!i.IsGenericType)
				{
					return nonGenericInterfaces.Contains(i);
				}

				var genericTypeDefinition = i.GetGenericTypeDefinition();
				return genericInterfaces.Contains(genericTypeDefinition);
			});
		}

		public static bool IsImageFilename(this string filename)
		{
			return new[] { "png", "jpg", "gif", "jpeg", "bmp" }.Any(t => filename.EndsWith(t, StringComparison.OrdinalIgnoreCase));
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

			var securityMapRegister = dependencyInjectionContainer.GetInstance<EntitySecurityConfigurationRegister>();
			securityMapRegister.RegisterAssembly(assembly);

			var handlerSecurityRegister = dependencyInjectionContainer.GetInstance<RequestHandlerGuardRegister>();
			handlerSecurityRegister.RegisterAssembly(assembly);

			var userRoleCheckerRegister = dependencyInjectionContainer.GetInstance<UserRoleCheckerRegister>();
			userRoleCheckerRegister.RegisterAssembly(assembly);
		}

		/// <summary>
		/// Instructs client that when <see cref="FormLink"/> is clicked, the client should run the action immediately 
		/// and then redirect to another form.
		/// </summary>
		public static FormLinkWithRedirect RunAndRedirectTo(this FormLink self, FormLink redirectTo)
		{
			return new FormLinkWithRedirect(self, redirectTo);
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

		public static PaginatedData<TResult> Transform<TSource, TResult>(this PaginatedData<TSource> paginatedData,
			Func<TSource, TResult> transform)
		{
			return new PaginatedData<TResult>
			{
				Results = paginatedData.Results.Select(transform).ToList(),
				TotalCount = paginatedData.TotalCount
			};
		}

		public static FormLink WithAction(this FormLink formLink, string action)
		{
			return new FormLink
			{
				Label = formLink.Label,
				Form = formLink.Form,
				InputFieldValues = formLink.InputFieldValues,
				Action = action
			};
		}
	}
}