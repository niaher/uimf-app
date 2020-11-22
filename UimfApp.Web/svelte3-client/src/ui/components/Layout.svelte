<script>
	import { UmfApp, UmfServer, ControlRegister } from "core/framework";
	import {
		FormComponentResponseHandler,
		MessageResponseHandler,
		ReloadResponseHandler,
		RedirectResponseHandler,
	} from "core/handlers";
	import { AppRouter } from "routing/AppRouter";
	import Menu from "./Menu.svelte";

	export let controlRegister: ControlRegister;
	
	const server = new UmfServer("/api/form/metadata", "/api/form/run");
	const app = new UmfApp(server, controlRegister);

	app.load().then(() => {
		const router = new AppRouter(document.querySelector("#main"), app);
		app.useRouter(router);

		app.registerResponseHandler(new FormComponentResponseHandler());
		app.registerResponseHandler(new MessageResponseHandler());

		app.registerResponseHandler(
			new ReloadResponseHandler((form, inputFieldValues) => {
				return app.load().then((t) => {
					return app.makeUrl(form, inputFieldValues);
				});
			})
		);

		app.registerResponseHandler(
			new RedirectResponseHandler((form, inputFieldValues) => {
				app.go(form, inputFieldValues);
			})
		);
	});
</script>

<main class="container-fluid">
	<div class="row">
		<div class="col-sm-2">
			<Menu {app} />
		</div>
		<div class="col-sm-10" id="main" />
	</div>
</main>
