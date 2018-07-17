import * as umf from "core-framework";

export class PasswordInputController extends umf.InputController<Password> {
	public selected: string;

	public serializeValue(value: Password | string): string {
		if (typeof (value) === "string") {
			return value;
		}

		return value != null ? value.value : null;
	}

	public init(value: string): Promise<PasswordInputController> {
		return new Promise((resolve, reject) => {
			this.selected = value;
			this.value = this.parse(value);
			resolve(this);
		});
	}

	public getValue(): Promise<Password> {
		return Promise.resolve(this.parse(this.selected));
	}

	private parse(value: string): Password {
		return value == null || value === "" ? null : { value };
	}
}

// tslint:disable-next-line:max-classes-per-file
class Password {
	public value: string;
}
