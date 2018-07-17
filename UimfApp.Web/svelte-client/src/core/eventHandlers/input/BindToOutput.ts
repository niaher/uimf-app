import * as umf from "uimf-core";
import {
	FormResponseEventArguments,
	InputController,
	InputFieldEventHandler
} from "../../framework/index";

export class BindToOutput extends InputFieldEventHandler {
	public run(input: InputController<any>, eventHandler: umf.EventHandlerMetadata, args: FormResponseEventArguments): Promise<any> {
		const promises = [];

		const lowercaseInputId = eventHandler.customProperties.outputFieldId.toLowerCase();

		for (const prop in args.response) {
			if (args.response.hasOwnProperty(prop) && prop.toLowerCase() === lowercaseInputId) {
				const serializedValue = input.serializeValue(args.response[prop]);
				const promise = input.init(serializedValue);

				promises.push(promise);
				break;
			}
		}

		return Promise.all(promises);
	}
}
