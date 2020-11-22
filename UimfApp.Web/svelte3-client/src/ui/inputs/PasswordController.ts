import { InputController, OutputControlConfiguration } from "core/framework";
import { controlRegister } from "../Register";
import Password from "./Password.svelte";

export default class PasswordInputController extends InputController<PasswordValue> {
	public selected: string;

	public serializeValue(value: PasswordValue | string): string {
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

	public getValue(): Promise<PasswordValue> {
		return Promise.resolve(this.parse(this.selected));
	}

	private parse(value: string): PasswordValue {
		return value == null || value === "" ? null : { value };
	}
}

// tslint:disable-next-line:max-classes-per-file
class PasswordValue {
	public value: string;
}

controlRegister.registerInputFieldControl(
	"password", 
	Password, 
	PasswordInputController, 
	new OutputControlConfiguration(false, false));