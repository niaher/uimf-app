<script>
    import { OutputFieldValue, UmfApp } from "core/framework";
    import FormLink from "../outputs/FormLink.svelte";
    export let app: UmfApp;

    let menu = null;

    app.on("app:router-assigned", function () {
        menu = app.menu;
    });
</script>

{#if menu != null}
    <ul class="menu">
        {#each menu.children as item}
            <li>
                <FormLink field={new OutputFieldValue(null, item)} {app} />
            </li>
        {/each}
    </ul>
{/if}
