// ReSharper disable UnusedAutoPropertyAccessor.Local

namespace UimfApp.Core.Domain
{
	/// <summary>
	/// Represents user registered in the system.
	/// </summary>
	public class RegisteredUser
	{
		private RegisteredUser()
		{
			// This constructor is private, because we are not supposed to create new users
			// from this library. All users are created by *UimfApp.Users*. This assembly
			// can only read existing data.
		}

		public bool Active { get; private set; }

		public string Email { get; private set; }
		public int Id { get; private set; }
		public string Name { get; private set; }

		internal static RegisteredUser Create(int userId, string name)
		{
			return new RegisteredUser
			{
				Id = userId,
				Name = name
			};
		}
	}
}