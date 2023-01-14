<script>
	import Icon from 'svelte-awesome';
	import chevronUp from 'svelte-awesome/icons/chevronUp';
	import sunO from 'svelte-awesome/icons/sunO';
	import moonO from 'svelte-awesome/icons/moonO';
	import Button from './Button.svelte';

	import Link from './Link.svelte';

	var theme = sunO;
	const handleTheme = () => {
		theme = theme == sunO ? moonO : sunO;
	};
</script>

<nav
	class="relative w-full bg-gray-100 py-3 text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700"
>
	<div class="container-fluid flex w-full flex-wrap items-center justify-between px-6">
		<span class="cursor-pointer text-xl text-black">DevStar</span>
		<span>
			<Button>Save</Button>
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

<ul class="flex flex-row justify-center border-b-0 pl-0 md:justify-start" >
<Link name="Theme" lkn="./"/>
<Link name="Language" lkn="./"/>
<Link name="Editor" lkn="./"/>
</ul>
