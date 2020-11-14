import type * as server from "core/server";
import type { FormInstance } from "./FormInstance";

export interface IFormResponseHandler {
	readonly name: string;
	handle(response: server.FormResponse, form: FormInstance, args: any): void;
}
