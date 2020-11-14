import { UmfApp, UmfServer, ControlRegister } from "core/framework";
import App from './App.svelte';

const controlRegister = new ControlRegister();

class MyApp extends UmfApp {
	constructor(theServer: UmfServer) {
		super(theServer, controlRegister);
	}

	public showError(message: string): void {
		window.alert(message);
	}
}

const server = new UmfServer(
	"/api/form/metadata",
	"/api/form/run");

const uimfApp = new MyApp(server);

// Create a global variable, which can be accessed from any component.
(window as any).xxx = uimfApp;

const app = new App({
	target: document.body,
	props: {
		app: uimfApp,
		name: 'worldz'
	}
});

export default app;