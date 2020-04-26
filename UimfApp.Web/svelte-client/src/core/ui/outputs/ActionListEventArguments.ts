import { UmfApp, FormEventArguments } from "../../framework";

/**
 * Represents an event triggered by an action-list.
 */
export class ActionListEventArguments extends FormEventArguments {
	/**
	 * Id of the action from the action-list, with which the even is associated.
	 */
	actionFormId: string;

	constructor(app: UmfApp, actionFormId: string) {
		super(app);
		this.actionFormId = actionFormId;
	}
}