<script>
	import type { UmfApp } from "core/framework";
	import Menu from "./Menu.svelte";
	export let app: UmfApp;
</script>

<main class="container-fluid">
	<div class="row">
		<div class="col-sm-2">
			<Menu {app} />
		</div>
		<div class="col-sm-10" id="main">
		</div>
	  </div>
</main>
