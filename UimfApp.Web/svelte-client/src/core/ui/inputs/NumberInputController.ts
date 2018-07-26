import * as umf from "core-framework";

export class NumberInputController extends umf.InputController<number> {
	public serializeValue(value: number | string): string {
		return NumberInputController.serialize(value);
	}

	public init(value: string): Promise<NumberInputController> {
		return new Promise((resolve, reject) => {
			const v = parseFloat(value);
			this.value = isNaN(v) ? null : v;
			resolve(this);
		});
	}

	public getValue(): Promise<number> {
		return Promise.resolve(this.value);
	}

	public static serialize(value: number | string): string {
		return value != null ? value.toString() : null;
	}
}
