import * as umf from "uimf-core";
import { UmfApp } from "./UmfApp";

export class FormEventArguments {
    app: UmfApp;
    
	/**
	 * Represents the Form.html component to which the action-list belongs.
	 */
	form: any;

    constructor(app: UmfApp) {
        this.app = app;
    }
}

export class FormResponseEventArguments extends FormEventArguments {
    response: umf.FormResponse;

    constructor(app: UmfApp, response: umf.FormResponse) {
        super(app);

        this.response = response;
    }
}