<script lang="ts">
	import { Star } from '@lucide/svelte';
	import { testimonials } from '#lib/data/site.ts';
</script>

<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">REVIEWS</p>
			<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">
				Loved By Our Clients
			</h2>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each testimonials as t}
				<blockquote class="flex flex-col rounded-3xl bg-cream p-6 ring-1 ring-line">
					<p class="flex gap-1 text-gold" aria-label="Rated {t.rating} out of 5 stars">
						{#each Array(t.rating) as _}
							<Star size={16} fill="currentColor" aria-hidden="true" />
						{/each}
					</p>
					<p class="mt-4 flex-1 leading-relaxed text-ink/85">“{t.quote}”</p>
					<footer class="mt-5 border-t border-line pt-4">
						<p class="font-semibold text-ink">{t.name}</p>
						<p class="text-sm text-muted">{t.role}</p>
					</footer>
				</blockquote>
			{/each}
		</div>
	</div>
</section>
