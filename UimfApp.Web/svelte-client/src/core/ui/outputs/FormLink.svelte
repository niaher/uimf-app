{#if field.data != null}
	{#if field.data.form != null}
		{#if field.data.target != null}
			<a href="{app.makeUrl(field.data.form, field.data.inputFieldValues)}" 
				class="{field.data.cssClass}" 
				target="{field.data.target}">{field.data.label}</a>
		{:else}
			<a href="{app.makeUrl(field.data.form, field.data.inputFieldValues)}" 
				class="{field.data.cssClass}">{field.data.label}</a>
		{/if}
	{:else}
		<span>{field.data.label}</span>
	{/if}
{/if}

<script>
	export let field;
	export let app;
</script>