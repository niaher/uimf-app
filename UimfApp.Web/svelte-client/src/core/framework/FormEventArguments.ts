import { UmfApp } from "./UmfApp";

export class FormEventArguments {
	public app: UmfApp;

	/**
	 * Represents the Form.html component to which the action-list belongs.
	 */
	public form: any;

	constructor(app: UmfApp) {
		this.app = app;
	}
}
