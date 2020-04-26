import { FormInstance, IFormResponseHandler } from "../framework";
import * as umf from "uimf-core";

export class MessageResponseHandler implements IFormResponseHandler {
	public readonly name: string = "message";

	public handle(response: umf.FormResponse, form: FormInstance): void {
		alert((response as any).message);
	}
}
