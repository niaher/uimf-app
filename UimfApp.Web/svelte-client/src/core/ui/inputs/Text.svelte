<input type="text"
    id={id}
    bind:value={field.value}
    required={field.metadata.required}
    tabindex={tabindex}
    class="form-control">

<script>
    export let field;
    export let tabindex;
    export let id;
</script>
