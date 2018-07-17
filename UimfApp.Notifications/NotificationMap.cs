namespace UimfApp.Notifications
{
	using Microsoft.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore.Metadata.Builders;

	public class NotificationMap : IEntityTypeConfiguration<Notification>
	{
		private readonly string schema;

		public NotificationMap(string schema)
		{
			this.schema = schema;
		}

		public void Configure(EntityTypeBuilder<Notification> builder)
		{
			builder.ToTable("Notification", this.schema);
			builder.HasKey(t => t.Id);
			builder.Property(t => t.Id).HasColumnName("Id").UseSqlServerIdentityColumn();
			builder.Property(t => t.ArchivedOn).HasColumnName("ArchivedOn");
			builder.Property(t => t.CreatedOn).HasColumnName("CreatedOn");
			builder.Property(t => t.Description).HasColumnName("Description");
			builder.Property(t => t.Summary).HasColumnName("Summary");
			builder.Property(t => t.Category).HasColumnName("Category");
			builder.Property(t => t.ReadOn).HasColumnName("ReadOn");

			builder.OwnsOne(
				t => t.RelatedTo,
				t =>
				{
					t.Property(c => c.EntityId).HasColumnName("EntityId");
					t.Property(c => c.EntityType).HasColumnName("EntityType");
				});

			builder.OwnsOne(
				t => t.Recipient,
				t =>
				{
					t.Property(c => c.EntityId).HasColumnName("RecipientId");
					t.Property(c => c.EntityType).HasColumnName("RecipientType");
				});
		}
	}
}