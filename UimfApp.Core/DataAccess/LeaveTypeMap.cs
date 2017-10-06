namespace UimfApp.Core.DataAccess
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.Metadata.Builders;

	internal class LeaveTypeMap : IEntityTypeConfiguration<LeaveType>
	{
		public void Configure(EntityTypeBuilder<LeaveType> builder)
		{
			RelationalEntityTypeBuilderExtensions.ToTable((EntityTypeBuilder)builder, "LeaveType");
			builder.HasKey(t => t.Id);
			builder.Property(t => t.Id).HasColumnName("Id");
			builder.Property(t => t.Name).HasColumnName("Name").IsUnicode(false).HasMaxLength(200);
		}
	}
}