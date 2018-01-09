namespace UimfApp.Core.Security.SomeThing
{
	using UimfApp.Infrastructure.Security;

	public class SomeThingRole : Role
	{
		public static SomeThingRole Owner = new SomeThingRole(nameof(Owner));
		public static SomeThingRole Viewer = new SomeThingRole(nameof(Viewer));

		private SomeThingRole(string name) : base(name)
		{
		}
	}
}