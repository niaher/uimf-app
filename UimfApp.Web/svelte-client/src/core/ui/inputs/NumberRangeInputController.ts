import * as umf from "core-framework";
import { NumberInputController } from "./NumberInputController";

export class NumberRangeInputController extends umf.InputController<NumberRange> {
	min: number = null;
	max: number = null;

	init(value: string): Promise<NumberRangeInputController> {
		return new Promise((resolve, reject) => {
			this.value = this.parse(value);
			resolve(this);
		});
	}

	getValue(): Promise<NumberRange> {
		return Promise.resolve(this.value);
	}

	serializeValue(number: NumberRange | string): any {
		var parsed = this.parse(number);
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

class NumberRange {
	constructor(min: number = null, max: number = null) {
		this.min = min;
		this.max = max;
	}

	min: number;
	max: number;

	static parse(range: string): NumberRange {
		var split = range.split("|");
		var minValue = parseFloat(split[0]),
			maxValue = parseFloat(split[1]);

		return new NumberRange(minValue, maxValue);
	}

	serialize() {
		return `${NumberInputController.serialize(this.min)}|${NumberInputController.serialize(this.max)}`;
	}
}