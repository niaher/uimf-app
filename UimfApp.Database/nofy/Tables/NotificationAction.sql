CREATE TABLE [ntf].[NotificationAction] (
    [Id] int NOT NULL IDENTITY,
    [ActionLink] varchar(1000),
    [Label] nvarchar(50),
    [NotificationId] int NOT NULL,
    CONSTRAINT [PK_NotificationAction] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_NotificationAction_Notification_NotificationId] FOREIGN KEY ([NotificationId]) REFERENCES [ntf].[Notification] ([Id]) ON DELETE CASCADE
)
