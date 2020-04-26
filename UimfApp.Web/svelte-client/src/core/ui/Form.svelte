<div class="inputs-horizontal-one-column {cssClass}">
	 {#if (responseMetadata.title != null && responseMetadata.title != "") || (metadata.label != null && metadata.label != "")}
	  <div class="form-header">
		<h2>{responseMetadata.title || metadata.label}</h2>
	  </div>
	{/if}

	{#if visibleInputFields.length > 0}
	<div class="form-body">
		<form on:submit={() => api.submit(true)}>
		{#each visibleInputFields as inputField}
		<FormInput field={inputField} app={app} tabindex="{tabindex * 100 + inputField.metadata.orderIndex}" form={api} />
		{/each}
		<div style="width:100%">
			<button type="submit" disabled={disabled} tabindex="-1" class="btn btn-info">{submitButtonLabel}</button>
		</div>
		</form>
	</div>
	{/if}

	{#if outputFieldValues != null}
	<div class="response">
		{#each outputFieldValues as outputField }
		{#if outputField.metadata.hidden == false && !(outputField.metadata.getCustomProperty("hideIfNull") === true && outputField.data === null)}
		<FormOutput field={outputField} app={app} form={form} parent={api} />
		{/if}
		{/each}
	</div>
	{/if}
</div>

<script context="module">
	let globalTabindex = 1;
</script>

<script>
	import FormInput from "./Input.svelte";
	import FormOutput from "./Output.svelte";
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	let openForms = [];
	let outputFieldValues = null;
	let metadata = null;
	let visibleInputFields = form.inputs.filter(t => t.metadata.hidden === false);
	let submitButtonLabel = form.metadata.getCustomProperty("submitButtonLabel") || "Submit";
	let cssClass = form.metadata.getCustomProperty("cssClass") || "";
	
	export let form;
	export let app;
	export let disabled = false;
	export let tabindex = globalTabindex++;
	let responseMetadata = {};
	export let useUrl = true;
	export let parent = null; // Can be set if this is a nested form within another form (i.e. - InlineForm.html)
	let inputs = [];

	export const api = {
		parent: parent.api,
		reloadTopForm() {
			if (api.parent != null) {
				api.parent.reloadTopForm();
			}
			else {
				api.submit(null, true);
			}
		},
		reloadAllForms() {
			for (const f of openForms) {
				f.reloadTopForm();
			}
		},
		renderResponse(response) {
			// Force Svelte to re-render outputs.
			outputFieldValues = null;
			outputFieldValues = form.outputs;
			responseMetadata = form.metadata;

			if (parent == null) {
				document.title = response.metadata.title;
			}
		},
		async submit(event, redirect) {
			if (event != null) {
				event.preventDefault();
			}

			// If not all required inputs are filled.
			const allRequiredInputsHaveValues = await form.allRequiredInputsHaveData(redirect == null);
			if (!allRequiredInputsHaveValues) {
				return;
			}

			// Disable double-posts.
			disabled = true;

			// If postOnLoad == true, then the input field values should appear in the url.
			// Reason is that postOnLoad == true is used by "report" pages, which need
			// their filters to be saved in the url. This does not apply to forms
			// with postOnLoad == false, because those forms are usually for creating new data
			// and hence should not be tracked in browser's history based on parameters.
			if (form.metadata.postOnLoad && redirect && useUrl) {
				const urlParams = await form.getSerializedInputValues();

				// Update url in the browser.
				app.go(form.metadata.id, urlParams);

				return;
			}

			try {
				const response = await form.submit(app, redirect == null, { formComponent: self });

				enableForm();

				// Signal event to child controls.
				dispatch("form:responseHandled", {
					form: self,
					invokedByUser: event != null,
					response
				});
			}
			catch (e) {
				enableForm();
			}
		}
	};

	onDestroy(() => {
		openForms = openForms.filter(f => f !== api);
	});

	function bindEventHandlersToCustomEvents(formComponent, eventHandlers) {
		const formInstance = formComponent.form;

		for (const eventHandler of eventHandlers) {
			// Don't bind default event handlers, because they are already auto-bound inside FormInstance.
			if (eventHandler.runAt.indexOf("form:") === 0) {
				continue;
			}

			formComponent.on(eventHandler.runAt, e => {
				// Augment event args with form which is firing the event. This is needed,
				// so that event handler can know from which particular form this event is coming.
				e.form = formComponent;

				formInstance.handleEvent(eventHandler.runAt, eventHandler, e);
			});
		}
	}

	function fireAndBubbleUp(eventName, eventArgs) {
		dispatch(eventName, eventArgs);
		const parentFormComponent = parent;

		if (parentFormComponent != null) {
			parentFormComponent.fireAndBubbleUp(eventName, eventArgs);
		}
	}

	function enableForm() {
		// Hide all inputs, to re-render them. This is needed due to the way that
		// Svelte *seems* to work - it doesn't re-render nested components, unless they are recreated.
		visibleInputFields = [];

		// Show inputs again.
		visibleInputFields = form.inputs.filter(t => t.metadata.hidden === false);
		disabled = false;
	}

	function getInputComponent(inputId) {
		return inputs.find(t => t.field != null && t.field.metadata.id === inputId);
	}
	
	// Subscribe all event handlers (form, inputs, outputs).
	const formMetadata = form.metadata;
	const handlers = [];
	formMetadata.inputFields.forEach(t => t.eventHandlers.forEach(h => handlers.push(h)));
	formMetadata.outputFields.forEach(t => t.eventHandlers.forEach(h => handlers.push(h)));
	formMetadata.eventHandlers.forEach(h => handlers.push(h));
	bindEventHandlersToCustomEvents(self, handlers);

	form.fire("form:loaded", { app });

	// Auto-submit form if necessary.
	if (form.metadata.postOnLoad) {
		submit();
	}

	openForms.push(api);

	if (parent == null) {
		if (responseMetadata.title == null) {
			document.title = form.metadata.label;
		}
	}
</script>

<style>
	.response {
		margin-top: 15px;
		padding-left: 10px;
		padding-right: 10px;
	}

	.form-header {
		text-align: center;
		padding-top: 20px;
		border-bottom: 1px solid #bbd2d6;
		background-color: #fff;
		position: relative;
	}

	.form-header h2 {
		display: inline-block;
	}

	.help-content {
		text-align: left;
	}
</style>
