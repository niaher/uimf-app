CREATE TABLE [ntf].[Notification] (
    [Id] int NOT NULL IDENTITY,
    [ArchivedOn] datetime2,
    [Category] int,
    [CreatedOn] datetime2 NOT NULL,
    [Description] nvarchar(1000),
    [EntityId] varchar(50),
    [EntityType] varchar(200),
    [RecipientId] varchar(50),
    [RecipientType] varchar(50),
    [Status] int NOT NULL,
    [Summary] nvarchar(100),
    CONSTRAINT [PK_Notification] PRIMARY KEY ([Id])
)
