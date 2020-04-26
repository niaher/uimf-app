<input type="text"
    id={id}
    bind:value={field.valueAsText}
    required={field.metadata.required}
    tabindex={tabindex}
    autocomplete="off"
    class="form-control"
    bind:this={container}>

<script>
    import Pikaday from "pikaday";
    
    export let id;
    export let field;
    export let container;
    export let tabindex;

    new Pikaday({
        field: container,
        format: 'YYYY-MM-DD',
        onSelect: async function (date) {
            await field.init(date.toISOString());
        }
    });

    var formElement = container;
    
    formElement.addEventListener("change", function (e) {
        if (formElement.value == "") {
            field.init(null);
        }
    });    
</script>