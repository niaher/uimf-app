namespace UimfApp.Users.Commands
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Infrastructure.User;

	[MyForm(Id = "account", Label = "My account", PostOnLoad = true, Menu = UserMenus.Account)]
	[Secure(typeof(UserActions), nameof(UserActions.ManageMyAccount))]
	public class MyAccount : MyAsyncForm<MyAccount.Request, MyAccount.Response>
	{
		private readonly UserContext userContext;
		private readonly UserManager<ApplicationUser> userManager;

		public MyAccount(UserManager<ApplicationUser> userManager, UserContext userContext)
		{
			this.userManager = userManager;
			this.userContext = userContext;
		}

		public override async Task<Response> Handle(Request message, CancellationToken cancellationToken)
		{
			var user = await this.userManager.Users.SingleOrExceptionAsync(t => t.UserName == this.userContext.User.UserName);
			
			return new Response
			{
				Username = user.UserName,
				EmailConfirmed = user.EmailConfirmed,
				Email = user.Email,
				Buttons = new ActionList(GetActions().ToArray())
			};
		}

		private static IEnumerable<FormLink> GetActions()
		{
			yield return ChangePassword.Button();
			yield return ChangeEmail.Button();
		}

		public static FormLink Button()
		{
			return new FormLink
			{
				Form = typeof(MyAccount).GetFormId(),
				Label = "My account"
			};
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
			[OutputField(OrderIndex = 20)]
			public string Email { get; set; }

			[OutputField(OrderIndex = 10)]
			public string Username { get; set; }

			[OutputField(OrderIndex = 30, Label = "Email confirmed")]
			public bool EmailConfirmed { get; set; }

			[OutputField(OrderIndex = 0)]
			public ActionList Buttons { get; set; }
		}

		public class Request : IRequest<Response>
		{
		}
	}
}
