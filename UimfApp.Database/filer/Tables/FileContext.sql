CREATE TABLE [dbo].[FileContext] (
    [FileId] INT          NOT NULL,
    [Value]  VARCHAR (50) NOT NULL,
    CONSTRAINT [PK_FileContext] PRIMARY KEY CLUSTERED ([FileId] ASC, [Value] ASC),
    CONSTRAINT [FK_FileContext_File_FileId] FOREIGN KEY ([FileId]) REFERENCES [dbo].[File] ([Id])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_FileContext_Value_FileId]
    ON [dbo].[FileContext]([Value] ASC, [FileId] ASC);

