import * as umf from "./core/framework";

import { BooleanInputController } from "./core/ui/inputs/BooleanInputController";
import { DateInputController } from "./core/ui/inputs/DateInputController";
import { DropdownInputController } from "./core/ui/inputs/DropdownInputController";
import { MultiSelectInputController } from "./core/ui/inputs/MultiSelectInputController";
import { NumberInputController } from "./core/ui/inputs/NumberInputController";
import { PaginatorInputController } from "./core/ui/inputs/PaginatorInputController";
import { PasswordInputController } from "./core/ui/inputs/PasswordInputController";
import { TextareaInputController } from "./core/ui/inputs/TextareaInputController";
import { TypeaheadInputController } from "./core/ui/inputs/TypeaheadInputController";

import BooleanInput from "./core/ui/inputs/Boolean.svelte";
import DateInput from "./core/ui/inputs/Date.svelte";
import DropdownInput from "./core/ui/inputs/Dropdown.svelte";
import MultiSelectInput from "./core/ui/inputs/MultiSelect.svelte";
import NumberInput from "./core/ui/inputs/Number.svelte";
import Password from "./core/ui/inputs/Password.svelte";
import TextInput from "./core/ui/inputs/Text.svelte";
import Textarea from "./core/ui/inputs/Textarea.svelte";

import ActionList from "./core/ui/outputs/ActionList.svelte";
import DateTimeOutput from "./core/ui/outputs/Datetime.svelte";
import FileSize from "./core/ui/outputs/FileSize.svelte";
import FormLink from "./core/ui/outputs/FormLink.svelte";
import HtmlString from "./core/ui/outputs/HtmlString.svelte";
import Image from "./core/ui/outputs/Image.svelte";
import InlineForm from "./core/ui/outputs/InlineForm.svelte";
import Link from "./core/ui/outputs/Link.svelte";
import Money from "./core/ui/outputs/Money.svelte";
import NumberOutput from "./core/ui/outputs/Number.svelte";
import ObjectList from "./core/ui/outputs/ObjectList.svelte";
import Paginator from "./core/ui/outputs/Paginator.svelte";
import TableOutput from "./core/ui/outputs/Table.svelte";
import Tabstrip from "./core/ui/outputs/Tabstrip.svelte";
import TextOutput from "./core/ui/outputs/Text.svelte";
import TextValueMultiline from "./core/ui/outputs/TextValueMultiline.svelte";
import PreformattedText from "./core/ui/outputs/PreformattedText.svelte";

import {
	BindToOutput,
	DependOn,
	FormLogToConsole,
	InputLogToConsole,
	OutputLogToConsole,
	ReloadFormAfterAction

} from "./core/eventHandlers";

import { Growl } from "./core/functions";

const controlRegister = new umf.ControlRegister();
controlRegister.registerInputFieldControl("text", TextInput, umf.StringInputController);
controlRegister.registerInputFieldControl("datetime", DateInput, DateInputController);
controlRegister.registerInputFieldControl("number", NumberInput, NumberInputController);
controlRegister.registerInputFieldControl("dropdown", DropdownInput, DropdownInputController);
controlRegister.registerInputFieldControl("boolean", BooleanInput, BooleanInputController);
controlRegister.registerInputFieldControl("paginator", null, PaginatorInputController);
controlRegister.registerInputFieldControl("typeahead", MultiSelectInput, TypeaheadInputController);
controlRegister.registerInputFieldControl("my-typeahead", MultiSelectInput, TypeaheadInputController);
controlRegister.registerInputFieldControl("multiselect", MultiSelectInput, MultiSelectInputController);
controlRegister.registerInputFieldControl("password", Password, PasswordInputController);
controlRegister.registerInputFieldControl("textarea", Textarea, TextareaInputController, new umf.OutputControlConfiguration(false, true));

controlRegister.registerOutputFieldControl("text", TextOutput);
controlRegister.registerOutputFieldControl("number", NumberOutput);
controlRegister.registerOutputFieldControl("datetime", DateTimeOutput);
controlRegister.registerOutputFieldControl("table", TableOutput, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("formlink", FormLink);
controlRegister.registerOutputFieldControl("tabstrip", Tabstrip, new umf.OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("paginated-data", Paginator, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("action-list", ActionList, new umf.OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("inline-form", InlineForm, new umf.OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("text-value-multiline", TextValueMultiline, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("money", Money, new umf.OutputControlConfiguration(false, false));
controlRegister.registerOutputFieldControl("file-size", FileSize);
controlRegister.registerOutputFieldControl("image", Image, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("link", Link);
controlRegister.registerOutputFieldControl("object-list", ObjectList, new umf.OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("html-string", HtmlString);
controlRegister.registerOutputFieldControl("preformatted-text", PreformattedText, new umf.OutputControlConfiguration(false, true));

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
