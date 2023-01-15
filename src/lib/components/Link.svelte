<script>
	import { navTab } from '../util/stores';
	export let name, lkn, id;

	const handleNavTab = () => {
		navTab.update(() => id);
	};
</script>

<ul>
	<a
		href={lkn}
		on:click={handleNavTab}
		class="
      nav-link
      my-2
      block
      border-x-0
      border-t-0
      border-b-2
      border-transparent px-6 py-3 text-xs
      font-medium
      uppercase
      leading-tight
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    ">{name}</a
	>
</ul>
