import * as umf from "core-framework";

export class EmailInputController extends umf.InputController<Email> {
	selected: string;

	serializeValue(value: Email | string): string {
		if (typeof (value) === "string") {
			return value;
		}

		return value != null ? value.value : null;
	}

	init(value: string): Promise<EmailInputController> {
		return new Promise((resolve, reject) => {
			this.selected = value;
			this.value = this.parse(value);
			resolve(this);
		});
	}

	getValue(): Promise<Email> {
		return Promise.resolve(this.parse(this.selected));
	}

	private parse(value: string): Email {
		return value == null || value == "" ? null : Email.parse(value);
	}
}

class Email {
	constructor(value: string = null) {
		this.value = value;
	}
	static parse(value: string): Email {
		return new Email(value);
	}
	value: string;
}