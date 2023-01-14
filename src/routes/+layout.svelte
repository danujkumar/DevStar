<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import Main from '../lib/components/Main.svelte';
</script>

<Navbar />
<slot />
<Main />
