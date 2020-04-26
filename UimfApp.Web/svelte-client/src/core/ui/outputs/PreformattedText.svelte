{#if field.data != null }
<pre class="{cssClass}">{field.data.value}</pre> 
{/if}

<script>
	export let field;
    export let form;
    $: cssClass = getCssClass(field, form);
        
    function getCssClass (field, form) {
        var cssClass = "";
        var dynamicCssClass = field.metadata.getCustomProperty("dynamicCssClass");
        if (dynamicCssClass != null) {
            cssClass = dynamicCssClass.cssClassPrefix;
            if (dynamicCssClass.outputFieldAsSuffix != null) {
                var suffixOutputField = form.outputs.find(t => t.metadata.id == dynamicCssClass.outputFieldAsSuffix);
                cssClass += suffixOutputField.data;
            }
        }
        return cssClass;
    }
</script>

<style>
    pre {
        word-break: keep-all;
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        border-left: 0.25rem solid #3fcae0;
        padding-top: 10px;
    }
</style>