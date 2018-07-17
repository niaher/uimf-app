import * as umf from "uimf-core";
import {FormEventArguments} from "./FormEventArguments";
import { UmfApp } from "./UmfApp";

export class FormResponseEventArguments extends FormEventArguments {
	public response: umf.FormResponse;

	constructor(app: UmfApp, response: umf.FormResponse) {
		super(app);

		this.response = response;
	}
}
