import { OutputControlConfiguration, StringInputController } from "core/framework";
import { controlRegister } from "../Register";
import Text from "./Text.svelte";

export default class TextInputController extends StringInputController {
}

controlRegister.registerInputFieldControl(
	"text", 
	Text, 
	TextInputController, 
	new OutputControlConfiguration(false, false));