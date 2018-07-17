namespace UimfApp.Infrastructure
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;
	using System.Reflection;

	public static class ReflectionExtensions
	{
		public static IEnumerable<Type> GetBaseClasses(this Type type)
		{
			var current = type;
			while (current.BaseType != typeof(object) && current.BaseType != null)
			{
				yield return current.BaseType;
				current = current.BaseType;
			}
		}

		/// <summary>
		/// Checks whether this class inherits another class.
		/// </summary>
		/// <param name="type">Type which might be inheriting from the other class.</param>
		/// <param name="baseClass">Base class which should be implemented by <paramref name="type"/>.</param>
		/// <returns>Type implementing the <paramref name="baseClass"/>.</returns>
		public static Type GetBaseClassOfType(this Type type, Type baseClass)
		{
			if (type == baseClass)
			{
				return baseClass;
			}

			if (type.BaseType == null)
			{
				return null;
			}

			if (baseClass.IsGenericType)
			{
				// T1 : T2<int>
				if (type.BaseType.IsConstructedGenericType)
				{
					var genericType = baseClass.IsConstructedGenericType
						? type.BaseType
						: type.BaseType.GetGenericTypeDefinition();

					if (genericType == baseClass)
					{
						return type.BaseType.ContainsGenericParameters
							? type.BaseType.GetGenericTypeDefinition()
							: type.BaseType;
					}
				}
			}

			// T1 : T2
			return type.BaseType.GetBaseClassOfType(baseClass);
		}

		public static string GetEmbeddedResourceText(this Assembly assembly, string embeddedResourceName)
		{
			using (var stream = assembly.GetManifestResourceStream(embeddedResourceName))
			{
				if (stream == null)
				{
					var message = $"Embedded resource '{embeddedResourceName}' cannot be found in assembly '{assembly.FullName}'.";

					throw new ArgumentException(message);
				}

				using (var ms = new StreamReader(stream))
				{
					return ms.ReadToEnd();
				}
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

		/// <summary>
		/// Checks whether this class inherits another class.
		/// </summary>
		/// <param name="type">Type which might be inheriting from the other class.</param>
		/// <param name="baseClass">Base class which should be implemented by <paramref name="type"/>.</param>
		/// <returns>True or false.</returns>
		public static bool ImplementsClass(this Type type, Type baseClass)
		{
			return type.GetBaseClassOfType(baseClass) != null;
		}

		/// <summary>
		/// Checks wheather the given type implements a generic type. The check is done
		/// on the immediate base class and all subsequent/nested base classes.
		/// </summary>
		/// <param name="me">Type which potentially implements the generic class.</param>
		/// <param name="genericType">Generic type which should be implemented.</param>
		/// <returns>True or false.</returns>
		public static bool ImplementsGenericType(this Type me, Type genericType)
		{
			if (!genericType.IsGenericType)
			{
				throw new ArgumentException("Supplied argument is not a generic type", nameof(genericType));
			}

			return me.GetBaseClasses().Any(b => b.IsConstructedGenericType && b.GetGenericTypeDefinition() == genericType);
		}
	}
}
