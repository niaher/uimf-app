import { ClientFunctionMetadata } from "uimf-core";

export interface IFunctionRunner {
	run(params: ClientFunctionMetadata, args?: any): Promise<void>;
}