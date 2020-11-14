import type * as server from "core/server";

export abstract class InputController<T> {
	public readonly metadata: server.InputFieldMetadata;
	public value: T;

	constructor(metadata: server.InputFieldMetadata) {
		this.metadata = metadata;
	}

	public abstract serializeValue(value: T | string): string;
	public abstract init(value: string): Promise<InputController<T>>;
	public abstract getValue(): Promise<T>;

	public serialize(): Promise<{ value: string, input: InputController<T> }> {
		return this.getValue().then((t) => {
			const valueAsString = this.serializeValue(t);
			return {
				value: valueAsString,
				input: this
			};
		});
	}
}
