namespace UimfApp.Infrastructure.Security
{
	/// <summary>
	/// Repository that is capable of retrieving objects by their primary key.
	/// </summary>
	public interface IEntityRepository
	{
		object Find(int entityId);
	}
}