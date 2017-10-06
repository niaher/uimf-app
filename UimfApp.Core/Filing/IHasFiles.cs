namespace UimfApp.Core.Filing
{
	using System.Collections.Generic;
	using Filer.Core;

	public interface IHasFiles
	{
		ICollection<File> Documents { get; set; }
	}
}