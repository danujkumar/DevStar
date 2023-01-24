<script>
	export let name, id;
	let imgPath = `../../themeimgs/${id - 20}.jpeg`;

	import { userTheme } from '../util/stores';
	const handleTheme = ({ target }) => {
		console.log(target.id);
		console.log(imgPath);
		userTheme.update(() => target.id - 21);
	};
</script>

<div class=" mx-4 block min-h-[160px] min-w-[240px] cursor-pointer rounded-lg bg-white shadow-lg">
	<div class="relative">
		<img class="h-auto max-w-full" src={imgPath} alt="Theme" />
		<button
			{id}
			class="absolute top-0 flex h-full w-full items-center justify-center rounded-sm bg-slate-50 text-xl font-bold opacity-0 transition-all ease-in hover:opacity-80"
			on:click={handleTheme}
		>
			{name}
		</button>
	</div>
</div>
