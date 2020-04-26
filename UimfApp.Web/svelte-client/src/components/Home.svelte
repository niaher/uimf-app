<div bind:this={container}></div>

<script>
	import FormComponent from "../core/ui/Form.svelte";

	let container;
	let formInstance = app.getFormInstance("grants-overview", true);

	let form = new FormComponent({
		target: container,
		props: {
			metadata: formInstance.metadata,
			form: formInstance,
			app: app,
			useUrl: false
		}
	});

	form.init();
</script>