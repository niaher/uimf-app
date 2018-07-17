import { EventHandlerMetadata } from "uimf-core";
import { FormEventArguments } from "./FormEventArguments";
import { FormInstance } from "./FormInstance";

export abstract class FormEventHandler {
	public id: string;

	public abstract run(form: FormInstance, eventHandlerMetadata: EventHandlerMetadata, args: FormEventArguments): Promise<void>;
}
