{#if (field.data || {}).value != null}
<div>{field.data.value}</div>
{/if}

<script>
	export let field;
</script>

<style>
	div {
		white-space: pre;
		margin: 0 0px 5px 0px;
		padding: 5px 15px;
	}
</style>