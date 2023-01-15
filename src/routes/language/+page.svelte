<script>
	import { fade } from 'svelte/transition';
	import {languages1, languages2} from '../../lib/util/language'

	// 
</script>

<div
	class="grid h-52  grid-cols-2 items-center justify-center bg-slate-800 md:grid-cols-1  md:border-solid md:border-black"
	in:fade
>
	<ul class="flex flex-col items-center justify-evenly md:flex-row ">
		{#each languages1 as item}
			<li>
				<button id={item.id} class="my-1 w-28 rounded bg-white py-1 hover:bg-black hover:text-white"
					>{item.name}</button
				>
			</li>
		{/each}
	</ul>
	<ul class="flex flex-col items-center justify-evenly md:flex-row">
		{#each languages2 as item}
			<li>
				<button id={item.id} class="my-1 w-28 rounded bg-white py-1 hover:bg-black hover:text-white">{item.name}</button>
			</li>
		{/each}
	</ul>
</div>
