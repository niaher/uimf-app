namespace UimfApp.Infrastructure
{
	using System;

	public class ApplicationException : Exception
	{
		public ApplicationException(string message)
			: base(message)
		{
		}

		public ApplicationException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}