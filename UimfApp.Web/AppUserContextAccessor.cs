namespace UimfApp.Web
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Security.Claims;
	using Microsoft.AspNetCore.Http;
	using UimfApp.Infrastructure;
	using UimfApp.Infrastructure.User;

	public class AppUserContextAccessor : UserContextAccessor
	{
		private readonly DependencyInjectionContainer dependencyInjectionContainer;

		public AppUserContextAccessor(DependencyInjectionContainer dependencyInjectionContainer)
		{
			this.dependencyInjectionContainer = dependencyInjectionContainer;
		}

		public override IEnumerable<Claim> GetClaims()
		{
			return this.GetHttpContextUser().Claims;
		}

		public override int? GetUserId()
		{
			var httpContextUser = this.GetHttpContextUser();

			return httpContextUser.Claims.Where(t => t.Type == ClaimTypes.NameIdentifier)
				.Select(t => t.Value)
				.SingleOrDefault()
				.ToInt();
		}

		public override string GetUsername()
		{
			var httpContextUser = this.GetHttpContextUser();
			return httpContextUser.Identity.Name;
		}

		private ClaimsPrincipal GetHttpContextUser()
		{
			var contextAccessor = this.dependencyInjectionContainer.GetInstance<IHttpContextAccessor>();
			return contextAccessor.HttpContext.User;
		}
	}
}
