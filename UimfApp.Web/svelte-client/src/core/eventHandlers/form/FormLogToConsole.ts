import { EventHandlerMetadata } from "uimf-core";
import {
	FormEventArguments,
	FormEventHandler,
	FormInstance
} from "../../framework/index";

export class FormLogToConsole extends FormEventHandler {
	public run(form: FormInstance, eventHandlerMetadata: EventHandlerMetadata, args: FormEventArguments): Promise<void> {
		// tslint:disable-next-line:no-console
		console.log(`[${eventHandlerMetadata.runAt}] form event handler '${eventHandlerMetadata.id}' from '${form.metadata.id}'`);
		return Promise.resolve();
	}
}
