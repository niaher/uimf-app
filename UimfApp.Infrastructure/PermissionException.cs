namespace UimfApp.Infrastructure
{
	using CPermissions;
	using UimfApp.Infrastructure.User;

	public class PermissionException : PermissionException<UserContext>
	{
		public PermissionException(string action, UserContext userContext) : base(new UserAction(action), userContext)
		{
		}
	}
}
