import * as umf from "uimf-core";
import { FormEventArguments } from "./FormEventArguments";
import { OutputFieldValue } from "./OutputFieldValue";

export abstract class OutputFieldEventHandler {
	public id: string;

	public abstract run(output: OutputFieldValue, eventHandlerMetadata: umf.EventHandlerMetadata, args: FormEventArguments): Promise<void>;
}
