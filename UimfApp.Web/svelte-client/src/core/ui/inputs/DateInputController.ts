import * as umf from "../../framework";

export class DateInputController extends umf.InputController<Date> {
	valueAsText: string = null;

	init(value: string): Promise<DateInputController> {
		return new Promise((resolve, reject) => {
			this.value = DateInputController.parseDate(value);
			this.valueAsText = this.serializeValue(this.value);

			resolve(this);
		});
	}

	getValue(): Promise<Date> {
		return Promise.resolve(this.value);
	}

	serializeValue(date: Date | string): string {
		return DateInputController.serialize(date);
	}

	public static serialize(date: Date | string): string {
		var asDate = typeof (date) === "string"
			? DateInputController.parseDate(date)
			: date;

		return asDate != null
			? `${asDate.getFullYear()}-${DateInputController.format2DecimalPlaces(asDate.getMonth() + 1)}-${DateInputController.format2DecimalPlaces(asDate.getDate())}`
			: null;
	}

	public static parseDate(value: string): Date {
		let selectedDate = this.asUtcTime(value, 7, 0, 0);
		if (selectedDate) {
			let dateAsNumber = Date.parse(selectedDate.toString());
			return isNaN(dateAsNumber) ? null : new Date(dateAsNumber);
		}
	}

	public static asUtcTime(date, hour, min, second) {
		/// <summary>Returns provided date as if it was UTC date.</summary>
		/// <param name="date">Local date/time.</param>
		/// <returns type="Date">Date object.</returns>
		if (date == null) {
			return null;
		}

		// If string but not UTC.
		if (typeof (date) === "string" && date[date.length - 1] !== "Z") {
			let year = parseInt(date.substr(0, 4)),
				month = parseInt(date.substr(5, 2)),
				day = parseInt(date.substr(8, 2));

			// Assume UTC.
			return this.getIsoDate(year, month, day, hour, min, second);
		}

		var datepart = new Date(new Date(date).toISOString());


		return this.getIsoDate(datepart.getFullYear(), datepart.getMonth() + 1, datepart.getDate(), hour, min, second)
	}
	private static getIsoDate(year, month, day, hour, min, second): Date {
		var iso = year +
			"-" + // year
			this.format2DecimalPlaces(month) +
			"-" + // month
			this.format2DecimalPlaces(day) + // day
			"T" +
			this.format2DecimalPlaces(hour) +
			":" +
			this.format2DecimalPlaces(min) +
			":" +
			this.format2DecimalPlaces(second) +
			".000Z";
		return new Date(iso);
	}
	public static format2DecimalPlaces(n) {
		return ("0" + n).slice(-2);
	}
}