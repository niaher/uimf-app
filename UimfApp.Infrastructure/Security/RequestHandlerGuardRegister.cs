namespace UimfApp.Infrastructure.Security
{
	using System;
	using System.Collections.Concurrent;
	using System.Linq;
	using System.Reflection;
	using MediatR;

	/// <summary>
	/// Represents a collection of <see cref="RequestHandlerGuard"/> objects. With <see cref="RegisterAssembly"/>
	/// method it is possible to scan an assembly for implementations of <see cref="IRequestHandler{TRequest,TResponse}"/>
	/// and <see cref="IAsyncRequestHandler{TRequest,TResponse}"/>, and then automatically create
	/// <see cref="RequestHandlerGuard"/> for each of them.
	/// </summary>
	public class RequestHandlerGuardRegister
	{
		private readonly EntitySecurityConfigurationRegister entitySecurityConfigurationRegister;

		private readonly ConcurrentDictionary<Type, RequestHandlerGuard> securityContexts =
			new ConcurrentDictionary<Type, RequestHandlerGuard>();

		public RequestHandlerGuardRegister(EntitySecurityConfigurationRegister entitySecurityConfigurationRegister)
		{
			this.entitySecurityConfigurationRegister = entitySecurityConfigurationRegister;
		}

		/// <summary>
		/// Gets <see cref="RequestHandlerGuard"/> for the given request handler type.
		/// </summary>
		/// <param name="type">Type implementing <see cref="IRequestHandler{TRequest,TResponse}"/> or
		/// <see cref="IAsyncRequestHandler{TRequest,TResponse}"/>.</param>
		/// <returns></returns>
		public RequestHandlerGuard Get(Type type)
		{
			this.securityContexts.TryGetValue(type, out var value);
			return value;
		}

		/// <summary>
		/// Scans given assembly for implementations of <see cref="IRequestHandler{TRequest,TResponse}"/>
		/// and <see cref="IAsyncRequestHandler{TRequest,TResponse}"/>, and creates
		/// <see cref="RequestHandlerGuard"/> for each of them.
		/// </summary>
		/// <param name="assembly"></param>
		public void RegisterAssembly(Assembly assembly)
		{
			assembly.ExportedTypes
				.Where(t => t.IsClass && !t.IsAbstract)
				.Where(t => t.ImplementsAtLeastOneInterface(
					typeof(IRequestHandler<,>), 
					typeof(IAsyncRequestHandler<,>)))
				.ToList()
				.ForEach(t =>
				{
					var context = new RequestHandlerGuard(t, this.entitySecurityConfigurationRegister);
					this.securityContexts.TryAdd(t, context);
				});
		}
	}
}
