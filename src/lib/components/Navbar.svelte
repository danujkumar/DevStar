<script>
	import Icon from 'svelte-awesome';
	import sunO from 'svelte-awesome/icons/sunO';
	import moonO from 'svelte-awesome/icons/moonO';

	import Link from './Link.svelte';

	import captureShot from '../util/capture';
	var theme = sunO;
	const handleTheme = () => {
		theme = theme == sunO ? moonO : sunO;
	};
</script>

<nav
	class="fixed z-10 h-16 w-full bg-gray-100 py-3 text-gray-500 hover:text-gray-700 focus:text-gray-700"
>
	<div class="container-fluid flex w-full flex-wrap items-center justify-between px-6">
		<span class="cursor-pointer text-xl text-black">DevStar</span>
		<span>
			<button
				class="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
				on:click={captureShot}
			>
				Save</button
			>
			<button on:click={handleTheme}>
				<Icon
					class="duration-400 ml-5 w-8 cursor-pointer transition-all ease-in hover:rotate-12 hover:scale-110"
					scale="1.4"
					data={theme}
				/>
			</button></span
		>
	</div>
</nav>
<div class="h-16" />

<ul class="flex flex-row justify-center border-b-0 bg-white pl-0 md:justify-start">
	<Link name="Theme" lkn="./" />
	<Link name="Language" lkn="./language" />
	<Link name="Editor" lkn="./editor" />
</ul>
