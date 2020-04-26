{#if field.metadata.required}
<input type="checkbox"
	id={id}
	class="checkbox form-control"
	bind:checked={field.value}
	tabindex={tabindex}>
{:else}
<select bind:value={field.value}
	id={id}
	class="form-control">
	<option></option>
	<option value={true}>Yes</option>
	<option value={false}>No</option>
</select>
{/if}

<script>
	export let id;
	export let field;
    export let tabindex;    
</script>

<style>
    .checkbox {
		height: 20px;
		width: 20px;
		margin: 0.6rem 0.5rem 1.1rem 0.5rem;
		overflow: initial;
		position: relative;
		clip: initial;
		-webkit-clip-path: initial;
		clip-path: initial;
		top: 3px;
	}
</style>
