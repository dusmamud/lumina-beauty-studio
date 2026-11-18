<script lang="ts">
	import { inr, pricing } from '#lib/data/site.ts';
</script>

<section id="pricing" class="bg-sand/60 py-16 sm:py-20">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">PRICING</p>
			<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">Simple, Honest Prices</h2>
			<p class="mx-auto mt-3 max-w-lg text-muted">
				All prices in Indian Rupees (₹), inclusive of taxes. Final quote confirmed at booking.
			</p>
		</div>
		<div class="mt-10 overflow-hidden rounded-3xl bg-white ring-1 ring-line">
			{#each pricing as item, i}
				<div
					class="flex flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-8 {i > 0
						? 'border-t border-line'
						: ''}"
				>
					<div class="min-w-0">
						<h3 class="font-display text-lg font-semibold text-ink">{item.service}</h3>
						<p class="mt-0.5 text-sm text-muted">{item.detail} · {item.duration}</p>
					</div>
					<p class="font-display text-xl font-semibold text-gold-dark">{inr(item.price)}</p>
				</div>
			{/each}
		</div>
		<p class="mt-4 text-center text-sm text-muted">
			Bridal packages and group bookings on request — call us for a personalised quote.
		</p>
	</div>
</section>
