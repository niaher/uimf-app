import type * as server from "core/server";

export interface IFunctionRunner {
	run(params: server.ClientFunctionMetadata, args?: any): Promise<void>;
}
