<script>
	import Highlight from 'svelte-highlight';
	import {
		json,
		markdown,
		go,
		python,
		cpp,
		csharp,
		javascript,
		java,
		plaintext
	} from 'svelte-highlight/languages';

	import androidstudio from 'svelte-highlight/styles/androidstudio';
	import default_light from 'svelte-highlight/styles/default-light';
	import github from 'svelte-highlight/styles/github';
	import tango from 'svelte-highlight/styles/tango';

	import { onDestroy } from 'svelte';
	import { userCode, userTheme, userLang } from '../util/stores';
	import themeList from '../util/themes';

	var code = '';
	const unsubscribeToCode = userCode.subscribe((value) => {
		code = value;
		console.log('updated code');
	});

	var allthemes = {
		androidstudio: false,
		default_light: false,
		github: false,
		tango: false
	};

	allthemes.default_light = true;
	let theme;
	const unsubscribeToTheme = userTheme.subscribe((value) => {
		console.log(value);
		theme = themeList[value].selectTheme;
		console.log(theme);
	});

	let lang;
	const allLang = [json, markdown, go, python, cpp, csharp, java, javascript];
	const unsubscribeToLanguage = userLang.subscribe((value) => {
		console.log('updated theme');
		lang = allLang[value - 11];
		console.log(lang);
	});

	onDestroy(unsubscribeToCode);
	onDestroy(unsubscribeToTheme);
	onDestroy(unsubscribeToLanguage);

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
	{@html theme}
</svelte:head>
<div class="flex justify-center overflow-scroll bg-slate-700 py-5 px-4">
	<div id="devstar" class="h-fit w-fit overflow-scroll rounded-md bg-red-400 shadow-lg">
		{#if code.length != 0}
			<Highlight language={lang || plaintext} {code} />
		{/if}
	</div>
</div>
