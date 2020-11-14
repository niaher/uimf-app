import type * as server from "core/server";
import type { UmfApp } from "./UmfApp";
import { FormEventArguments } from "./FormEventArguments";

export class FormResponseEventArguments extends FormEventArguments {
	public response: server.FormResponse;

	constructor(app: UmfApp, response: server.FormResponse) {
		super(app);

		this.response = response;
	}
}
