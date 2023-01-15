<script>
	import { fade } from 'svelte/transition';
	import languages from '../../lib/util/language';

	import { userLang } from '../../lib/util/stores';

	// updating the store for Language
	const handleLanguage = ({ target }) => {
		// console.log(target.name);
		userLang.update(() => target.id);
	};
</script>

<div
	class="grid h-52 grid-cols-2 grid-rows-4 items-center justify-center bg-slate-800 md:grid-cols-4 md:grid-rows-2  md:border-solid md:border-black"
	in:fade
>
	{#each languages as item}
		<li class="flex items-center justify-center">
			<button
				id={item.id}
				name={item.name}
				class="my-1 w-28 rounded bg-white py-1 hover:bg-black hover:text-white"
				on:click={handleLanguage}>{item.name}</button
			>
		</li>
	{/each}
</div>
