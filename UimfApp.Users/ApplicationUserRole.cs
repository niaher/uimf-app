namespace UimfApp.Users
{
	using Microsoft.AspNetCore.Identity;

	public class ApplicationUserRole : IdentityUserRole<int>
	{
		// ReSharper disable once UnusedAutoPropertyAccessor.Local
		public virtual ApplicationRole Role { get; private set; }
	}
}