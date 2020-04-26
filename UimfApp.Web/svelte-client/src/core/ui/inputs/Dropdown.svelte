{#if options != null }
<select
	id={id}
	bind:value={field.selected}
	required={field.metadata.required}
	tabindex={tabindex}
	on:change={() => onChange()}
	class="form-control">
	<option value=""></option>
	{#each options as option}
	<option value={option.value}>{option.label}</option>
	{/each}
</select>
{/if}

<script>
	export let id;
    export let field;
	export let tabindex;
	let options = null;
	
	function mapToTypeaheadItems(items) {
		return items.map(t => {
			return {
				label: t.label,
				value: t.value.toString()
			};
		});
	}

	function buildFilter(parentForm, parameters) {
		var promise;

		var filter = {};
		if (parameters != null && parameters.length > 0) {
			promise = parentForm.get("form").getSerializedInputValues().then(data => {
				for (let p of parameters) {
					filter[p] = data[p];
				}

				return filter;
			});
		}
		else {
			promise = Promise.resolve(filter);
		}

		return promise;
	}
	
	var source = field.metadata.customProperties.source;
	var items = field.metadata.customProperties.items;

	if (items != null) {
		options = items;
	}

	else if (typeof (source) === "string") {
		var parameters = field.metadata.customProperties.parameters;
		var app = this.get("app");
		var parentForm = this.get("form");

		buildFilter(parentForm, parameters).then(filter => {
			app.server.postForm(source, filter).then(data => {
				options = mapToTypeaheadItems(data.items);
			});
		});
	}

	function onChange() {
		field.initFromSelected();
		form.fireAndBubbleUp('input:changed', {
			app: app,
			form: form,
			input: this
		});
	}
</script>