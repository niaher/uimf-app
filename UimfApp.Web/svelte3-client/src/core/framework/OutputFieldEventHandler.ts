import type * as server from "core/server";
import type { FormEventArguments } from "./FormEventArguments";
import type { OutputFieldValue } from "./OutputFieldValue";

export abstract class OutputFieldEventHandler {
	public id: string;

	public abstract run(
		output: OutputFieldValue, 
		eventHandlerMetadata: server.EventHandlerMetadata, 
		args: FormEventArguments): Promise<void>;
}
