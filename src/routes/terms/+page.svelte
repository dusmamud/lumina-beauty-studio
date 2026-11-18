<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Terms of Service — Lumina Beauty Studio</title>
	<meta name="description" content="Terms for bookings, prices and content on the Lumina Beauty Studio website." />
	<link rel="canonical" href="{site.url}/terms" />
</svelte:head>

<PageHero
	eyebrow="TERMS"
	title="Terms of service"
	subtitle="The boring-but-fair bit. Prices, bookings and content rules for this website."
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
	<div class="space-y-6 leading-relaxed text-muted">
		<p>
			All prices on this website are in Indian rupees (₹) and include taxes. Prices may change; the price
			confirmed at booking is the price you pay.
		</p>
		<p>
			Bookings are confirmed by phone or WhatsApp. Bridal bookings need a 40% advance to lock the date — see
			our <a href="/policies" class="font-semibold text-gold-dark underline underline-offset-4">booking policies</a>
			for cancellation and reschedule rules.
		</p>
		<p>
			Photos, text and design on this site belong to Lumina Beauty Studio. Please do not reuse them without
			asking.
		</p>
		<p>
			All content on this website is currently mock data for design approval, including names, prices,
			testimonials and availability. Real details replace it before launch.
		</p>
	</div>
</section>
