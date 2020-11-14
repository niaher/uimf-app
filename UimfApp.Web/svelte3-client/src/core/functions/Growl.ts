import type * as framework from "core/framework";
import type * as server from "core/server";

export class Growl implements framework.IFunctionRunner {
	public run(metadata: server.ClientFunctionMetadata): Promise<void> {
		window.alert(metadata.customProperties.message);
		return Promise.resolve();
	}
}
