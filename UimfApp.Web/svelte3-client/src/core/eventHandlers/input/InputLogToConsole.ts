import type * as server from "core/server";
import * as framework from "core/framework";

export class InputLogToConsole extends framework.InputFieldEventHandler {
	public run(
		input: framework.InputController<any>,
		eventHandlerMetadata: server.EventHandlerMetadata,
		args: framework.FormEventArguments): Promise<any> {

		return input.serialize().then((t) => {
			// tslint:disable-next-line:no-console
			console.log(`[${eventHandlerMetadata.runAt}] input event handler '${eventHandlerMetadata.id}' from '${input.metadata.id}'`);
		});
	}
}
