<script>
	import Card from '../lib/components/Card.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="scrollbar-hide flex h-52  w-full items-center overflow-scroll bg-slate-800 relative" in:fade>
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
</div>
