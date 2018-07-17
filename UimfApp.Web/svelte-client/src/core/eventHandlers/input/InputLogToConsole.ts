import * as umf from "uimf-core";
import {
	FormEventArguments,
	FormInstance,
	InputController,
	InputFieldEventHandler
} from "../../framework/index";

export class InputLogToConsole extends InputFieldEventHandler {
	public run(input: InputController<any>, eventHandlerMetadata: umf.EventHandlerMetadata, args: FormEventArguments): Promise<any> {
		return input.serialize().then((t) => {
			// tslint:disable-next-line:no-console
			console.log(`[${eventHandlerMetadata.runAt}] input event handler '${eventHandlerMetadata.id}' from '${input.metadata.id}'`);
		});
	}
}
