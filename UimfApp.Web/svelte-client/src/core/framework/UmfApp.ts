import {
	ClientFunctionMetadata,
	FormMetadata,
	FormResponse,
	FormResponseMetadata } from "uimf-core";

import {
	ControlRegister,
	FormInstance,
	IAppRouter,
	IFormResponseHandler,
	Menu,
	MenuGroup,
	MenuItem,
	UmfServer } from "./index";

export class UmfApp implements IAppRouter {
	public forms: FormMetadata[];
	public menu: Menu;
	private formsById: { [id: string]: FormMetadata } = {};
	private eventHandlers: any[] = [];
	public readonly server: UmfServer;
	public readonly formResponseHandlers: { [id: string]: IFormResponseHandler } = {};
	public controlRegister: ControlRegister;
	public go: (form: string, values: any) => void;
	public makeUrl: (form: string, values: any) => string;

	constructor(server: UmfServer, controlRegister: ControlRegister) {
		this.server = server;
		this.controlRegister = controlRegister;

		for (const e of ["request:started", "request:completed"]) {
			this.server.on(e, (params) => {
				this.fire(e, params);
			});
		}
	}

	public on(event: string, handler: (params: any) => void): void {
		this.eventHandlers[event] = this.eventHandlers[event] || [];
		this.eventHandlers[event].push(handler);
	}

	private fire(event: string, params: any): void {
		const handlersForEvent = this.eventHandlers[event];
		if (handlersForEvent != null && handlersForEvent.length > 0) {
			for (const handler of handlersForEvent) {
				handler(params);
			}
		}
	}

	public useRouter(router: IAppRouter): void {
		this.go = (form: string, values: any) => {
			return router.go(form, values);
		};

		this.makeUrl = (form: string, values: any) => {
			return router.makeUrl(form, values);
		};
	}

	public registerResponseHandler(handler: IFormResponseHandler): void {
		this.formResponseHandlers[handler.name] = handler;
	}

	public load(): Promise<void> {
		return this.server.getAllMetadata()
			.then((response) => {
				this.forms = response.forms;
				this.menu = response.menu;

				this.formsById = {};

				for (const form of this.forms) {
					this.formsById[form.id] = new FormMetadata(form);
				}
			});
	}

	public getForm(id: string): FormMetadata {
		return this.formsById[id];
	}

	public getFormInstance(formId: string, throwError: boolean = false): FormInstance {
		const metadata = this.getForm(formId);

		if (metadata == null) {
			if (throwError) {
				throw Error(`Form ${formId} not found.`);
			}

			return null;
		}

		return new FormInstance(metadata, this.controlRegister);
	}

	public handleResponse(response: FormResponse, form: FormInstance, args: any): void {
		const responseMetadata = response.metadata || new FormResponseMetadata();
		const handler = this.formResponseHandlers[responseMetadata.handler || "default"];

		if (handler == null) {
			throw new Error(`Cannot find FormResponseHandler "${responseMetadata.handler}".`);
		}

		return handler.handle(response, form, args);
	}

	public runFunctions(functionMetadata: ClientFunctionMetadata[], eventArgs?: any): Promise<any> {
		if (functionMetadata == null) {
			return Promise.resolve();
		}

		const promises = [];
		for (const f of functionMetadata) {
			const handler = this.controlRegister.functions[f.id];

			if (handler == null) {
				throw new Error(`Could not find function '${f.id}'.`);
			}

			const promise = handler.run(f, eventArgs);
			promises.push(promise);
		}

		return Promise.all(promises);
	}
}
