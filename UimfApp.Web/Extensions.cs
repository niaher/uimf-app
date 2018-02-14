namespace UimfApp.Web
{
	using System.IO;
	using System.Linq;
	using System.Net;
	using System.Security.Claims;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.AspNetCore.Http;

	public static class Extensions
	{
		private const string NullIpAddress = "::1";

		public static int? GetUserId(this ClaimsPrincipal principal)
		{
			return principal.Claims.Where(t => t.Type == ClaimTypes.NameIdentifier)
				.Select(t => t.Value)
				.SingleOrDefault()
				.ToInt();
		}

		public static bool IsLocal(this HttpRequest req)
		{
			var connection = req.HttpContext.Connection;
			if (connection.RemoteIpAddress.IsSet())
			{
				//We have a remote address set up
				return connection.LocalIpAddress.IsSet()
					//Is local is same as remote, then we are local
					? connection.RemoteIpAddress.Equals(connection.LocalIpAddress)
					//else we are remote if the remote IP address is not a loopback address
					: IPAddress.IsLoopback(connection.RemoteIpAddress);
			}

			return true;
		}

		public static string MapPath(this IHostingEnvironment environment, string virtualPath)
		{
			return Path.Combine(environment.WebRootPath, virtualPath.TrimStart("~/"));
		}

		public static int? ToInt(this string value)
		{
			int result;
			if (!int.TryParse(value, out result))
			{
				return null;
			}

			return result;
		}

		public static string TrimEnd(this string target, string trimString)
		{
			string result = target;
			while (result.EndsWith(trimString))
			{
				result = result.Substring(0, result.Length - trimString.Length);
			}

			return result;
		}

		public static string TrimStart(this string target, string trimString)
		{
			string result = target;
			while (result.StartsWith(trimString) && result.Length > trimString.Length)
			{
				result = result.Substring(trimString.Length);
			}

			return result;
		}

		private static bool IsSet(this IPAddress address)
		{
			return address != null && address.ToString() != NullIpAddress;
		}
	}
}