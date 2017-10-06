namespace UimfApp.Infrastructure.Security
{
	public interface ISecurityGuardRepository
	{
		object Find(int entityId);
	}
}