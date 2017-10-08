namespace UimfApp.Infrastructure
{
	using System.Collections.Generic;

	public class UserContext
	{
		public UserContext(string userName, params string[] roles)
		{
			this.UserName = userName;
			this.Roles = roles;
		}

		public IEnumerable<string> Roles { get; }

		public string UserName { get; }

		public bool IsAuthenticated => !string.IsNullOrWhiteSpace(this.UserName);
	}
}