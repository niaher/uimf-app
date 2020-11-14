import type * as framework from "core/framework";
import type * as server from "core/server";

export class RedirectResponseHandler implements framework.IFormResponseHandler {
	public readonly name: string = "redirect";
	private readonly goToForm: (form: string, inputFieldValues: any) => void;

	constructor(goToForm: (form: string, inputFieldValues: any) => void) {
		this.goToForm = goToForm;
	}

	public handle(response: IRedirectResponse, form: framework.FormInstance): void {
		this.goToForm(response.form, response.inputFieldValues);
	}
}

interface IRedirectResponse extends server.FormResponse {
	/**
	 * Gets or sets name of the form to redirect to.
	 */
	form: string;

	/**
	 * Gets or sets values for the input fields of the form (i.e. - <see cref="FormMetadata.InputFields"/>).
	 */
	inputFieldValues: any;
}
