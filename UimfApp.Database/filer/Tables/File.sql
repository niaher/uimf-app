CREATE TABLE [dbo].[File] (
    [Id]                INT            IDENTITY (1, 1) NOT NULL,
    [CompressionFormat] TINYINT        NOT NULL,
    [CreatedByUserId]   INT            NULL,
    [CreatedOn]         DATETIME2 (7)  NOT NULL,
    [Extension]         NVARCHAR (20)  NULL,
    [MimeType]          VARCHAR (100)  NULL,
    [Name]              NVARCHAR (255) NULL,
    [Size]              BIGINT         NOT NULL,
    CONSTRAINT [PK_File] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE NONCLUSTERED INDEX [IX_File_CreatedByUserId]
    ON [dbo].[File]([CreatedByUserId] ASC);

