{#if menus != null}
<ul class="menu">
	{#each menus as menu}
	<li>
		<MenuItem menu={menu} />
	</li>
	{/each}
</ul>
{/if}

<script>
	import MenuItem from "./MenuItem.svelte";
	import { onMount } from "svelte";

	let menus;
	export let forms;
	export let getMenu;
	export let makeUrl;

	function nestedSort(array, comparison) {
		array.sort(comparison);

		for (const item of array) {
			if (item.items != null) {
				nestedSort(item.items, comparison);
			}
		}
	}

	onMount(() => {
		tree = [];

		for (const form of forms) {
			const formMenu = getMenu(form);
			if (formMenu != null) {
				let currentFolder = {
					items: tree
				};

				// If it's a "folder" menu.
				if (formMenu.name !== "") {
					const path = formMenu.name.split("/");

					for (const folder of path) {
						let subfolder = currentFolder.items.find(t => t.id === folder);

						if (subfolder == null) {
							subfolder = {
								id: folder,
								orderIndex: formMenu.orderIndex,
								items: []
							};

							currentFolder.items.push(subfolder);
							currentFolder = subfolder;
						}
						else {
							currentFolder = subfolder;
						}
					}
				}
				currentFolder.items.push({
					label: form.label,
					url: makeUrl(form.id),
					// Make sure we respect both parent menu sorting order and then leaf-level menu sorting order.
					orderIndex: (formMenu.orderIndex * 100000) + form.customProperties.menuOrderIndex
				});
			}
		}
		nestedSort(tree, (a, b) => a.orderIndex - b.orderIndex);

		menus = tree;
	});
</script>