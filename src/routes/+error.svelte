<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Page not found — Lumina Beauty Studio</title>
	<meta name="description" content="That page does not exist. Find your way back to Lumina Beauty Studio." />
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
	<p class="font-display text-7xl font-medium text-gold-dark">404</p>
	<h1 class="mt-4 font-display text-3xl font-medium text-ink">This look does not exist</h1>
	<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">
		The page you are looking for ({page.url.pathname}) has moved or never existed. Let us take you somewhere
		prettier.
	</p>
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a
			href="/"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Back to home
		</a>
		<a
			href="/book"
			class="inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
		>
			Book an appointment
		</a>
	</div>
</section>
