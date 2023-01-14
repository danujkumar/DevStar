<script>
	import { fade } from 'svelte/transition';
	const padBtn = [
		{
			id: 1,
			sz: 16
		},
		{
			id: 2,
			sz: 32
		},
		{
			id: 3,
			sz: 64
		},
		{
			id: 4,
			sz: 128
		}
	];

	var selectedPad = 1;
	const handlePad = ({ target }) => {
		console.log(target.innerText);
		selectedPad = target.id;
	};
</script>

<div class="h-48" in:fade>
	<h1>Window</h1>

	<div class="flex items-center justify-start">
		<div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
			<button
				type="button"
				class="inline-block rounded-l bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800"
				>Left</button
			>
			<button
				type="button"
				class=" inline-block bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800"
				>Middle</button
			>
			<button
				type="button"
				class=" inline-block rounded-r bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800"
				>Right</button
			>
		</div>
	</div>
</div>
