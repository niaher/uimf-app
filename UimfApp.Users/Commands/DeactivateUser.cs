namespace UimfApp.Users.Commands
{
	using System.Collections.Generic;
	using System.Linq;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Forms.ClientFunctions;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Security;

	[MyForm(Id = "deactivate-user", PostOnLoad = true)]
	[Secure(typeof(UserActions), nameof(UserActions.ManageUsers))]
	public class DeactivateUser : MyForm<DeactivateUser.Request, DeactivateUser.Response>
	{
		private readonly UserManager<ApplicationUser> userManager;
		private readonly ApplicationDbContext applicationDbContext;

		public DeactivateUser(UserManager<ApplicationUser> userManager, ApplicationDbContext applicationDbContext)
		{
			this.userManager = userManager;
			this.applicationDbContext = applicationDbContext;
		}

		protected override Response Handle(Request message)
		{
			var user = this.userManager.Users.SingleOrDefault(t => t.Id == message.Id);

			if (user == null)
			{
				return new Response();
			}

			if (!user.Active)
			{
				throw new BusinessException("The user is already deactivated");
			}

			user.Active = false;
			this.applicationDbContext.SaveChanges();

			return new Response()
				.WithGrowlMessage($"User {user.UserName} was deactivated.", GrowlNotificationStyle.Success);
		}

		public static FormLink Button(int userId, string label = null)
		{
			return new FormLink
			{
				Form = typeof(DeactivateUser).GetFormId(),
				Label = label ?? "Deactivate",
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.Id), userId }
				}
			}.WithAction(FormLinkActions.Run);
		}

		public class Response : FormResponse<MyFormResponseMetadata>
		{
		}

		public class Request : IRequest<Response>
		{
			[InputField(Hidden = true)]
			public int Id { get; set; }
		}
	}
}
