CREATE TABLE [ntf].[Notification] (
    [Id]            INT             IDENTITY (1, 1) NOT NULL,
    [CreatedOn]     DATETIME        NOT NULL,
    [Description]   NVARCHAR (1000) NULL,
    [EntityId]      VARCHAR (20)    NULL,
    [EntityType]    VARCHAR (200)   NULL,
    [RecipientId]   VARCHAR (50)    NULL,
    [RecipientType] VARCHAR (20)    NULL,
    [ArchivedOn]    DATETIME        NULL,
	[ReadOn]		DATETIME        NULL,
    [Summary]       NVARCHAR (100)  NULL,
    [Category]      INT             NULL,
    CONSTRAINT [PK_ntf.Notification] PRIMARY KEY CLUSTERED ([Id] ASC)
);

