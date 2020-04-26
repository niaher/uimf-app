import * as umf from "../../framework";
import { ITypeaheadConfig } from "./TypeaheadInputController";

export class MultiSelectInputController 
	extends umf.InputController<MultiSelectValue> 
	implements ITypeaheadConfig 
{
	public maxItemCount = -1;

	serializeValue(value: MultiSelectValue | string): string {
		if (typeof (value) === "string") {
			return value;
		}

		return value != null ? (value.items || []).join(",") : null;
	}

	init(value: string): Promise<MultiSelectInputController> {
		return new Promise((resolve, reject) => {
			this.value = this.parse(value);
			resolve(this);
		});
	}

	getValue(): Promise<MultiSelectValue> {
		var valueToSubmit = this.value == null || this.value.items == null || this.value.items.length === 0
			? null
			: this.value;

		return Promise.resolve(valueToSubmit);
	}

	private parse(value: string): MultiSelectValue {
		return value == null || value == "" 
			? new MultiSelectValue() 
			: new MultiSelectValue(value.split(","));
	}
}

class MultiSelectValue {
	constructor(items?:any[]) {
		this.items = items;
	}

	items:any[] = [];
}