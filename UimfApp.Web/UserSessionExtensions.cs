namespace UimfApp.Web
{
	using System.Linq;
	using Microsoft.AspNetCore.Http;

	public static class UserSessionExtensions
	{
		public static UserSession GetCurrentUserSession(this ISession session)
		{
			if (session.IsAvailable)
			{
				if (session.Keys.Contains("UserId"))
				{
					var userId = session.GetInt32("UserId");
					return new UserSession
					{
						UserId = userId
					};
				}

				return null;
			}

			return null;
		}

		public static void SetCurrentUserSession(this ISession session, int userId)
		{
			session.SetInt32("UserId", userId);
		}
	}
}
