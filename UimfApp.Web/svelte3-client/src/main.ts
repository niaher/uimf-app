import { UmfApp, UmfServer, ControlRegister } from "core/framework";
import { FormComponentResponseHandler, MessageResponseHandler, ReloadResponseHandler, RedirectResponseHandler } from "core/handlers";
import { AppRouter } from "routing/AppRouter";
import Layout from './ui/components/Layout.svelte';

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

new Layout({
	target: document.body,
	props: {
		app: uimfApp
	}
});

uimfApp.load().then(() => {
	const router = new AppRouter(document.querySelector("#main"), uimfApp);
	uimfApp.useRouter(router);
	
	uimfApp.registerResponseHandler(new FormComponentResponseHandler());
	uimfApp.registerResponseHandler(new MessageResponseHandler());

	uimfApp.registerResponseHandler(new ReloadResponseHandler((form, inputFieldValues) => {
		return uimfApp.load().then((t) => {
			return uimfApp.makeUrl(form, inputFieldValues);
		});
	}));

	uimfApp.registerResponseHandler(new RedirectResponseHandler((form, inputFieldValues) => {
		uimfApp.go(form, inputFieldValues);
	}));

	console.log(uimfApp);
});