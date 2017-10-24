namespace UimfApp.Users.Commands
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;
	using CPermissions;
	using MediatR;
	using Microsoft.AspNetCore.Identity;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.Forms;
	using UimfApp.Infrastructure.Security;
	using UimfApp.Users.Security;
	using UiMetadataFramework.Basic.Output;
	using UiMetadataFramework.Core;
	using UiMetadataFramework.Core.Binding;

	[MyForm(Id = "delete-user", PostOnLoad = true)]
	public class DeleteUser : IMyAsyncForm<DeleteUser.Request, DeleteUser.Response>, ISecureHandler
	{
		private readonly UserManager<ApplicationUser> userManager;

		public DeleteUser(UserManager<ApplicationUser> userManager)
		{
			this.userManager = userManager;
		}

		public async Task<Response> Handle(Request message)
		{
			var user = this.userManager.Users.SingleOrDefault(t => t.Id == message.Id);

			if (user == null)
			{
				return new Response();
			}

			if (user.HasLoggedIn)
			{
				throw new BusinessException("Cannot delete user who has logged in the past.");
			}

			var result = await this.userManager.DeleteAsync(user);
			result.EnforceSuccess("Cannot delete user.");

			return new Response();
		}

		public UserAction GetPermission()
		{
			return UserActions.ManageUsers;
		}

		public static FormLink Button(int userId)
		{
			return new FormLink
			{
				Form = typeof(DeleteUser).GetFormId(),
				Label = "Delete",
				InputFieldValues = new Dictionary<string, object>
				{
					{ nameof(Request.Id), userId }
				}
			};
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