{#if field.data != null}
{text}
{/if}


<script>
	export let field;
	$: text = format(field);

	function format (field) {
		if (field.data == null) {
			return "";
		}

		var x = field.data;
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
		return parts.join(".");
	}
</script>