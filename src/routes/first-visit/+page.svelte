<script lang="ts">
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { firstVisitFaqs, firstVisitSteps, site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Your First Visit — Lumina Beauty Studio, Bandra West, Mumbai</title>
	<meta
		name="description"
		content="New to Lumina? What to expect on your first visit — arrive 10 minutes early, a short consultation, patch test, aftercare, and what to bring."
	/>
	<link rel="canonical" href="{site.url}/first-visit" />
</svelte:head>

<PageHero
	eyebrow="NEW CLIENTS"
	title="Your first visit, explained"
	subtitle="No surprises, no awkwardness. Here is exactly what happens from the moment you walk in — so you can relax and enjoy it."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each firstVisitSteps as step, i}
			<li class="rounded-3xl bg-white p-6 ring-1 ring-line">
				<span
					class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sand font-display text-lg font-semibold text-gold-dark"
					aria-hidden="true"
				>
					{i + 1}
				</span>
				<h3 class="mt-3 font-semibold text-ink">{step.title}</h3>
				<p class="mt-1 text-[0.95rem] leading-relaxed text-muted">{step.detail}</p>
			</li>
		{/each}
	</ol>

	<div class="mt-12 grid gap-10 lg:grid-cols-2">
		<div>
			<h2 class="font-display text-2xl font-medium text-ink">Good to know before you come</h2>
			<ul class="mt-4 space-y-3 text-[0.95rem] text-ink/85">
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>Booked clients never wait — your slot is yours, we never double-book.</li>
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>One guest is welcome to wait in the lounge; children under 12 need an adult with them.</li>
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>Pay by UPI, card or cash. Bridal bookings need a 40% advance.</li>
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>Reschedule free up to 7 days before your appointment.</li>
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>First visit? Mention it when you book — your first facial or haircut is 20% off.</li>
			</ul>
		</div>
		<div>
			<h2 class="font-display text-2xl font-medium text-ink">First-visit questions</h2>
			<div class="mt-4">
				<FaqAccordion items={firstVisitFaqs} idPrefix="first-visit-faq" />
			</div>
		</div>
	</div>

	<p class="mt-12 text-center">
		<a
			href="/book"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Book your first visit →
		</a>
		<a
			href="/consultation"
			class="ml-3 inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
		>
			Book a free consultation first
		</a>
	</p>
</section>
