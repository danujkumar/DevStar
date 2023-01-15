<script>
	import Card from './Card.svelte';
	import { fade } from 'svelte/transition';
</script>

<div
	class="scrollbar-hide relative flex  h-52 w-full items-center overflow-scroll bg-slate-800"
	in:fade
>
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
</div>
