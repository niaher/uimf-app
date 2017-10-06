namespace UimfApp.Infrastructure
{
	using CPermissions;

	public class PermissionException : PermissionException<UserContext>
	{
		public PermissionException(string action, string userId) : base(new UserAction(action), new UserContext(userId))
		{
		}
	}
}