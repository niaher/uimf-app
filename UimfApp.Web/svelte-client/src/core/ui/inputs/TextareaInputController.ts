import * as umf from "core-framework";

export class TextareaInputController extends umf.InputController<Textarea> {
	public selected: string;

	public serializeValue(value: Textarea | string): string {
		if (typeof (value) === "string") {
			return value;
		}

		return value != null ? value.value : null;
	}

	public init(value: string): Promise<TextareaInputController> {
		return new Promise((resolve, reject) => {
			this.selected = value;
			this.value = this.parse(value);
			resolve(this);
		});
	}

	public getValue(): Promise<Textarea> {
		return Promise.resolve(this.parse(this.selected));
	}

	private parse(value: string): Textarea {
		return value == null || value === "" ? null : { value };
	}
}

// tslint:disable-next-line:max-classes-per-file
class Textarea {
	public value: string;
}
