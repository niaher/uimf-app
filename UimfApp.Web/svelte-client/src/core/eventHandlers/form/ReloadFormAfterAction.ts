import { ActionListEventArguments } from "../../ui/outputs/ActionListEventArguments";
import { EventHandlerMetadata } from "uimf-core";
import { FormEventHandler, FormInstance } from "../../framework/index";

/**
 * Reloads form after an action.
 */
export class ReloadFormAfterAction extends FormEventHandler {
	public run(form: FormInstance, eventHandlerMetadata: EventHandlerMetadata, args: ActionListEventArguments): Promise<void> {
		const isTopLevelForm = args.form.get("parent") == null;

		if (isTopLevelForm && eventHandlerMetadata.customProperties.formId === args.actionFormId) {
			args.form.submit(args.app, form, null, false);
		}

		return Promise.resolve();
	}
}
