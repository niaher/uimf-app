namespace UimfApp.Core.DataAccess
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.Metadata.Builders;
	using UimfApp.Core.Domain;

	internal class SomeThingMap : IEntityTypeConfiguration<SomeThing>
	{
		public void Configure(EntityTypeBuilder<SomeThing> entity)
		{
			entity.ToTable("SomeThing");
			entity.HasKey(t => t.Id);
			entity.Property(t => t.Remarks).HasColumnName("Remarks").IsUnicode(false).HasMaxLength(100);
			entity.Property(t => t.OwnerUserId).HasColumnName("OwnerUserId");
			entity.Property(t => t.Id).HasColumnName("Id");
			entity.Property(t => t.CreatedOn).HasColumnName("CreatedOn");
		}
	}
}