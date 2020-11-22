<script>
    import type { FormInstance, UmfApp } from "core/framework";
    import Input from "./Input.svelte";

    export let app: UmfApp;
    export let form: FormInstance;
    export let asr: any;

    console.log(form);

    let visibleInputs = form.inputs.filter(t => t.metadata.hidden === false);
    
</script>

<h1>{form.metadata.label}</h1>

<form>
    {#each visibleInputs as field}
    <Input {app} {field} {form}></Input>
    {/each}
</form>
