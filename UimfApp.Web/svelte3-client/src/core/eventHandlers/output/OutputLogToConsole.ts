import type * as server from "core/server";
import * as framework from "core/framework";

export class OutputLogToConsole extends framework.OutputFieldEventHandler {
	public run(
		output: framework.OutputFieldValue,
		eventHandlerMetadata: server.EventHandlerMetadata,
		args: framework.FormEventArguments): Promise<void> {
		// tslint:disable-next-line:no-console
		console.log(`[${eventHandlerMetadata.runAt}] output event handler '${eventHandlerMetadata.id}' from '${output.metadata.id}'`);
		return Promise.resolve();
	}
}
