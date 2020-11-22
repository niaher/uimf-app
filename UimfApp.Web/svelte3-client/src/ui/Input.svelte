<!-- svelte-ignore a11y-label-has-associated-control -->
<script>
    import type { FormInstance, InputController, UmfApp } from "core/framework";

    export let app: UmfApp;
    export let form: FormInstance;
    export let field: InputController<any>;

    var control = app.controlRegister.getInput(field.metadata.type);
</script>

<style>
</style>

<div class="form-group">
    <label>{field.metadata.label}:
        <svelte:component this={control.component} field={field} form={form} app={app}></svelte:component>
    </label>
</div>