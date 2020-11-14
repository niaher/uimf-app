import type * as server from "core/server";
import * as framework from "core/framework";

export class FormLogToConsole extends framework.FormEventHandler {
	public run(
		form: framework.FormInstance,
		eventHandlerMetadata: server.EventHandlerMetadata,
		args: framework.FormEventArguments): Promise<void> {
		// tslint:disable-next-line:no-console
		console.log(`[${eventHandlerMetadata.runAt}] form event handler '${eventHandlerMetadata.id}' from '${form.metadata.id}'`);
		return Promise.resolve();
	}
}
