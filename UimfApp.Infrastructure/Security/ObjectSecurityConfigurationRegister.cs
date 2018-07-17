namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Collections.Concurrent;
	using System.Linq;
	using System.Reflection;
	using ApplicationException = UimfApp.Infrastructure.ApplicationException;

	/// <summary>
	/// Represents a collection of <see cref="ObjectSecurityConfiguration"/> objects. Provides simple
	/// API to scan assemblies for classes that are decorated with <see cref="SecureAttribute"/>, and
	/// registering <see cref="ObjectSecurityConfiguration"/> for each.
	/// </summary>
	public class ObjectSecurityConfigurationRegister
	{
		private readonly ConcurrentDictionary<Type, ObjectSecurityConfiguration>
			configurations = new ConcurrentDictionary<Type, ObjectSecurityConfiguration>();

		/// <summary>
		/// Gets <see cref="ObjectSecurityConfiguration"/> for the specified type.
		/// </summary>
		/// <typeparam name="T">Type for which to retrieve <see cref="ObjectSecurityConfiguration"/>.</typeparam>
		/// <returns>Instance of <see cref="ObjectSecurityConfiguration"/> or null if object of the
		/// specified type <typeparamref name="T"/> was not decorated with the <see cref="SecureAttribute"/>.
		/// </returns>
		public ObjectSecurityConfiguration GetSecureForm<T>()
		{
			return this.GetSecureForm(typeof(T));
		}

		/// <summary>
		/// Gets <see cref="ObjectSecurityConfiguration"/> for the specified type.
		/// </summary>
		/// <param name="type">Type for which to retrieve <see cref="ObjectSecurityConfiguration"/>.</param>
		/// <returns>Instance of <see cref="ObjectSecurityConfiguration"/> or null if object of the
		/// specified type <paramref name="type"/> was not decorated with the <see cref="SecureAttribute"/>.
		/// </returns>
		public ObjectSecurityConfiguration GetSecureForm(Type type)
		{
			return this.configurations.ContainsKey(type)
				? this.configurations[type]
				: null;
		}

		/// <summary>
		/// Scans assembly for all objects which are decorated by <see cref="SecureAttribute"/> and
		/// creates <see cref="ObjectSecurityConfiguration"/> for each.
		/// </summary>
		/// <param name="assembly"></param>
		public void RegisterAssembly(Assembly assembly)
		{
			var forms = assembly.ExportedTypes
				.Select(t => new
				{
					Attribute = t.GetCustomAttribute<SecureAttribute>(),
					Handler = t
				})
				.Where(t => t.Attribute != null)
				.Select(t => new ObjectSecurityConfiguration(t.Handler, t.Attribute))
				.ToList();

			foreach (var secureForm in forms)
			{
				if (this.configurations.ContainsKey(secureForm.ObjectType))
				{
					var existing = this.configurations[secureForm.ObjectType];

					if (existing.Permission == secureForm.Permission &&
						existing.ContextType == secureForm.ContextType)
					{
						// If the existing configuration is identical,
						// don't add it again.
						continue;
					}

					throw new ApplicationException(
						$"Invalid attempt to register '{secureForm.ObjectType.FullName}' with multiple " +
						$"security configurations.");
				}
				else
				{
					this.configurations.TryAdd(secureForm.ObjectType, secureForm);
				}
			}
		}
	}
}
