<script>
	import { fade } from 'svelte/transition';
	const languages1 = [
		{
			id: 11,
			name: 'JSON'
		},
		{
			id: 12,
			name: 'HTML'
		},
		{
			id: 13,
			name: 'GO'
		},
		{
			id: 14,
			name: 'Python'
		}
	];

	const languages2 = [
		{
			id: 15,
			name: 'C++'
		},
		{
			id: 16,
			name: 'C#'
		},
		{
			id: 17,
			name: 'JavaScript'
		},
		{
			id: 18,
			name: 'TypScript'
		}
	];
</script>

<div class="grid h-48 grid-cols-2 items-center justify-center md:grid-cols-1" in:fade>
	<ul class="flex flex-col items-center justify-evenly md:flex-row">
		{#each languages1 as item}
			<li>
				<button id={item.id} class="my-1 w-28 rounded bg-white py-1">{item.name}</button>
			</li>
		{/each}
	</ul>
	<ul class="flex flex-col items-center justify-evenly md:flex-row">
		{#each languages2 as item}
			<li>
				<button id={item.id} class="my-1 w-28 rounded bg-white py-1">{item.name}</button>
			</li>
		{/each}
	</ul>
</div>
