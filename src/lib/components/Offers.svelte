<script lang="ts">
	import { offers } from '#lib/data/site.ts';
</script>

<section class="bg-sand/60 py-14 sm:py-16" aria-label="Offers">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">OFFERS</p>
			<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">A little extra, on us</h2>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each offers as offer}
				<article class="rounded-3xl bg-white p-6 ring-1 ring-line">
					<p class="inline-block rounded-full bg-cream px-3 py-1 text-xs font-bold tracking-wide text-gold-dark uppercase ring-1 ring-line">
						{offer.tag}
					</p>
					<h3 class="mt-3 font-display text-xl font-semibold text-ink">{offer.title}</h3>
					<p class="mt-2 leading-relaxed text-muted">{offer.detail}</p>
				</article>
			{/each}
		</div>
		<p class="mt-8 text-center text-sm text-muted">No fake scarcity, no expiry tricks — honest offers, always on.</p>
	</div>
</section>
