import { FormInstance, IFormResponseHandler } from "core-framework";
import * as umf from "uimf-core";

export class RedirectResponseHandler implements IFormResponseHandler {
	public readonly name: string = "redirect";
	private readonly goToForm: (form: string, inputFieldValues: any) => void;

	constructor(goToForm: (form: string, inputFieldValues: any) => void) {
		this.goToForm = goToForm;
	}

	public handle(response: IRedirectResponse, form: FormInstance): void {
		this.goToForm(response.form, response.inputFieldValues);
	}
}

interface IRedirectResponse extends umf.FormResponse {
	/**
	 * Gets or sets name of the form to redirect to.
	 */
	form: string;

	/**
	 * Gets or sets values for the input fields of the form (i.e. - <see cref="FormMetadata.InputFields"/>).
	 */
	inputFieldValues: any;
}
