<script>
	import { navTab } from '../util/stores';
	export let name, lkn, id;

	const handleNavTab = ({ target }) => {
		navTab.update(() => id);
		target.classList.add('.bg-gray-100');
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
      border-transparent px-4 py-3 text-xs font-medium
      uppercase
      leading-tight
      hover:border-transparent
      hover:bg-gray-100 focus:border-transparent
      md:px-6
    ">{name}</a
	>
</ul>
