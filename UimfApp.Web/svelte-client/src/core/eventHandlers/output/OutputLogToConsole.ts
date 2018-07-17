import { EventHandlerMetadata } from "uimf-core";
import {
	FormEventArguments,
	OutputFieldEventHandler,
	OutputFieldValue
} from "../../framework/index";

export class OutputLogToConsole extends OutputFieldEventHandler {
	public run(output: OutputFieldValue, eventHandlerMetadata: EventHandlerMetadata, args: FormEventArguments): Promise<void> {
		// tslint:disable-next-line:no-console
		console.log(`[${eventHandlerMetadata.runAt}] output event handler '${eventHandlerMetadata.id}' from '${output.metadata.id}'`);
		return Promise.resolve();
	}
}
