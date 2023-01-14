<script>
	import Highlight from 'svelte-highlight';
	import c from 'svelte-highlight/languages/c';
	import typescript from 'svelte-highlight/languages/typescript';

	import androidstudio from 'svelte-highlight/styles/androidstudio';
	import default_light from 'svelte-highlight/styles/default-light';
	import github from 'svelte-highlight/styles/github';
	import tango from 'svelte-highlight/styles/tango';

	import { onDestroy } from 'svelte';
	import { userCode, userTheme } from '../util/stores';
	var code = '';
	const unsubscribeToCode = userCode.subscribe((value) => {
		code = value;
	});

	var allthemes = {
		androidstudio: false,
		default_light: false,
		github: false,
		tango: false
	};

	allthemes.default_light = true;
	const unsubscribeToTheme = userTheme.subscribe((value) => {
		const theme = value;
		for (const key in allthemes) {
			if (key == theme) allthemes[key] = true;
			else allthemes[key] = false;
		}
	});

	onDestroy(unsubscribeToCode);
	onDestroy(unsubscribeToTheme);

	const handleTheme = ({ target }) => {
		const theme = target.name;
		for (const key in allthemes) {
			if (key == theme) allthemes[key] = true;
			else allthemes[key] = false;
		}
	};
</script>

<svelte:head>
	{@html default_light}
	{#if allthemes.androidstudio}
		{@html androidstudio}
	{:else if allthemes.github}
		{@html github}
	{:else if allthemes.tango}
		{@html tango}
	{/if}
</svelte:head>
<div class="flex justify-center overflow-scroll bg-slate-700 py-5">
	<div id="devstar" class="h-fit w-3/4 rounded-md bg-red-400 px-10 py-10 shadow-lg">
		{#if code.length != 0}
			<Highlight language={typescript} {code} />
		{/if}
	</div>
</div>
