namespace UimfApp.Users
{
	using System.Threading.Tasks;

	public interface ISmsSender
	{
		Task SendSmsAsync(string number, string message);
	}
}