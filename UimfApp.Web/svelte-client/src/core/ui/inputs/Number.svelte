{#if numberConfig != null}
<input type="number"
    id={id}
    bind:value={field.value}
    required={field.metadata.required}
    tabindex={tabindex}
    class="form-control"
    step={numberConfig.step}
    min={numberConfig.minValue}
    max={numberConfig.maxValue} />
{/if}

<script>
	export let id;
	export let field;
	export let tabindex;
	
	let numberConfig = field.metadata.customProperties != null && field.metadata.customProperties["numberConfig"] != null
		? field.metadata.customProperties["numberConfig"]
		: {
			minValue: null,
			maxValue: null,
			step: 0.01
		};
</script>
