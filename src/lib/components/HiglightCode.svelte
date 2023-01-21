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
		theme = themeList[value];
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
</script>

<svelte:head>
	{#if theme}
		{@html theme.selectTheme}
	{/if}
</svelte:head>
<div class="flex justify-center overflow-scroll bg-slate-700 py-5 px-4">
	<div id="devstar" class="h-fit w-fit overflow-scroll rounded-md bg-red-400 shadow-lg">
		{#if code.length != 0}
			<Highlight language={lang || plaintext} {code} />
		{/if}
	</div>
</div>
