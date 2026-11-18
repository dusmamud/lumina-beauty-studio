<script lang="ts">
	import Counter from './Counter.svelte';
</script>

<section class="border-y border-line bg-white py-10" aria-label="Studio at a glance">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
		<Counter value={4.9} decimals={1} suffix=" ★" label="Google rating" />
		<Counter value={8} suffix="+" label="Years of craft" />
		<Counter value={1000} suffix="+" label="Brides styled" />
		<Counter value={12} suffix="k+" label="Happy clients" />
	</div>
</section>
