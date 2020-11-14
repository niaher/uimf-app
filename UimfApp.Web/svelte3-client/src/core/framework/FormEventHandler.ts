import type * as server from "core/server";
import type { FormEventArguments } from "./FormEventArguments";
import type { FormInstance } from "./FormInstance";

export abstract class FormEventHandler {
	public id: string;

	public abstract run(
		form: FormInstance,
		eventHandlerMetadata: server.EventHandlerMetadata,
		args: FormEventArguments): Promise<void>;
}
