<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { inr, serviceDetails, services, site } from '#lib/data/site.ts';
	import Picture from '#lib/components/Picture.svelte';
</script>

<svelte:head>
	<title>Services & Prices — Lumina Beauty Studio, Bandra West</title>
	<meta
		name="description"
		content="Bridal & party makeup, hair styling, skin treatments, nail care and beauty treatments in Bandra West, Mumbai — with honest prices and durations."
	/>
	<link rel="canonical" href="{site.url}/services" />
</svelte:head>

<PageHero
	eyebrow="SERVICES"
	title="Everything we do, with honest prices"
	subtitle="Every service lists its starting price, how long it takes and what is included. Tap any service for the full detail, add-ons and FAQs."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each services as service}
			{@const detail = serviceDetails[service.id]}
			<article class="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition-shadow duration-200 hover:shadow-lg">
				<a href="/services/{service.id}" class="block overflow-hidden" aria-label="{service.title} — view details">
					<Picture
						name={service.image}
						alt={service.imageAlt}
						width={800}
						height={600}
						sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 380px"
						imgClass="aspect-[4/3] h-auto w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
						pictureClass="block"
					/>
				</a>
				<div class="flex flex-1 flex-col p-6">
					<h2 class="font-display text-2xl font-semibold text-ink">
						<a href="/services/{service.id}" class="hover:text-gold-dark">{service.title}</a>
					</h2>
					<p class="mt-2 flex-1 leading-relaxed text-muted">{service.description}</p>
					<p class="mt-3 text-sm text-muted">
						From <strong class="text-base text-gold-dark">{inr(service.priceFrom)}</strong> · {detail.duration}
					</p>
					<div class="mt-5 flex gap-3">
						<a
							href="/services/{service.id}"
							class="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-gold/50 px-5 text-sm font-semibold text-gold-dark transition-colors hover:border-gold-dark"
						>
							View details
						</a>
						<a
							href="/book?service={service.id}"
							class="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
						>
							Book now
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
	<p class="mt-10 text-center text-muted">
		Bridal packages live on their own page —
		<a href="/bridal" class="font-semibold text-gold-dark underline underline-offset-4">see bridal packages →</a>
	</p>
</section>
