import type * as server from "core/server";
import type { FormEventArguments } from "./FormEventArguments";
import type { InputController } from "./InputController";

export abstract class InputFieldEventHandler {
	public id: string;

	public abstract run(
		input: InputController<any>,
		eventHandlerMetadata: server.EventHandlerMetadata,
		args: FormEventArguments): Promise<InputController<any>>;
}
