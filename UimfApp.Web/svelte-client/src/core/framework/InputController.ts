import * as umf from "uimf-core";
import { InputFieldValue } from "./InputFieldValue";

export abstract class InputController<T> {
	public readonly metadata: umf.InputFieldMetadata;
	public value: T;

	constructor(metadata: umf.InputFieldMetadata) {
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
