{#if visible}
    {#if !alwaysHideLabel && field.metadata.label !== "" }
    <div class="form-group {cssClass}">
        <label for="{id}" class="col-form-label">{field.metadata.label}:</label>
        <div bind:this={container} class="input-container"></div>
    </div>
    {:else}
    <div class="form-group {cssClass}">
        <div bind:this={container} class="input-container"></div>
    </div>
    {/if}
{/if}

<script context="module">
	let inputId = 1;
</script>

<script>
	export let field;
	export let app;
	export let form;
	export let alwaysHideLabel;

	let id = `i${inputId++}`;
	let visible = false;
	let container;

	const input = app.controlRegister.getInput(field.metadata.type);

	// Set correct css class based on the field type.
	const inputDisplayConfig = field.constants || input.constants || {};
	let cssClass = field.metadata.customProperties != null ? field.metadata.customProperties.cssClass : null;

	// Set correct css class based on the field type.
	if (inputDisplayConfig.block) {
		cssClass = `block ${cssClass}`;
	}
	else {
		cssClass = `inline ${cssClass}`;
	}

	alwaysHideLabel = inputDisplayConfig.alwaysHideLabel;

	const inputs = form.inputs;
	
	// If `inputs` is null, then it means our parent form has been closed
	// and "destroyed". In such cases we should just return.
	// TODO: find a better way to implement "parent form null check".
	if (inputs != null) {
		// Register input in the parent form.
		inputs.push(this);
	}

	const isVisible = !field.metadata.eventHandlers.length ||
		field.metadata.eventHandlers.find(t => t.id === "depend-on") == null;

	show(isVisible);
		
	function show(show) {
		const currentlyVisible = !!visible;
		visible = !!show;

		if (currentlyVisible === false && visible === true) {
			const input = app.controlRegister.getInput(field.metadata.type);

			// eslint-disable-next-line
			new input.component({
				target: this.refs.container,
				props: {
					field,
					tabindex: tabindex,
					id: id,
					app: app,
					form: form,
					wrapper: null //this
				}
			});
		}

		if (!visible) {
			field.value = null;
		}
	}
</script>

<style>
    .inline {
        display: inline-block
    }
	.col-form-label{
		padding-left: 0
	}
</style>