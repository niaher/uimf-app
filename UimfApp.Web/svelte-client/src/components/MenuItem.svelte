{#if menu.url != null}
	<a href={menu.url}>{menu.label}</a>
{:else}
	{#if submenu == null}
		<div class="menu top-menu-div">
			{#if menu.items.length > 1}
				<label for="menu{id}" class="toggle-sub" onclick="">{menu.id}</label>
			{:else}
				<a href={menu.items[0].url}>{menu.items[0].label}</a>
			{/if}
		</div>
	{:else}

		{#if menu.items.length > 1}
			<label for="menu{id}" class="toggle-sub" onclick="">{menu.id}</label>
		{:else}
			<a href="{menu.items[0].url}">{menu.items[0].label}</a>
		{/if}
	{/if}

	<input type="checkbox" id="menu{id}" class="sub-nav-check" />
	{#if menu.items.length > 1}
		<ul class="sub-nav">
			{#each menu.items as submenu}
			<li>
				<svelte:self menu={submenu} submenu={true} />
			</li>
			{/each}
		</ul>
	{/if}
{/if}

<script context="module">
	let globalId = 1;
</script>

<script>
	export let menu;
	export let submenu;
	let id = globalId++;
</script>