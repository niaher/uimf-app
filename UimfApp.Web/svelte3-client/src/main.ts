//import { Register} from './Register';
import { controlRegister } from './ui/Register';
import Layout from './ui/components/Layout.svelte';

new Layout({
	target: document.body,
	props: {
		controlRegister: controlRegister
	}
});