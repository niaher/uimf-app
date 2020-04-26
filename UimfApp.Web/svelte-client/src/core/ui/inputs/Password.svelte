{#if passwordConfig != null}
    {#if passwordConfig.regex}
        <span>{passwordConfig.regexDescription}</span>
		<input type="password"
			id={id}
			bind:value={field.selected}
			pattern={passwordConfig.regex}
			required={field.metadata.required}
			tabindex={tabindex}
			class="form-control">
    {:else}
	<input type="password"
		id={id}
		bind:value={field.selected}
		required={field.metadata.required}
		tabindex={tabindex}
		class="form-control">
    {/if}
    {#if passwordConfig.requireConfirmation}
    <div class="confirmation-password">
		<input placeholder="Please confirm the password by entering it one more time."
			type="password"
			on:change={onChange}
			required={field.metadata.required}
			tabindex={tabindex + 1}
			class="form-control">
    </div>
    {/if}
{/if}

<script>	
	export let id;
	export let field;
    export let tabindex; 

	const config = (field.metadata.customProperties || {}).passwordInputConfig;

	let passwordConfig = config || {
		regex: null,
		requireConfirmation: null
	};
	
	function onChange(event) {
		let confirmPassword = event.target;

		if (field.selected !== confirmPassword.value) {
			confirmPassword.setCustomValidity("Passwords do not match. Please make sure they are exactly the same.");
		} else {
			confirmPassword.setCustomValidity("");
		}
	}
</script>

<style>
    span{
        color:#9a9a9a;
        font-size: 13px;
        margin-bottom: 5px;
        display: block;
    }
    .confirmation-password{
        padding-top: 10px;
    }
</style>