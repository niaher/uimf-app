import * as umf from "core-framework";

export interface ITypeaheadConfig {
	maxItemCount: number;
}

export class TypeaheadInputController
	extends umf.InputController<TypeaheadValue>
	implements ITypeaheadConfig {
	public maxItemCount: number = 1;

	public serializeValue(value: TypeaheadValue | string): string {
		if (typeof (value) === "string") {
			return value;
		}

		return value != null ? value.value : null;
	}

	public init(value: string): Promise<TypeaheadInputController> {
		return new Promise((resolve, reject) => {
			this.value = this.parse(value);
			resolve(this);
		});
	}

	public getValue(): Promise<TypeaheadValue> {
		const valueToSubmit = this.value == null || this.value.value == null
			? null
			: this.value;

		return Promise.resolve(valueToSubmit);
	}

	private parse(value: string): TypeaheadValue {
		return value == null || value === ""
			? new TypeaheadValue()
			: new TypeaheadValue(value);
	}
}

// tslint:disable-next-line:max-classes-per-file
class TypeaheadValue {
	constructor(value?: any) {
		this.value = value;
	}

	public value: any;
}
