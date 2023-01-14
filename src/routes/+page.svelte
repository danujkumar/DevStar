<script>
	import Card from '../lib/components/Card.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="flex h-48 w-full items-center overflow-auto bg-slate-800" transition:fade>
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
</div>
