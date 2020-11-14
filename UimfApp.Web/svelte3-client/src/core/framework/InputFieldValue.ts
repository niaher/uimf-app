import type * as server from "core/server";
import type { InputController } from "./InputController";

export class InputFieldValue {
	public metadata: server.InputFieldMetadata;
	public data: any;
	public serializedData: string;
	public controller: InputController<any>;
}
