// ReSharper disable UnusedAutoPropertyAccessor.Local
// ReSharper disable AutoPropertyCanBeMadeGetOnly.Local
// ReSharper disable UnusedMember.Local

namespace UimfApp.Core
{
	using System;

	public class LeaveRequest
	{
		private LeaveRequest()
		{
		}

		internal LeaveRequest(DateTime when, int userId, int leaveTypeId, string remarks)
		{
			this.RequestedOn = DateTime.UtcNow;
			this.LeaveOn = when;
			this.UserId = userId;
			this.LeaveTypeId = leaveTypeId;
			this.Remarks = remarks;
		}

		public int Id { get; set; }

		/// <summary>
		/// Gets date when the leave was requested.
		/// </summary>
		public DateTime RequestedOn { get; private set; }

		/// <summary>
		/// Gets date of the leave.
		/// </summary>
		public DateTime LeaveOn { get; private set; }

		public int UserId { get; private set; }
		public string Remarks { get; private set; }
		public int LeaveTypeId { get; private set; }
		public virtual LeaveType Type { get; private set; }
	}
}