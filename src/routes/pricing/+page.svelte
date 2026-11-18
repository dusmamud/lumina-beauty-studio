<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { bridalPackages, inr, pricing, services, site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Price List — Lumina Beauty Studio, Bandra West, Mumbai</title>
	<meta
		name="description"
		content="Every Lumina price, on the page: bridal from ₹14,999, party makeup ₹4,999, haircuts, facials, nails and waxing in Bandra West, Mumbai."
	/>
	<link rel="canonical" href="{site.url}/pricing" />
</svelte:head>

<PageHero
	eyebrow="PRICING"
	title="Every price, on the page"
	subtitle="No “call for prices”. What moves a price — hair length, artist level, products — is written next to it. The quote you see is the quote you pay."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-5">
		<div class="lg:col-span-3">
			<h2 class="font-display text-2xl font-medium text-ink">Services</h2>
			<ul class="mt-5 divide-y divide-line rounded-3xl bg-white ring-1 ring-line">
				{#each pricing as item}
					<li class="flex flex-wrap items-baseline justify-between gap-2 px-5 py-4 sm:px-6">
						<span>
							<span class="block font-semibold text-ink">{item.service}</span>
							<span class="block text-sm text-muted">{item.detail} · {item.duration}</span>
						</span>
						<span class="font-display text-xl font-medium text-gold-dark">{inr(item.price)}</span>
					</li>
				{/each}
			</ul>
			<p class="mt-4 text-sm text-muted">
				Prices are “from” prices — your artist confirms the exact quote before starting, and it never changes
				mid-service.
			</p>
		</div>
		<div class="lg:col-span-2">
			<h2 class="font-display text-2xl font-medium text-ink">Bridal packages</h2>
			<div class="mt-5 space-y-4">
				{#each bridalPackages as pkg}
					<article class="rounded-3xl bg-white p-6 ring-1 ring-line">
						<div class="flex items-baseline justify-between gap-3">
							<h3 class="font-display text-xl font-semibold text-ink">{pkg.name}</h3>
							<span class="font-display text-xl font-medium text-gold-dark">{inr(pkg.price)}</span>
						</div>
						<p class="mt-1 text-sm text-muted">{pkg.looks}</p>
						<a
							href="/bridal"
							class="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-gold-dark underline underline-offset-4"
						>
							See what is included →
						</a>
					</article>
				{/each}
			</div>
			<div class="mt-6 rounded-3xl bg-sand/60 p-6 ring-1 ring-line">
				<h3 class="font-semibold text-ink">Good to know</h3>
				<ul class="mt-3 space-y-2 text-sm leading-relaxed text-muted">
					<li>• UPI, cards and cash accepted. Bridal needs a 40% advance.</li>
					<li>• Reschedule free up to 7 days before your appointment.</li>
					<li>• Students get 10% off haircuts with a valid ID, Mon–Thu.</li>
				</ul>
			</div>
		</div>
	</div>
	<p class="mt-12 text-center">
		<a
			href="/book"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Book at these prices →
		</a>
	</p>
</section>
