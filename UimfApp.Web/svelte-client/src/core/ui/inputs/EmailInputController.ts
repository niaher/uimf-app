import * as umf from "core-framework";

export class EmailInputController extends umf.InputController<Email> {
	public selected: string;

	public serializeValue(value: Email | string): string {
		if (typeof (value) === "string") {
			return value;
		}

		return value != null ? value.value : null;
	}

	public init(value: string): Promise<EmailInputController> {
		return new Promise((resolve, reject) => {
			this.selected = value;
			this.value = this.parse(value);
			resolve(this);
		});
	}

	public getValue(): Promise<Email> {
		return Promise.resolve(this.parse(this.selected));
	}

	private parse(value: string): Email {
		return value == null || value === "" ? null : Email.parse(value);
	}
}

// tslint:disable-next-line:max-classes-per-file
class Email {
	constructor(value: string = null) {
		this.value = value;
	}
	public static parse(value: string): Email {
		return new Email(value);
	}
	public value: string;
}
