import * as umf from "core-framework";
import { NumberInputController } from "core-ui/inputs/NumberInputController";

export class NumberRangeInputController extends umf.InputController<NumberRange> {
	public min: number = null;
	public max: number = null;

	public init(value: string): Promise<NumberRangeInputController> {
		return new Promise((resolve, reject) => {
			this.value = this.parse(value);
			resolve(this);
		});
	}

	public getValue(): Promise<NumberRange> {
		return Promise.resolve(this.value);
	}

	public serializeValue(num: NumberRange | string): any {
		const parsed = this.parse(num);
		return parsed != null ? parsed.serialize() : "";
	}

	private parse(value: NumberRange | string): NumberRange {
		if (value == null) {
			return new NumberRange();
		}

		return typeof (value) === "string"
			? NumberRange.parse(value)
			: value;
	}
}

// tslint:disable-next-line:max-classes-per-file
class NumberRange {
	constructor(min: number = null, max: number = null) {
		this.min = min;
		this.max = max;
	}

	public min: number;
	public max: number;

	public static parse(range: string): NumberRange {
		const split = range.split("|");
		const minValue = parseFloat(split[0]);
		const maxValue = parseFloat(split[1]);

		return new NumberRange(minValue, maxValue);
	}

	public serialize(): string {
		return `${NumberInputController.serialize(this.min)}|${NumberInputController.serialize(this.max)}`;
	}
}
