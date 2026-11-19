<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { accessibilityFeatures, site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Accessibility — Lumina Beauty Studio, Bandra West, Mumbai</title>
	<meta
		name="description"
		content="Lumina Beauty Studio is step-free with a lift, an accessible washroom, and assistance on request. We aim for WCAG 2.2 AA on this website too."
	/>
	<link rel="canonical" href="{site.url}/accessibility" />
</svelte:head>

<PageHero
	eyebrow="ACCESSIBILITY"
	title="Everyone is welcome here"
	subtitle="Beauty should not be hard to reach. Here is exactly what to expect when you visit — and how to ask for anything you need."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each accessibilityFeatures as feature}
			<div class="rounded-3xl bg-white p-6 ring-1 ring-line">
				<h2 class="font-semibold text-ink">{feature.title}</h2>
				<p class="mt-1 text-[0.95rem] leading-relaxed text-muted">{feature.detail}</p>
			</div>
		{/each}
	</div>

	<div class="mt-12 grid gap-10 lg:grid-cols-2">
		<div class="rounded-3xl bg-sand p-6 sm:p-8">
			<h2 class="font-display text-2xl font-medium text-ink">Need something adjusted?</h2>
			<p class="mt-2 text-[0.95rem] leading-relaxed text-muted">
				Tell us when you book — or any time before your visit — and we will do our best. Extra time, a quieter slot, fragrance-free products, help with stairs or seating: just ask.
			</p>
			<div class="mt-5 flex flex-wrap gap-3">
				<a
					href={site.phoneHref}
					class="inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
				>
					Call {site.phoneDisplay}
				</a>
				<a
					href={site.whatsappHref}
					target="_blank"
					rel="noopener"
					class="inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
				>
					WhatsApp us
				</a>
			</div>
			<p class="mt-4 text-sm text-muted">
				Email: <a href="mailto:{site.email}" class="font-semibold text-gold-dark underline underline-offset-4">{site.email}</a>
			</p>
		</div>
		<div>
			<h2 class="font-display text-2xl font-medium text-ink">This website</h2>
			<p class="mt-2 text-[0.95rem] leading-relaxed text-muted">
				We aim for WCAG 2.2 AA on this website: full keyboard access, visible focus, 48px tap targets, text contrast of at least 4.5:1, and animations that respect your reduced-motion setting.
			</p>
			<p class="mt-3 text-[0.95rem] leading-relaxed text-muted">
				If you find anything on this site hard to use — a button that is too small, text that is hard to read, a form that does not work with your screen reader — please tell us on WhatsApp or by email. We fix accessibility reports first.
			</p>
			<p class="mt-3 text-[0.95rem] leading-relaxed text-muted">
				{site.address} · {site.hours}
			</p>
		</div>
	</div>
</section>
