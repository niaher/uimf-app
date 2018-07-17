-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: spgs
-- Source Schemata: spgs
-- Created: Sat Jul 14 22:54:54 2018
-- Workbench Version: 8.0.11
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema spgs
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `spgs` ;
CREATE SCHEMA IF NOT EXISTS `spgs` ;

-- ----------------------------------------------------------------------------
-- Table spgs.cnv_ConversationDocument
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`cnv_ConversationDocument` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `CommentDataId` INT NULL,
  `DocumentId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `IX_ConversationDocument_CommentDataId` (`CommentDataId` ASC) VISIBLE,
  CONSTRAINT `FK_ConversationDocument_Comment`
    FOREIGN KEY (`CommentDataId`)
    REFERENCES `spgs`.`cnv_Comment` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.cnv_Conversation
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`cnv_Conversation` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Key` VARCHAR(80) NOT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `IX_Conversation_ApplicationId_Key` (`Key` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table spgs.cnv_Comment
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`cnv_Comment` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `AuthorId` INT NOT NULL,
  `ConversationId` INT NOT NULL,
  `ParentId` INT NULL,
  `PostedOn` DATETIME(6) NOT NULL,
  `Text` LONGTEXT CHARACTER SET 'utf8mb4' NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `IX_Comment_ConversationId` (`ConversationId` ASC) VISIBLE,
  INDEX `IX_Comment_ParentId` (`ParentId` ASC) VISIBLE,
  CONSTRAINT `FK_cnv.Comment_cnv.Comment_ParentId`
    FOREIGN KEY (`ParentId`)
    REFERENCES `spgs`.`cnv_Comment` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_cnv.Comment_cnv.Conversation_ConversationId`
    FOREIGN KEY (`ConversationId`)
    REFERENCES `spgs`.`cnv_Conversation` (`Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo___RefactorLog
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo___RefactorLog` (
  `OperationKey` VARCHAR(64) UNIQUE NOT NULL,
  PRIMARY KEY (`OperationKey`));

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AspNetRoleClaims
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AspNetRoleClaims` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ClaimType` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `ClaimValue` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `RoleId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `IX_AspNetRoleClaims_RoleId` (`RoleId` ASC) VISIBLE,
  CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId`
    FOREIGN KEY (`RoleId`)
    REFERENCES `spgs`.`dbo_AspNetRoles` (`Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AspNetRoles
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AspNetRoles` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ConcurrencyStamp` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `Name` VARCHAR(256) CHARACTER SET 'utf8mb4' NULL,
  `NormalizedName` VARCHAR(256) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `RoleNameIndex` (`NormalizedName`(255) ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AspNetUserClaims
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AspNetUserClaims` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ClaimType` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `ClaimValue` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `UserId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `IX_AspNetUserClaims_UserId` (`UserId` ASC) VISIBLE,
  CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId`
    FOREIGN KEY (`UserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AspNetUserLogins
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AspNetUserLogins` (
  `LoginProvider` VARCHAR(450) CHARACTER SET 'utf8mb4' NOT NULL,
  `ProviderKey` VARCHAR(450) CHARACTER SET 'utf8mb4' NOT NULL,
  `ProviderDisplayName` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `UserId` INT NOT NULL,
  PRIMARY KEY (`LoginProvider`(255), `ProviderKey`(255)),
  INDEX `IX_AspNetUserLogins_UserId` (`UserId` ASC) VISIBLE,
  CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId`
    FOREIGN KEY (`UserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AspNetUserRoles
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AspNetUserRoles` (
  `UserId` INT NOT NULL,
  `RoleId` INT NOT NULL,
  PRIMARY KEY (`UserId`, `RoleId`),
  INDEX `IX_AspNetUserRoles_RoleId` (`RoleId` ASC) VISIBLE,
  CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId`
    FOREIGN KEY (`RoleId`)
    REFERENCES `spgs`.`dbo_AspNetRoles` (`Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId`
    FOREIGN KEY (`UserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AspNetUsers
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AspNetUsers` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `AccessFailedCount` INT NOT NULL,
  `ConcurrencyStamp` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `Email` VARCHAR(256) CHARACTER SET 'utf8mb4' NULL,
  `EmailConfirmed` TINYINT(1) NOT NULL,
  `LockoutEnabled` TINYINT(1) NOT NULL,
  `LockoutEnd` DATETIME(6) NULL,
  `NormalizedEmail` VARCHAR(256) CHARACTER SET 'utf8mb4' NULL,
  `NormalizedUserName` VARCHAR(256) CHARACTER SET 'utf8mb4' NULL,
  `PasswordHash` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `PhoneNumber` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `PhoneNumberConfirmed` TINYINT(1) NOT NULL,
  `SecurityStamp` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `TwoFactorEnabled` TINYINT(1) NOT NULL,
  `UserName` VARCHAR(256) CHARACTER SET 'utf8mb4' NULL,
  `Active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`Id`),
  INDEX `EmailIndex` (`NormalizedEmail`(255) ASC) VISIBLE,
  UNIQUE INDEX `UserNameIndex` (`NormalizedUserName`(255) ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AspNetUserTokens
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AspNetUserTokens` (
  `UserId` INT NOT NULL,
  `LoginProvider` VARCHAR(450) CHARACTER SET 'utf8mb4' NOT NULL,
  `Name` VARCHAR(450) CHARACTER SET 'utf8mb4' NOT NULL,
  `Value` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`UserId`, `LoginProvider`(255), `Name`(255)),
  CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId`
    FOREIGN KEY (`UserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Audit
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Audit` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `CreatedByUserId` INT NOT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `Description` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Id`));

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AuditEntry
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AuditEntry` (
  `AuditEntryID` INT NOT NULL AUTO_INCREMENT,
  `AuditId` INT NOT NULL,
  `EntityTypeName` VARCHAR(50) NULL,
  `EntityId` INT NULL,
  `State` INT NOT NULL,
  PRIMARY KEY (`AuditEntryID`),
  CONSTRAINT `FK_dbo.AuditEntry_dbo.Audit_Id`
    FOREIGN KEY (`AuditId`)
    REFERENCES `spgs`.`dbo_Audit` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_AuditEntryProperty
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_AuditEntryProperty` (
  `AuditEntryPropertyID` INT NOT NULL AUTO_INCREMENT,
  `AuditEntryID` INT NOT NULL,
  `PropertyName` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `OldValue` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `NewValue` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`AuditEntryPropertyID`),
  INDEX `IX_AuditEntryID` (`AuditEntryID` ASC) VISIBLE,
  CONSTRAINT `FK_dbo.AuditEntryProperty_dbo.AuditEntries_AuditEntryID`
    FOREIGN KEY (`AuditEntryID`)
    REFERENCES `spgs`.`dbo_AuditEntry` (`AuditEntryID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Category
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Category` (
  `Id` INT NOT NULL,
  `Max` INT NOT NULL,
  `Min` INT NOT NULL,
  `Name` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Id`));

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_DocumentTemplate
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_DocumentTemplate` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FundId` INT NOT NULL,
  `Name` VARCHAR(100) CHARACTER SET 'utf8mb4' NOT NULL,
  `Description` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `IsDeleted` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_DocumentTemplate_Fund_FundId`
    FOREIGN KEY (`FundId`)
    REFERENCES `spgs`.`dbo_Fund` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_DocumentTemplate_CreatedByUser`
    FOREIGN KEY (`CreatedByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_File
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_File` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `CompressionFormat` TINYINT UNSIGNED NOT NULL,
  `CreatedByUserId` INT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `Extension` VARCHAR(20) CHARACTER SET 'utf8mb4' NULL,
  `MimeType` VARCHAR(100) NULL,
  `Name` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Size` BIGINT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `IX_File_CreatedByUserId` (`CreatedByUserId` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_FileContext
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_FileContext` (
  `FileId` INT NOT NULL,
  `Value` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`FileId`, `Value`),
  UNIQUE INDEX `IX_FileContext_Value_FileId` (`Value` ASC, `FileId` ASC) VISIBLE,
  CONSTRAINT `FK_FileContext_File_FileId`
    FOREIGN KEY (`FileId`)
    REFERENCES `spgs`.`dbo_File` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_FileData
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_FileData` (
  `Id` INT NOT NULL,
  `Data` LONGBLOB NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_FileData_File_Id`
    FOREIGN KEY (`Id`)
    REFERENCES `spgs`.`dbo_File` (`Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Folder
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Folder` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100) CHARACTER SET 'utf8mb4' NOT NULL,
  `ParentId` INT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `FundId` INT NULL,
  `IsDeleted` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_Folder_Folder_ParentId`
    FOREIGN KEY (`ParentId`)
    REFERENCES `spgs`.`dbo_Folder` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Folder_CreatedByUser`
    FOREIGN KEY (`CreatedByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Folder_Fund`
    FOREIGN KEY (`FundId`)
    REFERENCES `spgs`.`dbo_Fund` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_FolderItem
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_FolderItem` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FolderId` INT NOT NULL,
  `FileId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_FolderItem_Folder_FolderId`
    FOREIGN KEY (`FolderId`)
    REFERENCES `spgs`.`dbo_Folder` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_FolderItem_FileId`
    FOREIGN KEY (`FileId`)
    REFERENCES `spgs`.`dbo_File` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Fund
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Fund` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(200) CHARACTER SET 'utf8mb4' NOT NULL,
  `UnitId` INT NOT NULL,
  `GrantFormId` INT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_Fund_Unit_UnitId`
    FOREIGN KEY (`UnitId`)
    REFERENCES `spgs`.`dbo_Unit` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_FundMember
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_FundMember` (
  `FundId` INT NOT NULL,
  `UserId` INT NOT NULL,
  `MemberType` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`FundId`, `UserId`),
  CONSTRAINT `FK_FundMember_Fund_FundId`
    FOREIGN KEY (`FundId`)
    REFERENCES `spgs`.`dbo_Fund` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_FundMember_User`
    FOREIGN KEY (`UserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Grant
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Grant` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Amount` DECIMAL(18,2) NOT NULL,
  `GranteeId` INT NOT NULL,
  `FundId` INT NOT NULL,
  `ProposalId` INT NULL,
  `FormInstanceId` INT NULL,
  `GrantFormCompleted` TINYINT(1) NOT NULL,
  `UniqueIdentifier` VARCHAR(50) NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `UQ_Grant_FundId_UniqueIdentifier` (`FundId` ASC, `UniqueIdentifier` ASC) VISIBLE,
  CONSTRAINT `FK_Grant_Grantee_GranteeId`
    FOREIGN KEY (`GranteeId`)
    REFERENCES `spgs`.`dbo_Grantee` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Grant_Fund_FundId`
    FOREIGN KEY (`FundId`)
    REFERENCES `spgs`.`dbo_Fund` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Grant_Proposal_ProposalId`
    FOREIGN KEY (`ProposalId`)
    REFERENCES `spgs`.`dbo_Proposal` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Grantee
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Grantee` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `BoxNumber` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `Email` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `Name` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `OwnerShipId` INT NOT NULL,
  `Telephone` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `CategoryId` INT NOT NULL,
  `UnitId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_Grantee_Unit_UnitId`
    FOREIGN KEY (`UnitId`)
    REFERENCES `spgs`.`dbo_Unit` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Grantee_Lookup_TypeId`
    FOREIGN KEY (`CategoryId`)
    REFERENCES `spgs`.`dbo_Lookup` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Grantee_Lookup_OwnerShipId`
    FOREIGN KEY (`OwnerShipId`)
    REFERENCES `spgs`.`dbo_Lookup` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Lookup
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Lookup` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Type` VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
  `Value` VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
  `IsDeleted` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`));

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Milestone
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Milestone` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Amount` DECIMAL(18,2) NOT NULL,
  `Name` VARCHAR(200) CHARACTER SET 'utf8mb4' NULL,
  `ScheduleTemplateId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_Milestone_ScheduleTemplate`
    FOREIGN KEY (`ScheduleTemplateId`)
    REFERENCES `spgs`.`dbo_ScheduleTemplate` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Payment
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Payment` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Amount` DECIMAL(18,2) NOT NULL,
  `ScheduleMilestoneId` INT NOT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `Status` INT NOT NULL,
  `ValidatedOn` DATETIME(6) NULL,
  `ValidatedByUserId` INT NULL,
  `CancelledOn` DATETIME(6) NULL,
  `ReasonOfCancellation` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `CancelledByUserId` INT NULL,
  `PaidOn` DATETIME(6) NULL,
  `PaidByUserId` INT NULL,
  PRIMARY KEY (`Id`),
  INDEX `IX_Payment_PaidOn` (`PaidOn` ASC) VISIBLE,
  CONSTRAINT `FK_Payment_CreatedByUser`
    FOREIGN KEY (`CreatedByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Payment_CancelledByUser`
    FOREIGN KEY (`CancelledByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Payment_ValidatedByUser`
    FOREIGN KEY (`ValidatedByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Payment_PaidByUser`
    FOREIGN KEY (`PaidByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Payment_ScheduleMilestone`
    FOREIGN KEY (`ScheduleMilestoneId`)
    REFERENCES `spgs`.`dbo_ScheduleMilestone` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Proposal
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Proposal` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FundId` INT NOT NULL,
  `GranteeId` INT NOT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `Amount` DECIMAL(18,2) NULL,
  `Status` INT NOT NULL,
  `FormInstanceId` INT NULL,
  `ProposalFormCompleted` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_Proposal_Fund_FundId`
    FOREIGN KEY (`FundId`)
    REFERENCES `spgs`.`dbo_Fund` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Proposal_Grantee_GranteeId`
    FOREIGN KEY (`GranteeId`)
    REFERENCES `spgs`.`dbo_Grantee` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_ProposalForm
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_ProposalForm` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FundId` INT NOT NULL,
  `FormId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `IX_FundId` (`FundId` ASC) VISIBLE,
  CONSTRAINT `FK_ProposalForm_Fund_FundId`
    FOREIGN KEY (`FundId`)
    REFERENCES `spgs`.`dbo_Fund` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Schedule
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Schedule` (
  `Id` INT NOT NULL,
  `Status` INT NOT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `ConfirmedOn` DATETIME(6) NULL,
  `CompletedOn` DATETIME(6) NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_Schedule_Grant`
    FOREIGN KEY (`Id`)
    REFERENCES `spgs`.`dbo_Grant` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_ScheduleMilestone
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_ScheduleMilestone` (
  `DueDate` DATETIME(6) NOT NULL,
  `PaymentReleasedOn` DATETIME(6) NULL,
  `Status` INT NOT NULL,
  `Amount` DECIMAL(18,2) NOT NULL,
  `MeansOfVerification` VARCHAR(1500) CHARACTER SET 'utf8mb4' NULL,
  `Name` VARCHAR(50) CHARACTER SET 'utf8mb4' NOT NULL,
  `Id` INT NOT NULL AUTO_INCREMENT,
  `VerifiedOn` DATETIME(6) NULL,
  `ScheduleId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_ScheduleMilestones_Schedule_ScheduleId`
    FOREIGN KEY (`ScheduleId`)
    REFERENCES `spgs`.`dbo_Schedule` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_ScheduleTemplate
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_ScheduleTemplate` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FundId` INT NOT NULL,
  `Name` VARCHAR(50) CHARACTER SET 'utf8mb4' NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_ScheduleTemplate_Fund`
    FOREIGN KEY (`FundId`)
    REFERENCES `spgs`.`dbo_Fund` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Unit
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Unit` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` LONGTEXT CHARACTER SET 'utf8mb4' NOT NULL,
  PRIMARY KEY (`Id`));

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_UnitManager
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_UnitManager` (
  `UnitId` INT NOT NULL,
  `UserId` INT NOT NULL,
  PRIMARY KEY (`UnitId`, `UserId`),
  CONSTRAINT `FK_UnitManager_Unit`
    FOREIGN KEY (`UnitId`)
    REFERENCES `spgs`.`dbo_Unit` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_UnitManager_User`
    FOREIGN KEY (`UserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.dbo_Verification
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`dbo_Verification` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `ScheduleMilestoneId` INT NOT NULL,
  `Status` INT NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `AssignedToUserId` INT NULL,
  `VerifiedByUserId` INT NULL,
  `VerifiedOn` DATETIME(6) NULL,
  `CancelledByUserId` INT NULL,
  `CancelledOn` DATETIME(6) NULL,
  `CancelComment` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  `RejectedByUserId` INT NULL,
  `RejectedOn` DATETIME(6) NULL,
  `RejectComment` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_Verification_ScheduleMilestone`
    FOREIGN KEY (`ScheduleMilestoneId`)
    REFERENCES `spgs`.`dbo_ScheduleMilestone` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Verification_CreatedByUser`
    FOREIGN KEY (`CreatedByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Verification_CancelledByUser`
    FOREIGN KEY (`CancelledByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Verification_AssignedByUser`
    FOREIGN KEY (`AssignedToUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Verification_RejectedByUser`
    FOREIGN KEY (`RejectedByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Verification_VerifiedByUser`
    FOREIGN KEY (`VerifiedByUserId`)
    REFERENCES `spgs`.`dbo_AspNetUsers` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.forms_InputValue
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`forms_InputValue` (
  `FormInstanceId` INT NOT NULL,
  `InputId` INT NOT NULL,
  `Value` LONGTEXT CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`FormInstanceId`, `InputId`),
  CONSTRAINT `FK_InputValue_FormInstance_FormInstanceId`
    FOREIGN KEY (`FormInstanceId`)
    REFERENCES `spgs`.`forms_FormInstance` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_InputValue_Input_InputId`
    FOREIGN KEY (`InputId`)
    REFERENCES `spgs`.`forms_Input` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.forms_FormInstance
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`forms_FormInstance` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FormId` INT NOT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_FormInstance_Form_FormId`
    FOREIGN KEY (`FormId`)
    REFERENCES `spgs`.`forms_Form` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.forms_Input
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`forms_Input` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FormId` INT NOT NULL,
  `OrderIndex` INT NOT NULL,
  `Required` TINYINT(1) NOT NULL,
  `Label` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  `Type` INT NOT NULL,
  `CustomProperties` LONGTEXT NULL,
  `IsDeleted` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  CONSTRAINT `FK_Input_Form_FormId`
    FOREIGN KEY (`FormId`)
    REFERENCES `spgs`.`forms_Form` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table spgs.forms_Form
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`forms_Form` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Id`));

-- ----------------------------------------------------------------------------
-- Table spgs.ntf_Notification
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`ntf_Notification` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `CreatedOn` DATETIME(6) NOT NULL,
  `Description` VARCHAR(1000) CHARACTER SET 'utf8mb4' NULL,
  `EntityId` VARCHAR(20) NULL,
  `EntityType` VARCHAR(200) NULL,
  `RecipientId` VARCHAR(50) NULL,
  `RecipientType` VARCHAR(20) NULL,
  `ArchivedOn` DATETIME(6) NULL,
  `ReadOn` DATETIME(6) NULL,
  `Summary` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  `Category` INT NULL,
  PRIMARY KEY (`Id`));

-- ----------------------------------------------------------------------------
-- Table spgs.tx_Transaction
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `spgs`.`tx_Transaction` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Amount` DECIMAL(18,4) NOT NULL,
  `ContextId` INT NOT NULL,
  `ContextType` INT NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `CreatedOn` DATETIME(6) NOT NULL,
  `Description` VARCHAR(500) CHARACTER SET 'utf8mb4' NOT NULL,
  `Type` INT NOT NULL,
  PRIMARY KEY (`Id`));

-- ----------------------------------------------------------------------------
-- View spgs.dbo_AttachedFile
-- ----------------------------------------------------------------------------
-- USE `spgs`;
-- CREATE  OR REPLACE VIEW [dbo].[AttachedFile]

-- 	AS SELECT f.Id, 

-- 		f.CreatedByUserId, 

-- 		f.CreatedOn, 

-- 		f.Extension, 

-- 		f.Name, 

-- 		f.Size,

-- 		fc.Value as Context, 

-- 		u.UserName,

-- 		folderItem.FolderId as FolderId,

-- 		dc.Name as FolderName

--   FROM [dbo].[File] f 

--   INNER JOIN FileContext fc ON f.Id = fc.FileId

--   LEFT JOIN FolderItem folderItem ON f.Id = folderItem.FileId

--   LEFT JOIN Folder dc ON  dc.Id = folderItem.FolderId

--   LEFT JOIN [dbo].[AspNetUsers] u ON u.Id = f.CreatedByUserId

-- ;

-- ----------------------------------------------------------------------------
-- View spgs.dbo_AuditView
-- ----------------------------------------------------------------------------
-- USE `spgs`;
-- CREATE  OR REPLACE VIEW [dbo].[AuditView]

-- 	AS SELECT auditLog.[CreatedOn], 

-- 		auditLog.CreatedByUserId, 

-- 		auditLog.[Description], 

-- 		auditEntry.*, 

-- 		users.UserName, 

-- 		NewValue, 

-- 		OldValue, 

-- 		PropertyName, 

-- 		AuditEntryPropertyID 

-- 	FROM [dbo].[Audit] auditLog

-- 		left join [dbo].[AuditEntry] auditEntry on auditLog.Id = auditEntry.AuditId

-- 		left join [dbo].[AspNetUsers] users	on users.Id = auditLog.CreatedByUserId

-- 		left join [dbo].[AuditEntryProperty] property on property.AuditEntryID = auditEntry.AuditEntryID

-- ;

-- ----------------------------------------------------------------------------
-- View spgs.dbo_FolderView
-- ----------------------------------------------------------------------------
-- USE `spgs`;
-- CREATE  OR REPLACE VIEW [dbo].[FolderView]

-- 	AS SELECT folder.Id folderId, 

-- 		folder.CreatedByUserId, 

-- 		folder.[CreatedOn], 

-- 		folder.FundId, 

-- 		fm.UserId FundManagerUserId,

-- 		fund.Name FundName, 

-- 		folder.IsDeleted, 

-- 		folder.Name, 

-- 		folder.ParentId, 

-- 		c.Name ParentName

-- 	from Folder

-- 		left join Fund fund on fund.Id = folder.FundId

-- 		left join FundMember fm on fm.FundId = fund.Id

-- 		left join Folder c on c.Id = folder.ParentId

-- ;

-- ----------------------------------------------------------------------------
-- View spgs.dbo_GranteeSecurityInfo
-- ----------------------------------------------------------------------------
-- USE `spgs`;
-- CREATE  OR REPLACE VIEW [dbo].[GranteeSecurityInfo]

-- with schemabinding

-- as

-- select G.Id,

-- 		UnitManagers = stuff((

-- 			select ', ' + cast(U.UserId as varchar) 

-- 			from dbo.UnitManager U 

-- 			where U.UnitId = G.UnitId 

-- 			for xml path('')), 1, 2, ''),

-- 		FundMembers = stuff((

-- 			select ', ' + cast(M.UserId as varchar) 

-- 			from dbo.Fund F inner join dbo.FundMember M on F.Id = M.FundId

-- 			where F.UnitId = G.UnitId

-- 			for xml path('')), 1, 2, '')

-- 	from dbo.Grantee G

-- ;

-- ----------------------------------------------------------------------------
-- View spgs.dbo_GrantSecurityInfo
-- ----------------------------------------------------------------------------
-- USE `spgs`;
-- CREATE  OR REPLACE VIEW [dbo].[GrantSecurityInfo]

-- with schemabinding

-- as

-- select G.Id,

-- 		UnitManagers = stuff((

-- 			select ', ' + cast(U.UserId as varchar) 

-- 			from dbo.Fund F inner join dbo.UnitManager U on F.UnitId = U.UnitId

-- 			where F.Id = G.FundId

-- 			for xml path('')), 1, 2, ''),

-- 		FundMembers = stuff((

-- 			select ', ' + cast(M.UserId as varchar) 

-- 			from dbo.Fund F inner join dbo.FundMember M on F.Id = M.FundId

-- 			where F.Id = G.FundId

-- 			for xml path('')), 1, 2, '')

-- 	from dbo.[Grant] G

-- ;

-- ----------------------------------------------------------------------------
-- View spgs.dbo_GetFolderChildrens
-- ----------------------------------------------------------------------------
-- USE `spgs`;
-- CREATE  OR REPLACE PROCEDURE [dbo].[GetFolderChildrens]

-- 	@Id int

-- AS

-- 	;WITH children AS (

--     SELECT *

-- 

--     FROM Folder

--     WHERE [Id] = @Id

-- 

--     UNION ALL

-- 

--     SELECT

--        t.*

-- 

--     FROM

--        Folder t

--        INNER JOIN children c

--        ON t.[ParentId] = c.[Id]

-- )

-- 

-- SELECT *

-- FROM children 

-- Where Id != @id

-- and IsDeleted = 0

-- RETURN 0

-- ;
SET FOREIGN_KEY_CHECKS = 1;
