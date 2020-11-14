import type * as framework from "core/framework";
import type * as server from "core/server";

export class ReloadResponseHandler implements framework.IFormResponseHandler {
	public readonly name: string = "reload";
	private readonly getFormUrl: (form: string, inputFieldValues: any) => Promise<string>;

	constructor(getFormUrl: (form: string, inputFieldValues: any) => Promise<string>) {
		this.getFormUrl = getFormUrl;
	}

	public handle(response: IReloadResponse, form: framework.FormInstance): void {
		this.getFormUrl(response.form, response.inputFieldValues).then((url) => {
			window.location.href = url;
		});
	}
}

interface IReloadResponse extends server.FormResponse {
	/**
	 * Gets or sets name of the form to redirect to.
	 */
	form: string;

	/**
	 * Gets or sets values for the input fields of the form (i.e. - <see cref="FormMetadata.InputFields"/>).
	 */
	inputFieldValues: any;
}
