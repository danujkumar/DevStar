<script>
	import { userCode, userLang, userTheme } from '../util/stores';
	import { get } from 'svelte/store';

	var code = '';
	const handleInput = ({ target }) => {
		userCode = target.value;
	};
	const handleSubmit = () => {
		if (code.length != 0) {
			userCode.update(() => code);
			// userLang.update(() => lang);
			// userTheme.update(() => theme);
			console.log(get(userCode));
		}
	};
</script>

<div class="flex w-full">
	<form
		on:submit|preventDefault={handleSubmit}
		class="flex w-full flex-col content-center px-4 py-4"
	>
		<textarea
			class="border-2 outline-none"
			name="code"
			placeholder="code"
			spellcheck={false}
			on:forminput={handleInput}
			bind:value={code}
			rows="10"
			on:change={({ target }) => {
				code = target.value;
			}}
		/>
		<button class="my-1 border-2 px-2 py-1">Submit Code</button>
	</form>
</div>
