<script>
	import Theme from './Theme.svelte';
	import Language from './Language.svelte';
	import Editor from './Editor.svelte';
	import Form from './Form.svelte';
	import HiglightCode from './HiglightCode.svelte';
	import { fly } from 'svelte/transition';

	import { navTab } from '../util/stores';
	import { onDestroy } from 'svelte';

	var currentTab = 1;
	const unsubscribeToNavTab = navTab.subscribe((value) => {
		currentTab = value;
		console.log(currentTab);
	});

	onDestroy(unsubscribeToNavTab);
</script>

{#if currentTab == 1}
	<Theme />
{:else if currentTab == 2}
	<Language />
{:else if currentTab == 3}
	<Editor />
{/if}
<div class="container:md h-96 bg-slate-800 py-4 md:grid md:grid-cols-2" transition:fly={{ y: 200 }}>
	<Form />
	<HiglightCode />
</div>
