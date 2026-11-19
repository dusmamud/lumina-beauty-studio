<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { giftCardHowItWorks, giftCardValidity, giftCards, inr, site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Gift Cards — Lumina Beauty Studio, Bandra West, Mumbai</title>
	<meta
		name="description"
		content="Give a Lumina gift card from ₹1,000 — valid 12 months on any service. Buy on WhatsApp or at the studio in Bandra West, Mumbai."
	/>
	<link rel="canonical" href="{site.url}/gift-cards" />
</svelte:head>

<PageHero
	eyebrow="GIFT CARDS"
	title="Give them a glow"
	subtitle="A gift card that works on any service — bridal, hair, skin, nails. Valid for 12 months, for anyone, and easy to buy in one WhatsApp message."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid items-start gap-10 lg:grid-cols-2">
		<div class="grid gap-4 sm:grid-cols-2">
			{#each giftCards as card}
				<div class="rounded-3xl bg-white p-6 ring-1 ring-line">
					<p class="font-display text-3xl font-medium text-gold-dark">{inr(card.amount)}</p>
					<h2 class="mt-2 font-semibold text-ink">{card.label}</h2>
					<p class="mt-1 text-[0.95rem] leading-relaxed text-muted">{card.note}</p>
				</div>
			{/each}
		</div>
		<div class="overflow-hidden rounded-3xl border border-line">
			<Picture
				name="about-main"
				alt="Soft glam portrait — a Lumina gift card works on any service"
				width={900}
				height={700}
				sizes="(max-width: 1024px) 90vw, 560px"
				imgClass="aspect-[9/7] h-auto w-full object-cover"
				pictureClass="block"
			/>
		</div>
	</div>

	<h2 class="mt-14 font-display text-2xl font-medium text-ink">How it works</h2>
	<ol class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each giftCardHowItWorks as step, i}
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

	<div class="mt-10 rounded-3xl bg-sand p-6 sm:p-8">
		<h2 class="font-display text-2xl font-medium text-ink">Good to know</h2>
		<p class="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-muted">{giftCardValidity}</p>
		<p class="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-muted">
			This is a frontend-only mock — no payment is taken on this site. To buy a card, call or WhatsApp us and we will arrange it.
		</p>
	</div>

	<p class="mt-12 text-center">
		<a
			href={site.whatsappHref}
			target="_blank"
			rel="noopener"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Buy a gift card on WhatsApp →
		</a>
		<a
			href={site.phoneHref}
			class="ml-3 inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
		>
			Call {site.phoneDisplay}
		</a>
	</p>
</section>
