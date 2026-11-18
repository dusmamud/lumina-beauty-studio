<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import type { EmblaCarouselType } from 'embla-carousel';
	import { ChevronLeft, ChevronRight, Star } from '@lucide/svelte';
	import { testimonials } from '#lib/data/site.ts';

	let emblaApi: EmblaCarouselType | undefined = $state();
	let selected = $state(0);

	function onInit(e: CustomEvent<EmblaCarouselType>) {
		emblaApi = e.detail;
		emblaApi.on('select', () => {
			selected = emblaApi?.selectedScrollSnap() ?? 0;
		});
	}
</script>

<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div class="text-center sm:text-left">
				<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">REVIEWS</p>
				<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">
					Loved By Our Clients
				</h2>
			</div>
			<div class="hidden gap-2 sm:flex">
				<button
					type="button"
					class="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
					aria-label="Previous review"
					onclick={() => emblaApi?.scrollPrev()}
				>
					<ChevronLeft size={20} aria-hidden="true" />
				</button>
				<button
					type="button"
					class="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
					aria-label="Next review"
					onclick={() => emblaApi?.scrollNext()}
				>
					<ChevronRight size={20} aria-hidden="true" />
				</button>
			</div>
		</div>

		<div
			class="mt-10 overflow-hidden"
			use:emblaCarouselSvelte={{
				options: { loop: true, align: 'start' },
				plugins: [Autoplay({ delay: 5000, stopOnInteraction: true })]
			}}
			onemblaInit={onInit}
		>
			<div class="flex gap-6">
				{#each testimonials as t}
					<blockquote class="flex min-w-0 flex-[0_0_100%] flex-col rounded-3xl bg-cream p-6 ring-1 ring-line sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]">
						<p class="flex gap-1 text-gold" aria-label="Rated {t.rating} out of 5 stars">
							{#each Array(t.rating) as _}
								<Star size={16} fill="currentColor" aria-hidden="true" />
							{/each}
						</p>
						<p class="mt-4 flex-1 leading-relaxed text-ink/85">“{t.quote}”</p>
						<footer class="mt-5 border-t border-line pt-4">
							<p class="font-semibold text-ink">{t.name}</p>
							<p class="text-sm text-muted">{t.role}{t.service ? ` · ${t.service}` : ''}</p>
						</footer>
					</blockquote>
				{/each}
			</div>
		</div>

		<div class="mt-6 flex justify-center gap-2" role="tablist" aria-label="Choose review">
			{#each testimonials as _, i}
				<button
					type="button"
					role="tab"
					aria-selected={selected === i}
					aria-label="Go to review {i + 1}"
					class="h-2.5 rounded-full transition-all duration-200 {selected === i
						? 'w-8 bg-gold'
						: 'w-2.5 bg-line hover:bg-gold-light'}"
					onclick={() => emblaApi?.scrollTo(i)}
				></button>
			{/each}
		</div>
		<p class="mt-6 text-center">
			<a href="/reviews" class="font-semibold text-gold-dark underline underline-offset-4">
				Read all reviews →
			</a>
		</p>
	</div>
</section>
