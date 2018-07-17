namespace UimfApp.Infrastructure.Forms
{
	using UimfApp.Infrastructure.Forms.Inputs;

	/// <summary>
	/// Can be used to indicate that the request object accepts array of items
	/// to which a bulk action can be applied.
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public interface IBulkActionRequest<T>
	{
		/// <summary>
		/// Gets list of items to which the action should be applied.
		/// </summary>
		ValueList<T> Items { get; }
	}
}
