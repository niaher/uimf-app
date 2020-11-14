import type * as framework from "core/framework";
import type * as server from "core/server";

export class MessageResponseHandler implements framework.IFormResponseHandler {
	public readonly name: string = "message";

	public handle(response: server.FormResponse, form: framework.FormInstance): void {
		alert((response as any).message);
	}
}
