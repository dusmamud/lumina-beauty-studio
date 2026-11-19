<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { consultationSteps, patchTestNotes, site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Free Consultation & Patch Test — Lumina Beauty Studio, Bandra West</title>
	<meta
		name="description"
		content="Free 30-minute consultation and patch test before colour, bridal or skin treatments at Lumina Beauty Studio, Bandra West, Mumbai. Know your look before you book."
	/>
	<link rel="canonical" href="{site.url}/consultation" />
</svelte:head>

<PageHero
	eyebrow="CONSULTATION"
	title="Talk first, book second"
	subtitle="A free 30-minute consultation before colour, corrective colour, bridal or extensions — so you know exactly what you are getting, what it costs, and how it will look on you."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<h2 class="font-display text-2xl font-medium text-ink">What happens in your consultation</h2>
	<ol class="mt-6 grid gap-4 sm:grid-cols-2">
		{#each consultationSteps as step, i}
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
			<h2 class="font-display text-2xl font-medium text-ink">Who needs a consultation first?</h2>
			<ul class="mt-4 space-y-3 text-[0.95rem] text-ink/85">
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>Colour and corrective colour — so we can see your hair history before promising a shade.</li>
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>Bridal — every bride gets a skin consultation and a free half-face trial.</li>
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>Extensions and keratin — we check your hair’s strength before we add anything to it.</li>
				<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>Sensitive skin — we plan products and patch-test before any facial or makeup.</li>
			</ul>
			<p class="mt-5 text-[0.95rem] leading-relaxed text-muted">
				Not sure if you need one? WhatsApp us a photo and we will tell you honestly — a consultation costs you 30 minutes, a wrong colour costs you months.
			</p>
		</div>
		<div class="rounded-3xl bg-sand p-6 sm:p-8">
			<h2 class="font-display text-2xl font-medium text-ink">Patch test — 48 hours before colour</h2>
			<p class="mt-2 text-[0.95rem] leading-relaxed text-muted">
				A patch test is a small safety check before any hair colour or skin treatment. It is free, and it is how we make sure your skin is happy with the product before your appointment.
			</p>
			<ul class="mt-4 space-y-3 text-[0.95rem] text-ink/85">
				{#each patchTestNotes as note}
					<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>{note}</li>
				{/each}
			</ul>
		</div>
	</div>

	<p class="mt-12 text-center">
		<a
			href="/book"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Book a free consultation →
		</a>
		<a
			href={site.whatsappHref}
			target="_blank"
			rel="noopener"
			class="ml-3 inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
		>
			Ask on WhatsApp
		</a>
	</p>
</section>
