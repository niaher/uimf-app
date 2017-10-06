namespace UimfApp.Infrastructure
{
	using System.Collections.Generic;

	public class UserContext
	{
		public UserContext()
		{
		}

		public UserContext(string userId)
		{
			this.UserId = userId;
		}

		public IEnumerable<string> Roles { get; set; } = new List<string>();

		public string UserId { get; set; }
	}
}