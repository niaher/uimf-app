import * as umf from "uimf-core";
import {
	InputController,
	InputEventArguments,
	InputFieldEventHandler
} from "../../framework/index";

export class DependOn extends InputFieldEventHandler {
	public run(input: InputController<any>, eventHandlerMetadata: umf.EventHandlerMetadata, args: InputEventArguments): Promise<any> {
		const subscribedToField = eventHandlerMetadata.customProperties.field;
		const fieldChanged = args.input.get("field").metadata.id;

		if (subscribedToField === fieldChanged) {
			return input.serialize().then((t) => {
				const parentInputController = args.input.get("field");

				const childWrapper = args.form.getInputComponent(input.metadata.id);

				const childShouldBeVisible = ["typeahead", "dropdown"].indexOf(parentInputController.metadata.type) !== -1
					? parentInputController.value != null && parentInputController.value.value != null
					: parentInputController.value != null;

				childWrapper.show(childShouldBeVisible);
			});
		}

		return Promise.resolve();
	}
}
