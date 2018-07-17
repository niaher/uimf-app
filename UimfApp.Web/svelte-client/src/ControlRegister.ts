import * as umf from "core-framework";

import { BooleanInputController } from "core-ui/inputs/BooleanInputController";
import { DateInputController } from "core-ui/inputs/DateInputController";
import { DateRangeInputController } from "core-ui/inputs/DateRangeInputController";
import { DropdownInputController } from "core-ui/inputs/DropdownInputController";
import { EmailInputController } from "core-ui/inputs/EmailInputController";
import { FileUploaderController } from "core-ui/inputs/FileUploaderController";
import { MultiSelectInputController } from "core-ui/inputs/MultiSelectInputController";
import { NumberInputController } from "core-ui/inputs/NumberInputController";
import { NumberRangeInputController } from "core-ui/inputs/NumberRangeInputController";
import { PaginatorInputController } from "core-ui/inputs/PaginatorInputController";
import { PasswordInputController } from "core-ui/inputs/PasswordInputController";
import { TextareaInputController } from "core-ui/inputs/TextareaInputController";
import { TypeaheadInputController } from "core-ui/inputs/TypeaheadInputController";

import BooleanInput from "core-ui/inputs/Boolean";
import DateInput from "core-ui/inputs/Date";
import DateRangeInput from "core-ui/inputs/DateRange";
import DropdownInput from "core-ui/inputs/Dropdown";
import EmailInput from "core-ui/inputs/Email";
import FileUploader from "core-ui/inputs/FileUploader";
import MultiSelectInput from "core-ui/inputs/MultiSelect";
import NumberInput from "core-ui/inputs/Number";
import NumberRangeInput from "core-ui/inputs/NumberRange";
import Password from "core-ui/inputs/Password";
import TextInput from "core-ui/inputs/Text";
import Textarea from "core-ui/inputs/Textarea";

import ActionList from "core-ui/outputs/ActionList";
import Alert from "core-ui/outputs/Alert";
import DateTimeOutput from "core-ui/outputs/Datetime";
import Documentation from "core-ui/outputs/Documentation";
import DownloadableFile from "core-ui/outputs/DownloadableFile";
import FileSize from "core-ui/outputs/FileSize";
import FormLink from "core-ui/outputs/FormLink";
import HtmlString from "core-ui/outputs/HtmlString";
import Image from "core-ui/outputs/Image";
import InlineForm from "core-ui/outputs/InlineForm";
import Link from "core-ui/outputs/Link";
import Money from "core-ui/outputs/Money";
import NumberOutput from "core-ui/outputs/Number";
import ObjectList from "core-ui/outputs/ObjectList";
import Paginator from "core-ui/outputs/Paginator";
import TableOutput from "core-ui/outputs/Table";
import Tabstrip from "core-ui/outputs/Tabstrip";
import TextOutput from "core-ui/outputs/Text";
import TextValue from "core-ui/outputs/TextValue";
import TextValueMultiline from "core-ui/outputs/TextValueMultiline";
import Tree from "core-ui/outputs/Tree";

import {
	BindToOutput,
	DependOn,
	FormLogToConsole,
	InputLogToConsole,
	OutputLogToConsole,
	ReloadFormAfterAction

} from "core-eventHandlers";

import { Growl } from "core-functions";

const controlRegister = new umf.ControlRegister();
controlRegister.registerInputFieldControl("text", TextInput, umf.StringInputController);
controlRegister.registerInputFieldControl("email", EmailInput, EmailInputController);
controlRegister.registerInputFieldControl("datetime", DateInput, DateInputController);
controlRegister.registerInputFieldControl("date-range", DateRangeInput, DateRangeInputController);
controlRegister.registerInputFieldControl("number", NumberInput, NumberInputController);
controlRegister.registerInputFieldControl("dropdown", DropdownInput, DropdownInputController);
controlRegister.registerInputFieldControl("boolean", BooleanInput, BooleanInputController);
controlRegister.registerInputFieldControl("paginator", null, PaginatorInputController);
controlRegister.registerInputFieldControl("typeahead", MultiSelectInput, TypeaheadInputController);
controlRegister.registerInputFieldControl("my-typeahead", MultiSelectInput, TypeaheadInputController);
controlRegister.registerInputFieldControl("multiselect", MultiSelectInput, MultiSelectInputController);
controlRegister.registerInputFieldControl("password", Password, PasswordInputController);
controlRegister.registerInputFieldControl("textarea", Textarea, TextareaInputController, new umf.OutputControlConfiguration(false, true));
controlRegister.registerInputFieldControl("file-uploader", FileUploader, FileUploaderController, new umf.OutputControlConfiguration(true, true));
controlRegister.registerInputFieldControl("number-range", NumberRangeInput, NumberRangeInputController);

controlRegister.registerOutputFieldControl("text", TextOutput);
controlRegister.registerOutputFieldControl("number", NumberOutput);
controlRegister.registerOutputFieldControl("datetime", DateTimeOutput);
controlRegister.registerOutputFieldControl("table", TableOutput, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("formlink", FormLink);
controlRegister.registerOutputFieldControl("tabstrip", Tabstrip, new umf.OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("paginated-data", Paginator, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("action-list", ActionList, new umf.OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("inline-form", InlineForm, new umf.OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("text-value", TextValue);
controlRegister.registerOutputFieldControl("text-value-multiline", TextValueMultiline, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("downloadable-file", DownloadableFile);
controlRegister.registerOutputFieldControl("alert", Alert, new umf.OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("money", Money, new umf.OutputControlConfiguration(false, false));
controlRegister.registerOutputFieldControl("file-size", FileSize);
controlRegister.registerOutputFieldControl("image", Image, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("link", Link);
controlRegister.registerOutputFieldControl("object-list", ObjectList, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("html-string", HtmlString);
controlRegister.registerOutputFieldControl("tree", Tree, new umf.OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("documentation", Documentation, new umf.OutputControlConfiguration(true, true));

// Form event handlers.
controlRegister.registerFormEventHandler("log-to-console", new FormLogToConsole());
controlRegister.registerFormEventHandler("reload-form-after-action", new ReloadFormAfterAction());

// Input event handlers.
controlRegister.registerInputFieldEventHandler("bind-to-output", new BindToOutput());
controlRegister.registerInputFieldEventHandler("log-to-console", new InputLogToConsole());
controlRegister.registerInputFieldEventHandler("depend-on", new DependOn());

// Output event handlers.
controlRegister.registerOutputFieldEventHandler("log-to-console", new OutputLogToConsole());

// Functions.
controlRegister.registerFunction("growl", new Growl());

export default controlRegister;
