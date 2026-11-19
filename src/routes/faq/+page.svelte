<script lang="ts">
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { faqs, site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>FAQs — Lumina Beauty Studio, Bandra West, Mumbai</title>
	<meta
		name="description"
		content="Bridal trials, advances, cancellations, sensitive skin, travel — every question brides and clients ask us, answered plainly."
	/>
	<link rel="canonical" href="{site.url}/faq" />
</svelte:head>

<PageHero
	eyebrow="FAQ"
	title="Questions, answered plainly"
	subtitle="Trials, advances, cancellations, sensitive skin, travel — if it is not here, WhatsApp us and we will answer within 2 working hours."
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
	<FaqAccordion items={faqs} idPrefix="faq-page" />
	<p class="mt-10 text-center text-muted">
		Still curious?
		<a href="/book" class="font-semibold text-gold-dark underline underline-offset-4">Book a visit →</a>
		or
		<a href={site.whatsappHref} target="_blank" rel="noopener" class="font-semibold text-gold-dark underline underline-offset-4">
			ask on WhatsApp →
		</a>
	</p>
</section>
