:setvar UserName UimfApp

use [master]
go

create login $(UserName) with password=N'secret'
go

create user $(UserName)
	for login $(UserName)
	with default_schema = dbo
go

-- db_executor role might need to be created manually.
if not exists (select 1 from sys.database_principals where name = 'db_executor')
begin
	-- Create a db_executor role
	create role db_executor

	-- Grant execute rights to the new role
	grant execute to db_executor
end

-- Add user to the database owner role
execute sp_addrolemember @rolename = N'db_executor', @membername = N'$(UserName)';
execute sp_addrolemember @rolename = N'db_datareader', @membername = N'$(UserName)';
execute sp_addrolemember @rolename = N'db_datawriter', @membername = N'$(UserName)';
