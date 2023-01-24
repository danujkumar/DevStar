<script>
	import Card from './Card.svelte';
	import { fade } from 'svelte/transition';
	import themeList from '../util/themes';
</script>

<div class="relative flex  h-52 w-full items-center overflow-scroll bg-slate-800" in:fade>
	{#each themeList as item}
		<Card id={item.id} name={item.name} />
	{/each}
</div>
