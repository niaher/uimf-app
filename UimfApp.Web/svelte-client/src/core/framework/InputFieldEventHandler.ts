import { EventHandlerMetadata } from "uimf-core";
import { FormEventArguments } from "./FormEventArguments";
import { InputController } from "./InputController";

export abstract class InputFieldEventHandler {
	public id: string;

	public abstract run(input: InputController<any>, eventHandlerMetadata: EventHandlerMetadata, args: FormEventArguments): Promise<InputController<any>>;
}
