<script>
    import type { OutputFieldValue, UmfApp } from "core/framework";
    export let app: UmfApp;
    export let field: OutputFieldValue;

    var url = app.makeUrl(field.data.form, field.data.inputFieldValues);
</script>

{#if field.data != null}
    {#if field.data.form != null}
        <a href={url}>{field.data.label}</a>
    {:else}<span>{field.data.label}</span>{/if}
{/if}
