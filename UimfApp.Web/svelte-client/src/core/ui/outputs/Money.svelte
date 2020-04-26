{#if field.data != null}
{text}<span>{field.data.currencySymbol}</span>
{/if}

<script>
	export let field;
	$: text = field.data == null ? "" : field.data.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
</script>

<style>
	span {
		opacity: 0.8;
		font-weight: bold;
		font-size: 0.8em;
	}
</style>
