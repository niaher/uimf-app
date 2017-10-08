// ReSharper disable UnusedAutoPropertyAccessor.Local
// ReSharper disable AutoPropertyCanBeMadeGetOnly.Local
// ReSharper disable UnusedMember.Local

namespace UimfApp.Core
{
	using System;

	public class SomeThing
	{
		private SomeThing()
		{
		}

		internal SomeThing(string remarks)
		{
			this.CreatedOn = DateTime.UtcNow;
			this.Remarks = remarks;
		}

		public int Id { get; set; }

		/// <summary>
		/// Gets date when the leave was requested.
		/// </summary>
		public DateTime CreatedOn { get; private set; }

		public string Remarks { get; private set; }
	}
}