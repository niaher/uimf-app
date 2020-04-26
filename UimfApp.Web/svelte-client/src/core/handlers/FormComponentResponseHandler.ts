import { FormInstance, IFormResponseHandler } from "../framework";
import * as umf from "uimf-core";

export class FormComponentResponseHandler implements IFormResponseHandler {
	public readonly name: string = "default";

	public handle(response: umf.FormResponse, form: FormInstance, args: any): void {
		if (args != null && args.formComponent != null) {
			args.formComponent.renderResponse(response);
		}
	}
}
