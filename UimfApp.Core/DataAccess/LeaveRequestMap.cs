namespace UimfApp.Core.DataAccess
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.Metadata.Builders;

	internal class LeaveRequestMap : IEntityTypeConfiguration<LeaveRequest>
	{
		public void Configure(EntityTypeBuilder<LeaveRequest> entity)
		{
			RelationalEntityTypeBuilderExtensions.ToTable((EntityTypeBuilder)entity, "LeaveRequest");
			entity.HasKey(t => t.Id);
			entity.Property(t => t.LeaveTypeId).HasColumnName("LeaveTypeId");
			entity.Property(t => t.Remarks).HasColumnName("Remarks").IsUnicode(false);
			entity.Property(t => t.Id).HasColumnName("Id");
			entity.Property(t => t.LeaveOn).HasColumnName("LeaveOn");
			entity.Property(t => t.RequestedOn).HasColumnName("RequestedOn");
			entity.Property(t => t.UserId).HasColumnName("UserId");

			entity.HasOne(t => t.Type)
				.WithMany()
				.HasForeignKey(t => t.LeaveTypeId);
		}
	}
}