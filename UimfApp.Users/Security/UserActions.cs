namespace UimfApp.Users.Security
{
	using UimfApp.Infrastructure.Security;

	public class UserActions : ActionContainer
	{
		public static readonly SystemAction Login = new SystemAction(nameof(Login), UserManagementRoles.UnauthenticatedUser);
		public static readonly SystemAction Logout = new SystemAction(nameof(Logout), UserManagementRoles.AuthenticatedUser);
		public static readonly SystemAction ManageUsers = new SystemAction(nameof(ManageUsers), UserManagementRoles.UserAdmin);
		public static readonly SystemAction ManageMyAccount = new SystemAction(nameof(ManageMyAccount), UserManagementRoles.AuthenticatedUser);
	}
}
