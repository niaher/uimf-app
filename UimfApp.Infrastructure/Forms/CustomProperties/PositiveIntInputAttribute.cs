namespace UimfApp.Infrastructure.Forms.CustomProperties
{
	public class PositiveIntInputAttribute : NumberConfigAttribute
	{
		public PositiveIntInputAttribute()
		{
			this.Step = 1;
			this.MinValue = 0;
		}
	}
}
