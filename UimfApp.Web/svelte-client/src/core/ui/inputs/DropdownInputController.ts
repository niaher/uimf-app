import * as umf from "core-framework";

export class DropdownInputController extends umf.InputController<DropdownValue> {
	public selected: string;

	public serializeValue(value: DropdownValue | string): string {
		if (typeof (value) === "string") {
			return value;
		}

		return value != null ? value.value : null;
	}

	public init(value: string): Promise<DropdownInputController> {
		return new Promise((resolve, reject) => {
			this.selected = value != null ? value.toString() : null;

			this.value = this.parse(value);
			resolve(this);
		});
	}

	public getValue(): Promise<DropdownValue> {
		return Promise.resolve(this.parse(this.selected));
	}

	public initFromSelected(): void {
		this.value = this.parse(this.selected);
	}

	private parse(value: string): DropdownValue {
		return value == null || value === "" ? null : { value };
	}
}

// tslint:disable-next-line:max-classes-per-file
class DropdownValue {
	public value: string;
}
