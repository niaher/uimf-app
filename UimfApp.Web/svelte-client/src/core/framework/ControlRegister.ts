import {
	FormEventHandler,
	IFunctionRunner,
	InputController,
	InputFieldEventHandler,
	OutputFieldEventHandler,
	OutputFieldValue,
	StringInputController
} from "core-framework";
import * as umf from "uimf-core";
import {OutputControlConfiguration} from "./OutputControlConfiguration";

interface InputFieldControllerConstructor {
	new(metadata: umf.InputFieldMetadata): InputController<any>;
}

interface InputControlEntry {
	controller: InputFieldControllerConstructor;
	component: any;
	constants: OutputControlConfiguration;
}

interface IOutputControlEntry {
	constructor: any;
	constants: OutputControlConfiguration;
}

export class ControlRegister {
	public inputs: { [id: string]: InputControlEntry } = {};
	public outputs: { [id: string]: IOutputControlEntry } = {};
	public inputFieldEventHandlers: { [id: string]: InputFieldEventHandler } = {};
	public outputFieldEventHandlers: { [id: string]: OutputFieldEventHandler } = {};
	public formEventHandlers: { [id: string]: FormEventHandler } = {};
	public functions: { [id: string]: IFunctionRunner } = {};

	public createInputControllers(fields: umf.InputFieldMetadata[]): Array<InputController<any>> {
		const result: Array<InputController<any>> = [];

		for (const field of fields) {
			// Instantiate new input controller.
			const entry = this.inputs[field.type];
			const ctor = entry != null && entry.controller != null
				? entry.controller
				: StringInputController;

			result.push(new ctor(field));
		}

		result.sort((a: InputController<any>, b: InputController<any>) => {
			return a.metadata.orderIndex - b.metadata.orderIndex;
		});

		return result;
	}

	public getOutput(field: OutputFieldValue): IOutputControlEntry {
		return field != null
			? this.outputs[field.metadata.type] || this.outputs.text
			: this.outputs.text;
	}

	public getInput(type: string): InputControlEntry {
		return type != null
			? this.inputs[type] || this.inputs.text
			: this.inputs.text;
	}

	public registerInputFieldControl(
		name: string,
		svelteComponent: any,
		controller: InputFieldControllerConstructor,
		constants: OutputControlConfiguration = null): void {
		this.inputs[name] = {
			controller,
			component: svelteComponent,
			constants
		};
	}

	public registerOutputFieldControl(name: string, svelteComponent: any, constants: OutputControlConfiguration = null): void {
		this.outputs[name] = {
			constructor: svelteComponent,
			constants
		};
	}

	public registerFormEventHandler(name: string, handler: FormEventHandler): void {
		this.formEventHandlers[name] = handler;
	}

	public registerInputFieldEventHandler(name: string, handler: InputFieldEventHandler): void {
		this.inputFieldEventHandlers[name] = handler;
	}

	public registerOutputFieldEventHandler(name: string, handler: OutputFieldEventHandler): void {
		this.outputFieldEventHandlers[name] = handler;
	}

	public registerFunction(name: string, fn: IFunctionRunner): void {
		this.functions[name] = fn;
	}
}
