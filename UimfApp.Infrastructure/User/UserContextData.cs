namespace UimfApp.Infrastructure.User
{
	using Newtonsoft.Json;

	public class UserContextData
	{
		[JsonConstructor]
		public UserContextData(
			[JsonProperty(nameof(UserName))] string userName,
			[JsonProperty(nameof(UserId))] int userId)
		{
			this.UserName = userName;
			this.UserId = userId;
		}

		public int UserId { get; }

		public string UserName { get; }
	}
}