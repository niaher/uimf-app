{#if field.data != null && items != null}
{#each items as itemFields}
	<div class="object-list-item {cssClass} {itemFields.cssClass}">
		{#each itemFields.output as itemField}
		{#if itemField.metadata.hidden == false && !(itemField.metadata.getCustomProperty("hideIfNull") === true && itemField.data === null)}
		 	<FormOutput field="{itemField}" app="{app}" form="{form}" parent="{parent}" />
		{/if}
		{/each}
	</div>
{/each}
{/if}

<script>
	import * as umf from "../../framework";
	import * as uimfcore from "uimf-core";
	import FormOutput from "../Output.svelte";

	export let field;
	export let app;
	export let form;
	export let parent;
	let cssClass;
	let items;
	
	if (field.data != null && field.data.metadata != null) {
		var columns = field.data.metadata;
		delete columns.customProperties;

		var formMetadata = new uimfcore.FormMetadata({
			customProperties: field.data.metadata.customProperties,
			outputFields: columns
		})

		items = [];
		for (let item of field.data.items) {
			var css = item.cssClass;
			var fields = formMetadata.outputFields.filter(a => a.id != "CssClass");
			items.push({
				output: umf.FormInstance.getOutputFieldValues(fields, item),
				cssClass: css
			});
		}

		items = items;
		cssClass = formMetadata.getCustomProperty("cssClass") || "";
	}
</script>

<style>
	.object-list-item {
		border-bottom: 1px solid #eee;
		padding:10px 0;
	}
</style>