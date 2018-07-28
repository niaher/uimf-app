import * as umf from "uimf-core";
import { ControlRegister } from "./ControlRegister";
import { FormEventArguments } from "./FormEventArguments";
import { FormResponseEventArguments } from "./FormResponseEventArguments";
import { InputController } from "./InputController";
import { OutputFieldValue } from "./OutputFieldValue";
import { UmfApp } from "./UmfApp";

export class FormInstance {
	public readonly metadata: umf.FormMetadata;
	public outputs: OutputFieldValue[] = [];
	public inputs: Array<InputController<any>> = [];

	constructor(metadata: umf.FormMetadata, controlRegister: ControlRegister) {
		this.metadata = new umf.FormMetadata(metadata);
		this.inputs = controlRegister.createInputControllers(this.metadata.inputFields);
	}

	private enforceCanPostOnLoad(): void {
		// If user is trying to auto-submit a form which is not enabled for `PostOnLoad`.
		if (!this.metadata.postOnLoad) {
			throw new Error(`Invalid invocation of form '${this.metadata.id}'. Form cannot be auto-posted, because *PostOnLoad* is set to false.`);
		}
	}

	public async allRequiredInputsHaveData(asPostOnLoad: boolean): Promise<boolean> {
		if (asPostOnLoad) {
			this.enforceCanPostOnLoad();
		}

		const formData = await this.getFormData(asPostOnLoad);

		return formData != null;
	}

	public async submit(app: UmfApp, asPostOnLoad: boolean, args: any): Promise<umf.FormResponse> {
		if (asPostOnLoad) {
			this.enforceCanPostOnLoad();
		}

		const formData = await this.getFormData(asPostOnLoad);

		// If not all required inputs are filled.
		if (formData == null) {
			throw new Error(`Form '${this.metadata.id}' cannot be submitted, because some required input fields do not have values.`);
		}

		await this.fire("form:posting", new FormEventArguments(app));

		const response = await app.server.postForm(this.metadata.id, formData);
		await this.fire("form:responseReceived", new FormResponseEventArguments(app, response));

		this.setOutputFieldValues(response);

		// Null response is treated as a server-side error.
		if (response == null) {
			throw new Error(`Received null response.`);
		}

		await app.runFunctions(response.metadata.functionsToRun);
		app.handleResponse(response, this, args);

		await this.fire("form:responseHandled", new FormResponseEventArguments(app, response));

		return response;
	}

	public initializeInputFields(data: any): Promise<Array<InputController<any>>> {
		const promises: Array<Promise<InputController<any>>> = [];

		for (const fieldMetadata of this.inputs) {
			let value = null;

			if (data != null) {
				for (const prop of Object.keys(data)) {
					if (prop.toLowerCase() === fieldMetadata.metadata.id.toLowerCase()) {
						value = data[prop];
						break;
					}
				}
			}

			promises.push(fieldMetadata.init(value));
		}

		return Promise.all(promises);
	}

	public setInputFields(data: any): void {
		for (const field of this.inputs) {
			field.value = data[field.metadata.id];
		}
	}

	public getSerializedInputValues(): Promise<any> {
		const data = {};
		const promises = [];

		for (const input of this.inputs) {
			const promise = input.serialize().then((t) => {
				// Don't include inputs without values, because we only
				// want to serialize "non-default" values.
				if (t.value != null && t.value !== "") {
					data[input.metadata.id] = t.value;
				}
			});

			promises.push(promise);
		}

		return Promise.all(promises).then(() => data);
	}

	public getSerializedInputValuesFromObject(value: any): any {
		const data = {};

		if (value == null || data === undefined) {
			return data;
		}

		const normalizedObject = {};
		for (const prop of Object.keys(value)) {
			normalizedObject[prop.toLowerCase()] = value[prop];
		}

		for (const input of this.inputs) {
			const valueAsString = input.serializeValue(normalizedObject[input.metadata.id.toLowerCase()]);

			// Don't include inputs without values, because we only
			// want to serialize "non-default" values.
			if (valueAsString != null && valueAsString !== "") {
				data[input.metadata.id] = valueAsString;
			}
		}

		return data;
	}

