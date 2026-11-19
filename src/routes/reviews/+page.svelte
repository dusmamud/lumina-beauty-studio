<script lang="ts">
	import { Star } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { site, testimonials } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Reviews — 4.9★ | Lumina Beauty Studio, Bandra West</title>
	<meta
		name="description"
		content="Rated 4.9 out of 5 by clients in Bandra West, Mumbai. Read real reviews of bridal makeup, hair, skin and nail services at Lumina."
	/>
	<link rel="canonical" href="{site.url}/reviews" />
</svelte:head>

<PageHero
	eyebrow="REVIEWS"
	title="4.9 out of 5, from real clients"
	subtitle="We never edit reviews. A 4-star among 5-stars is honest — and honest is what you should expect from your artist too."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="mx-auto flex max-w-md flex-col items-center rounded-3xl bg-white p-8 text-center ring-1 ring-line">
		<p class="font-display text-5xl font-medium text-gold-dark">4.9</p>
		<p class="mt-2 flex gap-1 text-gold" aria-label="Rated 4.9 out of 5 stars">
			{#each Array(5) as _}
				<Star size={20} fill="currentColor" aria-hidden="true" />
			{/each}
		</p>
		<p class="mt-2 text-muted">from 480+ Google reviews</p>
		<a
			href="https://www.google.com/maps/search/Lumina+Beauty+Studio+Bandra+West+Mumbai"
			target="_blank"
			rel="noopener"
			class="mt-4 inline-flex min-h-12 items-center rounded-full border border-gold/50 px-6 text-sm font-semibold text-gold-dark"
		>
			Read all Google reviews →
		</a>
	</div>

	<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as t}
			<blockquote class="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-line">
				<p class="flex gap-1 text-gold" aria-label="Rated {t.rating} out of 5 stars">
					{#each Array(t.rating) as _}
						<Star size={16} fill="currentColor" aria-hidden="true" />
					{/each}
				</p>
				<p class="mt-4 flex-1 leading-relaxed text-ink/85">“{t.quote}”</p>
				<footer class="mt-5 border-t border-line pt-4">
					<p class="font-semibold text-ink">{t.name}</p>
					<p class="text-sm text-muted">{t.role}{t.service ? ` · ${t.service}` : ''}{t.date ? ` · ${t.date}` : ''}</p>
				</footer>
			</blockquote>
		{/each}
	</div>
	<p class="mt-10 text-center text-muted">
		Had a visit? We would love a Google review —
		<a
			href="https://www.google.com/maps/search/Lumina+Beauty+Studio+Bandra+West+Mumbai"
			target="_blank"
			rel="noopener"
			class="font-semibold text-gold-dark underline underline-offset-4">leave one here →</a
		>
	</p>
</section>
