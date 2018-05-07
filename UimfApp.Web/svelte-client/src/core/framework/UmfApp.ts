import { FormMetadata, FormResponse, FormResponseMetadata, ClientFunctionMetadata } from "uimf-core";
import { UmfServer } from "./UmfServer";
import { FormInstance } from "./FormInstance";
import { IFormResponseHandler } from "./IFormResponseHandler";
import { InputFieldValue } from "./InputFieldValue";
import { ControlRegister } from "./ControlRegister";
import { IAppRouter } from "./IAppRouter";
import { MenuMetadata } from "./MenuMetadata";

export class UmfApp implements IAppRouter {
	forms: FormMetadata[];
	menus: MenuMetadata[];
	private formsById: { [id: string]: FormMetadata } = {};
	private menusByName: { [id: string]: MenuMetadata } = {};
	private eventHandlers = [];
	public readonly server: UmfServer;
	public readonly formResponseHandlers: { [id: string]: IFormResponseHandler } = {};
	public controlRegister: ControlRegister;
	go: (form: string, values: any) => void;
	makeUrl: (form: string, values: any) => string;

	constructor(server: UmfServer, inputRegister: ControlRegister) {
		this.server = server;
		this.controlRegister = inputRegister;

		for (let e of ["request:started", "request:completed"]) {
			this.server.on(e, params => {
				this.fire(e, params);
			});
		}
	}

	on(event: string, handler: (params: any) => void) {
		this.eventHandlers[event] = this.eventHandlers[event] || [];
		this.eventHandlers[event].push(handler);
	}

	private fire(event: string, params: any) {
		var handlersForEvent = this.eventHandlers[event];
		if (handlersForEvent != null && handlersForEvent.length > 0) {
			for (let handler of handlersForEvent) {
				handler(params);
			}
		}
	}

	useRouter(router: IAppRouter) {
		this.go = (form: string, values: any) => {
			return router.go(form, values);
		}

		this.makeUrl = (form: string, values: any) => {
			return router.makeUrl(form, values);
		}
	}

	registerResponseHandler(handler: IFormResponseHandler) {
		this.formResponseHandlers[handler.name] = handler;
	}

	load() {
		return this.server.getAllMetadata()
			.then(response => {
				this.forms = response.forms;
				this.menus = response.menus;

				this.formsById = {};
				this.menusByName = {};

				for (let form of this.forms) {
					this.formsById[form.id] = new FormMetadata(form);
				}

				for (let menu of this.menus) {
					this.menusByName[menu.name] = menu;
				}
			});
	}

	getForm(id: string): FormMetadata {
		return this.formsById[id];
	}

	getMenu(name: string): MenuMetadata {
		return this.menusByName[name];
	}

	getFormInstance(formId: string, throwError: boolean = false): FormInstance {
		let metadata = this.getForm(formId);

		if (metadata == null) {
			if (throwError) {
				var error = Error(`Form ${formId} not found.`);
				console.error(error);
				throw error;
			}

			return null;
		}

		return new FormInstance(metadata, this.controlRegister);
	}

	handleResponse(response: FormResponse, form: FormInstance, args: any) {
		var responseMetadata = response.metadata || new FormResponseMetadata();
		var handler = this.formResponseHandlers[responseMetadata.handler || "default"];

		if (handler == null) {
			var error = new Error(`Cannot find FormResponseHandler "${responseMetadata.handler}".`);
			console.error(error);
			throw error;
		}

		return handler.handle(response, form, args);
	}

	runFunctions(functionMetadata: ClientFunctionMetadata[], eventArgs?: any) {
		if (functionMetadata == null) {
			return Promise.resolve();
		}

		let promises = [];
		for (let f of functionMetadata) {
			let handler = this.controlRegister.functions[f.id];

			if (handler == null) {
				throw new Error(`Could not find function '${f.id}'.`);
			}

			let promise = handler.run(f, eventArgs);
			promises.push(promise);
		}

		return Promise.all(promises);
	}
}