	public static getOutputFieldValues(outputFieldsMetadata: umf.OutputFieldMetadata[], response: any): OutputFieldValue[] {
		const fields = Array<OutputFieldValue>();

		const normalizedResponse = FormInstance.getNormalizedObject(response);

		for (const field of outputFieldsMetadata) {
			const normalizedId = field.id.toLowerCase();

			fields.push({
				metadata: field,
				data: normalizedResponse[normalizedId]
			});
		}

		fields.sort((a: OutputFieldValue, b: OutputFieldValue) => {
			return a.metadata.orderIndex - b.metadata.orderIndex;
		});

		return fields;
	}

	public setOutputFieldValues(response: umf.FormResponse): void {
		if (response == null) {
			this.outputs = [];
			return;
		}

		const fields = Array<OutputFieldValue>();

		const normalizedResponse = FormInstance.getNormalizedObject(response);

		for (const field of this.metadata.outputFields) {
			fields.push({
				metadata: field,
				data: normalizedResponse[field.id.toLowerCase()]
			});
		}

		fields.sort((a: OutputFieldValue, b: OutputFieldValue) => {
			return a.metadata.orderIndex - b.metadata.orderIndex;
		});

		this.outputs = fields;
	}

	public async handleEvent(eventName: string, eventMetadata: umf.EventHandlerMetadata, parameters: FormEventArguments): Promise<void> {
		await this.fire(eventName, parameters);
	}

	private async fire(eventName: string, parameters: FormEventArguments): Promise<void> {
		const promises = [];

		// Run input event handlers.
		for (const input of this.inputs) {
			if (input.metadata.eventHandlers != null) {
				for (const eventHandlerMetadata of input.metadata.eventHandlers) {
					if (eventHandlerMetadata.runAt === eventName) {
						const handler = parameters.app.controlRegister.inputFieldEventHandlers[eventHandlerMetadata.id];
						if (handler == null) {
							throw new Error(`Could not find input event handler '${eventHandlerMetadata.id}'.`);
						}

						const promise = handler.run(input, eventHandlerMetadata, parameters);
						promises.push(promise);
					}
				}
			}
		}

		// Run output event handlers.
		for (const output of this.outputs) {
			if (output.metadata.eventHandlers != null) {
				for (const eventHandlerMetadata of output.metadata.eventHandlers) {
					if (eventHandlerMetadata.runAt === eventName) {
						const handler = parameters.app.controlRegister.outputFieldEventHandlers[eventHandlerMetadata.id];
						if (handler == null) {
							throw new Error(`Could not find output event handler '${eventHandlerMetadata.id}'.`);
						}

						const promise = handler.run(output, eventHandlerMetadata, parameters);
						promises.push(promise);
					}
				}
			}
		}

		// Run form event handlers.
		this.metadata.eventHandlers
			.filter((t) => t.runAt === eventName)
			.forEach((t) => {
				const handler = parameters.app.controlRegister.formEventHandlers[t.id];
				if (handler == null) {
					throw new Error(`Could not find form event handler '${t.id}'.`);
				}

				const promise = handler.run(this, t, parameters);
				promises.push(promise);
			});

		await Promise.all(promises);
	}

	private async getFormData(asPostOnLoad: boolean): Promise<any> {
		const data = {};
		const promises = [];
		let hasRequiredMissingInput = false;

		for (const input of this.inputs) {
			const promise = input.getValue().then((value) => {
				data[input.metadata.id] = value;

				if (input.metadata.required && (value == null || (typeof (value) === "string" && value === ""))) {
					hasRequiredMissingInput = true;
				}
			});

			promises.push(promise);
		}

		await Promise.all(promises);

		const skipValidation =
			!this.metadata.postOnLoadValidation &&
			this.metadata.postOnLoad &&
			// if initialization of the form, i.e. - first post.
			asPostOnLoad;

		// If not all required inputs were entered, then do not post.
		if (hasRequiredMissingInput &&
			!skipValidation) {
			return null;
		}

		return data;
	}

	private static getNormalizedObject(response: umf.FormResponse): any {
		const normalizedResponse = {};
		for (const field of Object.keys(response)) {
			if (field !== "metadata") {
				normalizedResponse[field.toLowerCase()] = response[field];
			}
		}

		return normalizedResponse;
	}
}
