import { InputController, OutputControlConfiguration } from "core/framework";
import type { InputFieldMetadata } from "core/server";
import { controlRegister } from "../Register";
import Text from "./Text.svelte";

export default class StringInputController extends InputController<string> {
	constructor(metadata: InputFieldMetadata) {
		super(metadata);
	}

	public serializeValue(value: string): string {
		// Ensure we don't return "undefined", but return null instead.
		return value != null ? value.toString() : null;
	}

	public init(value: string): Promise<StringInputController> {
		this.value = value;
		return Promise.resolve(this);
	}

	public getValue(): Promise<string> {
		return Promise.resolve(this.value);
	}
}

controlRegister.registerInputFieldControl(
	"text", 
	Text, 
	StringInputController, 
	new OutputControlConfiguration(false, false));