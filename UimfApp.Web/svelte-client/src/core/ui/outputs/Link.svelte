{#if field.data != null}
<a href="{field.data.url}" class="{field.data.cssClass}">{field.data.anchor}</a>
{/if}

<script>
	export let field;
</script>
