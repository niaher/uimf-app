CREATE TABLE [dbo].[WorkItem]
(
	[Id] INT IDENTITY(1,1) NOT NULL,
	[CreatedOn] DATETIME NOT NULL, 
	[CreatedByUserId] INT NOT NULL,
	[AssignedToUserId] INT NULL,
	[CompletedOn] DATETIME NULL,
	[DueOn] DATETIME NULL,
	[Description] NVARCHAR(MAX) NULL, 
	CONSTRAINT [FK_WorkItem_CreatedByUserId] FOREIGN KEY (CreatedByUserId) REFERENCES [AspNetUsers]([Id]),
	CONSTRAINT [FK_WorkItem_AssignedToUserId] FOREIGN KEY (AssignedToUserId) REFERENCES [AspNetUsers]([Id]),
    CONSTRAINT [PK_WorkItem] PRIMARY KEY CLUSTERED ([Id])
)
