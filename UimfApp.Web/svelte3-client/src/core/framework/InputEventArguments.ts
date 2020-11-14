import { FormEventArguments } from "./FormEventArguments";
import type { UmfApp } from "./UmfApp";

export class InputEventArguments extends FormEventArguments {
	/**
	 * Represents the input component (e.g. - text.html) which triggered the event.
	 */
	public input: any;

	constructor(app: UmfApp, input: any) {
		super(app);

		this.input = input;
	}
}
