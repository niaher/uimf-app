namespace UimfApp.Infrastructure.User
{
	/// <summary>
	/// Represents session state of an authenticated user.
	/// </summary>
	public class UserSession
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="UserSession"/> class.
		/// </summary>
		/// <param name="currentUserId"></param>
		/// <param name="impersonatorUserId"></param>
		public UserSession(int currentUserId, int? impersonatorUserId = null)
		{
			this.CurrentUserId = currentUserId;
			this.ImpersonatorUserId = impersonatorUserId;
		}

		/// <summary>
		/// Gets id of the current user (i.e. - either the logged-in user, or in 
		/// case of impersonation the user being impersonated).
		/// </summary>
		public int CurrentUserId { get; }

		/// <summary>
		/// Gets id of the user doing the impersonation.
		/// </summary>
		public int? ImpersonatorUserId { get; }

		/// <summary>
		/// Gets id of the actual current user, running the user session. In case the
		/// impersonation is active, then it will return <see cref="ImpersonatorUserId"/>,
		/// otherwise it will return <see cref="CurrentUserId"/>.
		/// </summary>
		public int RealCurrentUserId => this.ImpersonatorUserId ?? this.CurrentUserId;
	}
}
