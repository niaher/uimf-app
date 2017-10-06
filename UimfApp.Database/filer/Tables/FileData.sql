CREATE TABLE [dbo].[FileData] (
    [Id]   INT             NOT NULL,
    [Data] VARBINARY (MAX) NULL,
    CONSTRAINT [PK_FileData] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_FileData_File_Id] FOREIGN KEY ([Id]) REFERENCES [dbo].[File] ([Id]) ON DELETE CASCADE
);

