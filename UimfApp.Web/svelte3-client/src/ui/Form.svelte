<script>
    import type { FormInstance, UmfApp } from "core/framework";
    import Input from "./Input.svelte";

    export let app: UmfApp;
    export let form: FormInstance;
    export let asr: any;
    export let useUrl: boolean = true;

    console.log(form);

    let visibleInputs = form.inputs.filter(t => t.metadata.hidden === false);
    let disabled = false;

    async function submit(event:Event, asPostOnLoad:boolean, redirect:boolean) {
        console.log("submitting...");

        if (event != null) {
            event.preventDefault();
        }
        
        // If not all required inputs are filled.
        const allRequiredInputsHaveValues = await form.allRequiredInputsHaveData(asPostOnLoad);
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
            const response = await form.submit(app, asPostOnLoad, { formComponent: self });

            // Signal event to child controls.
            this.fire("form:responseHandled", {
                form: self,
                invokedByUser: event != null,
                response
            });
        }
        catch (e) {
            disabled = false;
        }
    }
</script>

<h1>{form.metadata.label}</h1>

<form on:submit={e => submit(e, false, false)}>
    {#each visibleInputs as field}
    <Input {app} {field} {form}></Input>
    {/each}

    <button type="submit" class="btn btn-primary" disabled={disabled}>
        {form.metadata.customProperties.submitButtonLabel || 'Submit'}
    </button>
</form>
