import * as umf from "core-framework";

export class BooleanInputController extends umf.InputController<boolean> {
	public serializeValue(value: boolean | string): string {
		const parsed = this.parse(value);
		return parsed != null ? parsed.toString() : null;
	}

	public init(value: string): Promise<BooleanInputController> {
		return new Promise((resolve, reject) => {
			this.value = this.parse(value);
			resolve(this);
		});
	}

	public getValue(): Promise<boolean> {
		return Promise.resolve(this.parse(this.value));
	}

	private parse(value: any): boolean {
		return value != null && value.toString() !== ""
			? value.toString() === "true"
			: this.metadata.required ? false : null;
	}
}
