import type * as server from "core/server";
import * as framework from "core/framework";

export class BindToOutput extends framework.InputFieldEventHandler {
	public run(
		input: framework.InputController<any>, 
		eventHandler: server.EventHandlerMetadata, 
		args: framework.FormResponseEventArguments): Promise<any> {
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
