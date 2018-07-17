namespace UimfApp.Core.DataAccess.Mapping
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.Metadata.Builders;
	using UimfApp.Core.Domain;

	public class WorkItemMap : IEntityTypeConfiguration<WorkItem>
	{
		public void Configure(EntityTypeBuilder<WorkItem> entity)
		{
			entity.ToTable("WorkItem");
			entity.HasKey(c => c.Id);
			entity.Property(t => t.Id).HasColumnName("Id").UseSqlServerIdentityColumn();

			entity.HasOne(t => t.AssignedToUser)
				.WithMany()
				.HasForeignKey(t => t.AssignedToUserId);
		}
	}
}