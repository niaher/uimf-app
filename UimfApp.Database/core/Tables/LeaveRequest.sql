CREATE TABLE [dbo].[LeaveRequest]
(
	[Id] INT NOT NULL IDENTITY(1, 1) PRIMARY KEY,
	[LeaveTypeId] INT NOT NULL,
	[Remarks] NVARCHAR(MAX) NULL,
	[LeaveOn] DATE NOT NULL,
	[RequestedOn] DATETIME NOT NULL,
	[UserId] INT NOT NULL, 
    CONSTRAINT [FK_LeaveRequest_LeaveType] FOREIGN KEY ([LeaveTypeId]) REFERENCES [LeaveType]([Id])
)

GO

CREATE INDEX [IX_LeaveRequest_LeaveOn] ON [dbo].[LeaveRequest] ([LeaveOn])
