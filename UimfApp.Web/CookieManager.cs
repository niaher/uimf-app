namespace UimfApp.Web
{
	using System;
	using Microsoft.AspNetCore.DataProtection;
	using Microsoft.AspNetCore.Http;
	using Microsoft.AspNetCore.Identity;
	using Newtonsoft.Json;
	using UimfApp.Infrastructure.User;
	using UimfApp.Users;

	public class CookieManager
	{
		private const string AppCookieName = "app-data";
		private const string UserCookieName = "user-data";
		private readonly IDataProtector protector;
		private readonly SignInManager<ApplicationUser> signInManager;

		public CookieManager(SignInManager<ApplicationUser> signInManager, IDataProtectionProvider protectionProvider)
		{
			this.signInManager = signInManager;
			this.protector = protectionProvider.CreateProtector("app-cookie");
		}

		public static void DeleteUserCookie(HttpResponse response)
		{
			response.Cookies.Delete(AppCookieName);
		}

		public UserContextData GetUserContextData()
		{
			this.signInManager.Context.Request.Cookies.TryGetValue(AppCookieName, out string cookieValue);

			if (cookieValue != null)
			{
				try
				{
					var json = this.protector.Unprotect(cookieValue);
					var value = JsonConvert.DeserializeObject<UserContextData>(json);

					return value.UserName != this.signInManager.Context.User.Identity.Name
						? null
						: value;
				}
				catch (Exception)
				{
					// Deserialization failed due to a corrupt cookie. Simply return null.
					return null;
				}
			}

			return null;
		}

		public Infrastructure.User.UserSession GetUserSession()
		{
			this.signInManager.Context.Request.Cookies.TryGetValue(UserCookieName, out string cookieValue);

			if (cookieValue != null)
			{
				try
				{
					var json = this.protector.Unprotect(cookieValue);
					var value = JsonConvert.DeserializeObject<Infrastructure.User.UserSession>(json);
					return value;
				}
				catch (Exception)
				{
					// Deserialization failed due to a corrupt cookie. Simply return null.
					return null;
				}
			}

			var userContextData = this.GetUserContextData();
			if (userContextData != null)
			{
				this.SetUserSessionData(new Infrastructure.User.UserSession(userContextData.UserId));
			}

			return null;
		}

		public void SetUserContextData(UserContextData data)
		{
			var json = JsonConvert.SerializeObject(data);
			var encryptedJson = this.protector.Protect(json);

			this.signInManager.Context.Response.Cookies.Delete(AppCookieName);
			this.signInManager.Context.Response.Cookies.Append(AppCookieName, encryptedJson, new CookieOptions
			{
				SameSite = SameSiteMode.Lax,
				// Refresh cookie every 1 minute to avoid stale data.
				Expires = DateTimeOffset.UtcNow.AddMinutes(1)
			});
		}

		public void SetUserSessionData(Infrastructure.User.UserSession session)
		{
			var json = JsonConvert.SerializeObject(session);
			var encryptedJson = this.protector.Protect(json);

			this.signInManager.Context.Response.Cookies.Delete(UserCookieName);
			this.signInManager.Context.Response.Cookies.Append(UserCookieName, encryptedJson, new CookieOptions
			{
				SameSite = SameSiteMode.Lax,
				// Refresh cookie every 30 minute to avoid stale data.
				Expires = DateTimeOffset.UtcNow.AddMinutes(30)
			});
		}
	}
}
