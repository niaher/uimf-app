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
		private const string UserCookieName = "app-data";
		private readonly IDataProtector protector;
		private readonly SignInManager<ApplicationUser> signInManager;

		public CookieManager(SignInManager<ApplicationUser> signInManager, IDataProtectionProvider protectionProvider)
		{
			this.signInManager = signInManager;
			this.protector = protectionProvider.CreateProtector("app-cookie");
		}

		public static void DeleteUserCookie(HttpResponse response)
		{
			response.Cookies.Delete(UserCookieName);
		}

		public UserContextData GetUserContextData()
		{
			this.signInManager.Context.Request.Cookies.TryGetValue(UserCookieName, out string cookieValue);

			if (cookieValue != null)
			{
				try
				{
					var json = this.protector.Unprotect(cookieValue);
					return JsonConvert.DeserializeObject<UserContextData>(json);
				}
				catch (Exception)
				{
					// Deserialization failed due to a corrupt cookie. Simply return null.
					return null;
				}
			}

			return null;
		}

		public void SetUserContextData(UserContextData data)
		{
			var json = JsonConvert.SerializeObject(data);
			var encryptedJson = this.protector.Protect(json);

			this.signInManager.Context.Response.Cookies.Delete(UserCookieName);
			this.signInManager.Context.Response.Cookies.Append(UserCookieName, encryptedJson);
		}
	}
}