<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { site } from '#lib/data/site.ts';

	const sections = [
		{
			title: 'Advance & payment',
			body: 'Bridal bookings need a 40% advance to lock your date (UPI, card or cash). The balance is due on the day. Regular services need no advance — pay after your appointment.'
		},
		{
			title: 'Cancellation & reschedule',
			body: 'Reschedule free up to 7 days before your appointment, once. Inside 7 days we do our best but cannot promise the same artist or slot. Bridal advances are non-refundable but transferable to a new date once.'
		},
		{
			title: 'Late arrival',
			body: 'We hold your slot for 15 minutes. After that we may shorten the service to stay on time for the next client, and the full price still applies.'
		},
		{
			title: 'Redo policy',
			body: 'Not happy with the result? Tell us within 24 hours and we will fix it free — a redo, a correction, or a different artist for the same service.'
		},
		{
			title: 'Patch tests',
			body: 'First-time colour, keratin and facial clients get a free patch test 48 hours before the appointment. If you skip the patch test, we cannot take responsibility for a reaction.'
		},
		{
			title: 'Hygiene',
			body: 'Brushes are cleaned between clients, metal tools are sterilised, files and applicators are single-use, and products are sealed. Tell us about allergies — we keep a note on your file.'
		},
		{
			title: 'Children & guests',
			body: 'You are welcome to bring one guest. The studio is small, so please keep little ones with you at all times.'
		}
	];
</script>

<svelte:head>
	<title>Booking Policies — Lumina Beauty Studio, Bandra West</title>
	<meta
		name="description"
		content="Advance, cancellation, reschedule, late arrival, redo and hygiene policies at Lumina Beauty Studio — written plainly, no fine print."
	/>
	<link rel="canonical" href="{site.url}/policies" />
</svelte:head>

<PageHero
	eyebrow="POLICIES"
	title="Booking policies, in plain words"
	subtitle="No fine print. If anything here is unclear, ask us on WhatsApp before you book — we would rather explain than surprise you."
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
	<div class="space-y-4">
		{#each sections as s}
			<article class="rounded-3xl bg-white p-6 ring-1 ring-line">
				<h2 class="font-display text-xl font-semibold text-ink">{s.title}</h2>
				<p class="mt-2 leading-relaxed text-muted">{s.body}</p>
			</article>
		{/each}
	</div>
	<p class="mt-10 text-center">
		<a
			href="/book"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Book an appointment →
		</a>
	</p>
</section>
