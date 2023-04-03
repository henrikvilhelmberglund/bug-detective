<script lang="ts">
	let count = 0;
	function increment() {
		count += 1;
	}
</script>

<button
	class="w-250px focus:border-orange-800 bg-orange-{400 -
		100} color-orange-900 rounded-xl p-4 font-semibold hover:bg-orange-400"
	on:click={increment}>
	Clicks: {count}
</button>
