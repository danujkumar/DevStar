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
	{:else}
		{@html themeList[1].selectTheme}
	{/if}
</svelte:head>
<div class="flex justify-center overflow-scroll bg-gray-50 py-5 px-4">
	{#if code.length != 0}
		<div id="devstar" class="h-fit w-fit overflow-scroll rounded-md bg-red-400 px-8 py-8 shadow-lg">
			<Highlight language={lang || plaintext} {code} />
		</div>
	{/if}
</div>
