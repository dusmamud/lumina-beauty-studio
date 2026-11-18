<script lang="ts">
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import { gallery, inr, site } from '#lib/data/site.ts';
	import Picture from '#lib/components/Picture.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const service = $derived(data.service);
	const detail = $derived(data.detail);
</script>

<svelte:head>
	<title>{service.title} in Bandra West — Lumina Beauty Studio</title>
	<meta
		name="description"
		content="{service.description} — from {inr(service.priceFrom)}, {detail.duration}. {service.title} at Lumina Beauty Studio, Bandra West, Mumbai."
	/>
	<link rel="canonical" href="{site.url}/services/{service.id}" />
</svelte:head>

<section class="bg-cream pb-10 pt-12 sm:pb-14 sm:pt-16">
	<div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
		<div>
			<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">SERVICES</p>
			<h1 class="mt-3 font-display text-[clamp(2rem,5vw,3.2rem)] leading-tight font-medium text-ink">
				{service.title}
			</h1>
			<p class="mt-4 leading-relaxed text-muted">{detail.long}</p>
			<p class="mt-5 text-lg">
				From <strong class="text-gold-dark">{inr(service.priceFrom)}</strong>
				<span class="text-sm text-muted"> · {detail.duration}</span>
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href="/book?service={service.id}"
					class="inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
				>
					Book {service.title} →
				</a>
				<a
					href={site.whatsappHref}
					target="_blank"
					rel="noopener"
					class="inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
				>
					Ask on WhatsApp
				</a>
			</div>
		</div>
		<div class="overflow-hidden rounded-3xl border border-line">
			<Picture
				name={service.image}
				alt={service.imageAlt}
				width={900}
				height={700}
				sizes="(max-width: 1024px) 90vw, 560px"
				eager={true}
				imgClass="aspect-[9/7] h-auto w-full object-cover"
				pictureClass="block"
			/>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-2">
		<div>
			<h2 class="font-display text-2xl font-medium text-ink">What is included</h2>
			<ul class="mt-4 space-y-3 text-[0.95rem] text-ink/85">
				{#each detail.includes as inc}
					<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>{inc}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2 class="font-display text-2xl font-medium text-ink">Add-ons</h2>
			<ul class="mt-4 divide-y divide-line rounded-3xl bg-white ring-1 ring-line">
				{#each detail.addOns as add}
					<li class="flex items-center justify-between gap-4 px-5 py-3.5">
						<span class="text-[0.95rem] text-ink/85">{add.name}</span>
						<span class="font-semibold text-gold-dark">
							{add.price < 0 ? '−' : '+'}{inr(Math.abs(add.price))}
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<h2 class="mt-14 font-display text-2xl font-medium text-ink">Questions, answered</h2>
	<div class="mt-5 max-w-3xl">
		<FaqAccordion items={detail.faqs} idPrefix="service-faq" />
	</div>

	<h2 class="mt-14 font-display text-2xl font-medium text-ink">Recent work</h2>
	<div class="mt-5 grid grid-cols-3 gap-4">
		{#each gallery.slice(0, 3) as item}
			<div class="overflow-hidden rounded-3xl border border-line">
				<Picture
					name={item.image}
					alt={item.alt}
					width={600}
					height={600}
					sizes="(max-width: 768px) 30vw, 380px"
					imgClass="aspect-square h-auto w-full object-cover"
					pictureClass="block"
				/>
			</div>
		{/each}
	</div>

	<p class="mt-12 text-center">
		<a
			href="/book?service={service.id}"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Book {service.title} — from {inr(service.priceFrom)} →
		</a>
	</p>
</section>
