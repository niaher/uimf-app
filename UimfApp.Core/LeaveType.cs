// ReSharper disable AutoPropertyCanBeMadeGetOnly.Local
// ReSharper disable UnusedMember.Local

namespace UimfApp.Core
{
	public class LeaveType
	{
		private LeaveType()
		{
		}

		internal LeaveType(int id, string name)
		{
			this.Id = id;
			this.Name = name;
		}

		public int Id { get; private set; }
		public string Name { get; private set; }
	}
}