{#if field.data != null && field.data.length > 0}
	<table class="table" bind:this={table}>
		<thead>
			{#if bulkActions.length > 0 }
			<tr>
				<td colspan="{columnsOrdered.length + 1}" class="btn-row">
					{#each bulkActions as action}
						{#if selectedItemsCount > 0 }
							<button class="btn btn-default" on:click={() => runBulkAction(action)}>{action.label} <small>({selectedItemsCount})</small></button>
						{:else}
							<button class="btn btn-default" disabled>{action.label}</button>
						{/if}
					{/each}
				</td>
			</tr>
			{/if}
			<tr>
				{#if bulkActions.length > 0}
				<th>
					<input type="checkbox" class="checkbox" on:change={() => selectAllItems(this)}>
				</th>
				{/if}

				{#each columnsOrdered as column}
				{#if column.customProperties != null && column.customProperties["sortableBy"] != null}
					{#if column.ascending}
					<th class="sortable-column" on:click={() => sortData(column,columnsOrdered)}>{column.label} <i class="fa fa-sort-down"></i></th>
					{:else}
					<th class="sortable-column" on:click={() => sortData(column,columnsOrdered)}>{column.label} <i class="fa fa-sort-up"></i></th>
					{/if}
				{:else}
				<th>
					{#if column.label == null}
						{getColumnLabel(column)}
					{:else}
						{column.label}
					{/if}
				</th>
				{/if}
				{/each}
			</tr>
		</thead>
		<tbody>
			{#if map != null}
			{#each field.data as row}
			<tr class={getRowCssClass(row)}>
				{#if bulkActions.length > 0}
					<td>
						<div class="form-group form-check">
							<input type="checkbox" class="checkbox" on:change={() => selectItem(this, row)}>
						</div>
					</td>
				{/if}

				{#each columnsOrdered as column}
				<td>
					{#if getField(row, column).metadata === null}
						{getField(row, column).data}
					{:else}
					{#if !(getField(row, column).metadata.getCustomProperty("hideIfNull") === true && getField(row, column).data === null)}
					 	<FormOutput field={getField(row, column)} app={app} form={form} parent={parent} showLabel="false" />
					 {/if}
					 {/if}
				</td>
				{/each}
			</tr>
			{/each}
			{/if}
		</tbody>
	</table>

	{#if bulkActions.length > 0}
		<input type="checkbox" bind:checked={isBulkActionModalOpen} class="hidden" />
		<div class="modal">
			<div class="card">
				<label class="close" on:click={() => closeBulkActionModal(null)}></label>
				<div bind:this={bulkActionContainer}></div>
			</div>
		</div>
	{/if}
{:else}
	<div class="alert-nodata">
		No data.
	</div>
{/if}

<script>
	import FormOutput from "../Output.svelte";
	import FormComponent from "../Form.svelte";
	import * as uimfcore from "uimf-core";

	export let field;
	export let app;
	export let form;
	export let parent;

	let table;
	let bulkActionContainer;
	let isBulkActionModalOpen;
	let bulkActions;
	let map;
	let selectedItemsCount;
	$: columnsOrdered = getColumnsOrdered(field);

	function buildFilter(currentFormInstance, parameters) {
		var promise;

		var filter = {};
		if (parameters != null && parameters.length > 0) {
			promise = currentFormInstance.getSerializedInputValues().then(data => {
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

	var modalId = 0;
	var modals = [];

	// https://stackoverflow.com/a/3369743/111438
	// Close topmost modal when user presses escape key.
	document.addEventListener("keydown", function(evt) {
		evt = evt || window.event;
		var isEscape = false;
		if ("key" in evt) {
			isEscape = (evt.key == "Escape" || evt.key == "Esc");
		} else {
			isEscape = (evt.keyCode == 27);
		}
		if (isEscape) {
			if (modals.length > 0) {
				// Close topmost modal.
				modals[modals.length - 1].closeBulkActionModal();
			}
		}
	});	
		
	if (field.data != null) {
		let metadata = field.metadata;
		let rowCssClass = (metadata.customProperties || {}).rowCssClass;

		// Create map, with key being the lowercase version of the property name
		// and value being the actual property name.
		let localmap = {};
		if (field.data.length > 0) {
			let firstRow = field.data[0];

			for (let property in firstRow) {
				if (firstRow.hasOwnProperty(property)) {
					localmap[property.toLowerCase()] = property;
				}
			}
		}

		bulkActions = (metadata.customProperties || {}).bulkAction || [];
		map = localmap;	

		selectedItemsCount = 0;
	}

	function getColumnLabel(column) {
		return column.charAt(0).toUpperCase() + column.slice(1);
	}

	function getField(row, column) {
		var col = column.id == null ? column.toLowerCase() : column.id.toLowerCase();
		var metadata = column.id == null ? null : column;
		var data = row.hasOwnProperty(map[col]) ? row[map[col]] : null;

		if(!row.hasOwnProperty(map[col])) {
			for(let property in row) {
				if(row[property] != null && row[property].metadata != null) {
					var index = 0;
					for(var propertyMetadata of row[property].metadata) {
						if(propertyMetadata.id.toLowerCase() == col) {
							data = row[property].data[index];
							break;
						}
						index++;
					}
				}
			}
		}

		return {
			data: data,
			metadata: metadata
		};
	}

	function getRowCssClass(row) {
		var cssClass = "";

		if (rowCssClass != null)
		{
			cssClass = rowCssClass.cssClass || "";

			if (rowCssClass.suffix != null) {
				var suffix = rowCssClass.suffix.toLowerCase();
				cssClass += map.hasOwnProperty(suffix) ? [map[suffix]] : "";
			}
		}

		return cssClass;
	}

	function getColumnsOrdered (field) {
		var allColumns = field.metadata.customProperties.columns.filter(b => !b.hidden);
		var dynamicTable = allColumns.filter(b => b.type == "dynamic-table");
		var columns = allColumns.filter(b => b.type != "dynamic-table" && b.id != "cssClass");

		for (var output of dynamicTable) {
			if (field.data.length > 0) {
				var data = field.data[0];
				var column = null;
				for (var property in data) {
					if (property.toLowerCase() == output.id.toLowerCase()){
						column = data[property];
						break;
					}
				}
				for (var col of column.metadata) {
					columns.push(new uimfcore.OutputFieldMetadata(col));
				}
			}
		}

		var sortedColumns = columns.sort((a, b) => {
			return a.orderIndex - b.orderIndex;
		});

		if (columns == null || columns.length == 0){
			if (field.data != null && field.data.length > 0) {
				columns = Object.keys(field.data[0]);
				return columns;
			}
		}

		return sortedColumns;
	}

	async function runBulkAction(action) {
		var selectedItems = field.data.filter(t => t.__selected === true);
		var selectedItemIds = selectedItems.map(t => t[map[action.itemIdentifierField.toLowerCase()]]);

		isBulkActionModalOpen = true;
		var formInstance = app.getFormInstance(action.formId, true);

		var inputFieldValues = {
			Items: {
				items: selectedItemIds
			}
		};

		var filter = await buildFilter(form, action.parameters);
		filter.Items = { items: selectedItemIds };
		formInstance.setInputFields(filter);

		var f = new FormComponent({
			target: this.refs.bulkActionContainer,
			data: {
				metadata: formInstance.metadata,
				form: formInstance,
				app: app,
				useUrl: false
			}
		});

		f.init();

		f.$on("form:responseHandled", e => {
			closeBulkActionModal(e.response);
		});

		currentBulkActionForm: f;

		modals.push(this);
	}

	async function closeBulkActionModal(response) {
		isBulkActionModalOpen = false;
		currentBulkActionForm = null;

		currentBulkActionForm.destroy();

		if (response != null &&
			response.metadata.handler !== "redirect" &&
			response.metadata.handler !== "reload") {
			// If asked to redirect to another form, then we redirect
			// and do not reload parent form, as that would be a wasted effort.
			await parent.submit(null, true);
		}

		modals.pop();
	}

	function selectItem(checkboxElement, row) {
		row.__selected = checkboxElement.checked;
		
		var selectedItems = field.data.filter(t => t.__selected === true);
		selectedItemsCount = selectedItems.length;
	}

	function selectAllItems(checkboxElement) {
		for (var row of field.data) {
			row.__selected = checkboxElement.checked;
		}

		var checkboxes = this.refs.table.querySelectorAll(`tbody>tr>td .checkbox`);

		for (var checkbox of checkboxes) {
			checkbox.checked = checkboxElement.checked;
		}

		var selectedItems = field.data.filter(t => t.__selected === true);
		selectedItemsCount = selectedItems.length;
	}

	function sortData(column, columns) {
		var paginatorInput = parent.form.inputs.find(t => t.metadata.id == field.metadata.customProperties.customizations.paginator);
		if(paginatorInput != null) {

			paginatorInput.value.orderBy = column.customProperties["sortableBy"];
			for (let i of columns) {
				i.ascending = false;
			}
			column.ascending = paginatorInput.value.ascending = !paginatorInput.value.ascending;
			
			var params = {};
			for (let i of parent.form.inputs) {
				params[i.metadata.id] = i.value;
			}

			parent.form.setInputFields(params);
			parent.submit(null, false);
		}
	}
</script>

<style>
	.btn-row {
		text-align: right;
	}

	.checkbox {
		clip:unset;
		clip-path:unset;
		position: unset;
		width: 15px;
    	height: 15px;
	}
	.sortable-column{
		cursor: pointer
	}
</style>