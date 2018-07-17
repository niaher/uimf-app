import * as alertifyLib from "alertifyjs";
import { IFunctionRunner } from "core-framework";
import * as umf from "uimf-core";
const alertify = alertifyLib.default;

export class Growl implements IFunctionRunner {
	public run(metadata: umf.ClientFunctionMetadata): Promise<void> {
		alertify.notify(metadata.customProperties.message, metadata.customProperties.style, 5);
		return Promise.resolve();
	}
}
