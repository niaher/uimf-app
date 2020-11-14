import type * as framework from "core/framework";
import type * as server from "core/server";

export class FormComponentResponseHandler implements framework.IFormResponseHandler {
	public readonly name: string = "default";

	public handle(response: server.FormResponse, form: framework.FormInstance, args: any): void {
		if (args != null && args.formComponent != null) {
			args.formComponent.renderResponse(response);
		}
	}
}
