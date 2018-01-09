namespace UimfApp.Infrastructure.User
{
	public class UserContextData
	{
		public UserContextData(string userName, int userId)
		{
			this.UserName = userName;
			this.UserId = userId;
		}

		public int UserId { get; set; }

		public string UserName { get; }
	}
}
