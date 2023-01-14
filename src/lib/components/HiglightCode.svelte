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
	import captureShot from '../util/capture';
	// const code = "const add = (a: number, b: number) => a + b;";
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
<div class="flex items-center justify-center bg-slate-700 py-2">
	<div id="wrapper" class="w-3/4">
		{#if code.length != 0}
			<Highlight language={typescript} {code} />
		{/if}
	</div>
</div>
<!-- <div class="my-4 bg-red-500 px-2 text-lg">
  <h1 class=" text-slate-200 font-bold">THEMES LOL 😁</h1>
  <button name="default_light" on:click={handleTheme}>Light</button>
  <button name="github" on:click={handleTheme}>Github</button>
  <button name="androidstudio" on:click={handleTheme}>Android Studio</button>
  <button name="tango" on:click={handleTheme}>Tango</button>
</div> -->

<!-- <button on:click={captureShot}>Capture</button> -->
<style>
	#wrapper {
		@apply rounded-md bg-red-400 px-5 py-10 shadow-lg;
	}
</style>
