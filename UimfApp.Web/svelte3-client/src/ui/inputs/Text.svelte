<script>
    import type { FormInstance, InputController, UmfApp } from "core/framework";

    export let app: UmfApp;
    export let form: FormInstance;
    export let field: InputController<any>;

    let id = form.metadata.id + "-" + field.metadata.id;
    let tabindex = 0;
</script>

<input
    type="text"
    {id}
    value={field.value}
    required={field.metadata.required}
    {tabindex}
    class="form-control" />
