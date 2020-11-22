<script>
    import type { FormInstance, UmfApp } from "core/framework";
    import type PasswordInputController from "./PasswordController";

    export let app: UmfApp;
    export let form: FormInstance;
    export let field: PasswordInputController;

    let id = form.metadata.id + "-" + field.metadata.id;
    let tabindex = 0;
</script>

<input
    type="password"
    {id}
    bind:value={field.selected}
    required={field.metadata.required}
    {tabindex}
    class="form-control" />
