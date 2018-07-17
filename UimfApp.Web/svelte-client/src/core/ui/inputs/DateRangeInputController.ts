import * as umf from "core-framework";
import { DateInputController } from "./DateInputController";

export class DateRangeInputController extends umf.InputController<DateRange> {
	minValueAsText: string = null;
	maxValueAsText: string = null;

	init(value: string): Promise<DateRangeInputController> {
		return new Promise((resolve, reject) => {
			this.value = this.parse(value);

			if (this.value != null && this.value.min != null) {
				this.minValueAsText = DateInputController.serialize(this.value.min);
			}

			if (this.value != null && this.value.max != null) {
				this.maxValueAsText = DateInputController.serialize(this.value.max);
			}

			resolve(this);
		});
	}

	getValue(): Promise<DateRange> {
		return Promise.resolve(this.value);
	}

	serializeValue(date: DateRange | string): any {
		var parsed = this.parse(date);
		return parsed != null ? parsed.serialize() : "";
	}

	private parse(value: DateRange | string): DateRange {
		if (value == null) {
			return new DateRange();
		}

		return typeof (value) === "string"
			? DateRange.parse(value)
			: value;
	}
}

class DateRange {
	constructor(min:Date = null, max:Date = null) {
		this.min = min;
		this.max = max;
	}

	min: Date;
	max: Date;

	static parse(date:string): DateRange {
		var split = date.split("|");
		var minPart = DateInputController.parseDate(split[0]),
			maxPart = DateInputController.parseDate(split[1]);

		return new DateRange(minPart, maxPart);
	}

	serialize() {
		return `${DateInputController.serialize(this.min)}|${DateInputController.serialize(this.max)}`;
	}
}