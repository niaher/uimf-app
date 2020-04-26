<div bind:this={container} class="inline-form"></div>

<script>
	import FormComponent from "../Form.svelte";
	import { onDestroy } from 'svelte';

	let container;
	export let app;
	export let field;
	export let parent;
	let current = null;

	var formInstance = app.getFormInstance(field.data.form, true);	
	
	formInstance.initializeInputFields(field.data.inputFieldValues).then(() => {
		var f = new FormComponent({
			target: this.refs.container,
			data: {
				metadata: formInstance.metadata,
				form: formInstance,
				app: app,
				useUrl: false,
				parent: parent
			}
		});

		f.init();

		current = f;
	});

	onDestroy(() => {
		if (current != null){
			current.$destroy();
		}
	});
</script>

<style>
	.inline-form {
		border-width: 1px 1px 1px;
		border-style: solid;
		border-color: #bbd2d6;
		margin: 30px 0;
		border-radius: 5px;
	}

	/* .inline-form .form-header{
		border-bottom: none;
		padding-top: 0;
		padding-bottom: 0;
		background: #eee;
	}
	
	.inline-form .response {
		margin-top:0;
		padding: 10px 15px;
	}

	.inline-form h2 {
		margin: 0;
		font-size: 15px;
		padding: 10px 15px 15px;
	}

	.inline-form .response .form-header{
		padding-top: 10px;
    	border-bottom: 1px solid #bbd2d6;
    	background-color: #fff
	}

	.inline-form .response h2{
		font-size: 2rem;
	} */
</style>
