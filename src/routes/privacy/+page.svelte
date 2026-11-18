<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Privacy Policy — Lumina Beauty Studio</title>
	<meta name="description" content="How Lumina Beauty Studio handles your name, phone number and booking details." />
	<link rel="canonical" href="{site.url}/privacy" />
</svelte:head>

<PageHero
	eyebrow="PRIVACY"
	title="Privacy policy"
	subtitle="Short version: we only ask for what a booking needs, we never sell your details, and you can ask us to delete them any time."
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
	<div class="space-y-6 leading-relaxed text-muted">
		<p>
			Lumina Beauty Studio (2nd Floor, 14 Glow Lane, Linking Road, Bandra West, Mumbai) collects your name and
			mobile number when you book or message us, so we can confirm your appointment and remind you about it.
		</p>
		<p>
			We do not sell, rent or share your details with advertisers. Photos of your look are only posted with
			your written permission.
		</p>
		<p>
			Booking details are kept for 12 months for our records, then deleted. You can ask us to correct or delete
			your details at any time — message us on WhatsApp or email {site.email}.
		</p>
		<p>
			This website uses no tracking cookies and no third-party analytics. The map on the contact page is loaded
			from Google Maps when you open that page.
		</p>
	</div>
</section>
