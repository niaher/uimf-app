{#if field.data != null && field.data.actions != null && field.data.actions.length > 0}
<ul class="actionlist">
	{#each field.data.actions as action}
	<li>
		{#if action.action !== "redirect"}
		<button on:click={() => run(action, app)} class="btn btn-default {action.cssClass}">{action.label}</button>
		{:else}
		<a href="{app.makeUrl(action.form, action.inputFieldValues)}" class="btn btn-default {action.cssClass}">{action.label}</a>
		{/if}
	</li>
	{/each}
</ul>

<input id="modal-{modalId}" type="checkbox" bind:checked={open} class="hidden" />
<div class="modal">
	<div class="card">
		<label class="close" on:click={() => close()}></label>
		<div bind:this={container}></div>
	</div>
</div>
{/if}

<script context="module">
	let globalModalId = 1;
</script>

<script>
	import FormComponent from "../Form.svelte";
	import { ActionListEventArguments } from "./ActionListEventArguments";

	export let field;
	export let open = false;
	export let current = null;
	export let app;
	let modalId = globalModalId++;
	let container;
	let modals = [];

	// https://stackoverflow.com/a/3369743/111438
	// Close topmost modal when user presses escape key.
	document.addEventListener("keydown", function (evt) {
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
				modals[modals.length - 1].close();
			}
		}
	});

	async function run(action, app) {
		var formInstance = app.getFormInstance(action.form, true);

		// TODO: find a way to initialize from action.inputFieldValues directly.
		var serializedInputValues = formInstance.getSerializedInputValuesFromObject(action.inputFieldValues);
		await formInstance.initializeInputFields(serializedInputValues);

		var allRequiredInputsHaveData = await formInstance.allRequiredInputsHaveData(false);
		if (action.action === "run" && allRequiredInputsHaveData) {
			var response = await formInstance.submit(app, false);
			this.onActionRun(formInstance.metadata.id, response, action);
		}
		else {
			this.set({ open: true });

			var f = new FormComponent({
				target: this.refs.container,
				prop: {
					metadata: formInstance.metadata,
					form: formInstance,
					app: app,
					useUrl: false
				}
			});

			f.init();

			f.on("form:responseHandled", e => {
				if (e.invokedByUser && formInstance.metadata.closeOnPostIfModal) {
					close(e.response);
				}
			});

			this.set({ current: f });

			modals.push(self);
		}
	}

	function close(response) {
		open = false;

		// Destroy underlying form instance.
		if (response != null) {
			let formId = current.metadata.id;
			onActionRun(formId, response);
		}

		current.destroy();
		modals.pop();
	}

	async function onActionRun(formId, response, action) {
		let app = parent.app;
		let formInstance = parent.form;

		if (response.metadata.handler !== "redirect" &&
			response.metadata.handler !== "reload") {
			// If asked to redirect to another form, then we redirect
			// and do not reload parent form, as that would be a wasted effort.
			await parent.submit(null, true);
		}

		var eventArgs = new ActionListEventArguments(app, formId);
		parent.fireAndBubbleUp(`action-list:run`, eventArgs);
	}
</script>

<style>
	.hidden {
		width: 0;
		height: 0;
		position: absolute;
		left: -1000px;
	}

	.actionlist {
		margin: 0px 0;
		padding: 0 5px;
		text-align: right;
		margin-bottom: 15px;
	}

	.actionlist>li {
		list-style-type: none;
		display: inline-block;
	}
</style>