<script>
    import type { FormInstance, UmfApp } from "core/framework";
    import type TextInputController from "./TextController";

    export let app: UmfApp;
    export let form: FormInstance;
    export let field: TextInputController;

    let id = form.metadata.id + "-" + field.metadata.id;
    let tabindex = 0;
</script>

<input
    type="text"
    {id}
    bind:value={field.value}
    required={field.metadata.required}
    {tabindex}
    class="form-control" />
