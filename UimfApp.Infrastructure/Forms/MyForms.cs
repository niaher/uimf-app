namespace UimfApp.Infrastructure.Forms
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using MediatR;
	using UimfApp.Infrastructure.Forms.Menu;
	using UimfApp.Infrastructure.Security;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.MediatR;

	/// <summary>
	/// Gets all forms available to the current user.
	/// </summary>
	public class MyForms : IRequestHandler<MyForms.Request, MyForms.Response>
	{
		private readonly DependencyInjectionContainer container;
		private readonly FormRegister formRegister;
		private readonly MenuRegister menuRegister;
		private readonly SystemPermissionManager permissionManager;
		private readonly UserContext userContext;

		public MyForms(
			DependencyInjectionContainer container,
			UserContext userContext,
			FormRegister formRegister,
			MenuRegister menuRegister,
			SystemPermissionManager permissionManager)
		{
			this.container = container;
			this.userContext = userContext;
			this.formRegister = formRegister;
			this.menuRegister = menuRegister;
			this.permissionManager = permissionManager;
		}

		public Response Handle(Request message)
		{
			// Get forms implementing ISecureHandler (non context based).
			var secureForms = this.formRegister.RegisteredForms
				.Where(t => t.FormType.GetTypeInfo().GetInterfaces().Any(i => i == typeof(ISecureHandler)))
				.ToList();

			var list = new List<FormMetadata>();

			foreach (var metadata in secureForms)
			{
				var formInstance = this.container.GetInstance(metadata.FormType);
				var permission = metadata.FormType.GetTypeInfo().GetMethod(nameof(ISecureHandler.GetPermission)).Invoke(formInstance, null);

				var canDo = this.permissionManager.CanDo((SystemAction)permission, this.userContext);

				if (canDo)
				{
					list.Add(metadata.Metadata);
				}
			}

			// Get forms without any security , i.e. - available to all users.
			var publicForms = this.formRegister.RegisteredForms
				.Where(t =>
				{
					return message.IncludeWithContextBasedSecurity
						? t.FormType.GetTypeInfo().GetInterfaces().All(i => i != typeof(ISecureHandler))
						: t.FormType.GetTypeInfo().GetInterfaces().All(i => i != typeof(ISecureHandler) &&
							!(i.GetTypeInfo().IsGenericType && i.GetGenericTypeDefinition() == typeof(ISecureHandler<,,>)));
				})
				.OrderBy(a => a.FormType.FullName)
				.ToList();

			list.AddRange(publicForms.Select(t => t.Metadata));

			return new Response
			{
				Forms = list,
				Menus = this.menuRegister.RegisteredMenus
			};
		}

		public class Request : IRequest<Response>
		{
			/// <summary>
			/// Indicates whether to retrieve forms which implement <see cref="ISecureHandler{TContext,TRequest}"/>.
			/// </summary>
			public bool IncludeWithContextBasedSecurity { get; set; }
		}

		public class Response
		{
			public IList<FormMetadata> Forms { get; set; }
			public IList<MenuMetadata> Menus { get; set; }
		}
	}
}