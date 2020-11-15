import type * as server from "core/server";

export class OutputFieldValue {
	constructor(
		metadata: server.OutputFieldMetadata,
		data: any) {
		this.metadata = metadata;
		this.data = data;
	}

	public metadata: server.OutputFieldMetadata;
	public data: any;
}
