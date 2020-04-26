{#if showLabel === true && !alwaysHideLabel && field.metadata.label !== ""}
<div class="{cssClass}">
	<label class="output-label">
		{field.metadata.label}:
	</label>

    <div bind:this={container} class="output-container {cssClass}"></div>
</div>
{:else}
<div bind:this={container} class="output-container {cssClass}"></div>
{/if}

<script>
	export let showLabel = true;
	export let field;
	export let app;
	export let parent;
	export let form;
	
	let container = null;
	const output = app.controlRegister.getOutput(field);

	// Never show label if `alwaysHideLabel` is set to true.
	const outputDisplayConfig = output.constants || {};
	let alwaysHideLabel = outputDisplayConfig.alwaysHideLabel;

	// eslint-disable-next-line
	new output.constructor({
		target: container,
		props: {
			field,
			app,
			form,
			parent
		}
	});

	let cssClass = field.metadata.customProperties != null ? field.metadata.customProperties.cssClass : null;

	// Set correct css class based on the field type.
	if (outputDisplayConfig.block) {
		cssClass += " block";
	}
	else {
		cssClass += " inline";
	}
</script>

<style>
    .inline {
        display: inline-block
    }
</style>
