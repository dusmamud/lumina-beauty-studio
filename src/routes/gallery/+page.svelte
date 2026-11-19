<script lang="ts">
	import BeforeAfter from '#lib/components/BeforeAfter.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { artists, beforeAfter, gallery, galleryCategories, site } from '#lib/data/site.ts';
	import Picture from '#lib/components/Picture.svelte';

	let filter = $state<(typeof galleryCategories)[number]>('All');
	const visible = $derived(filter === 'All' ? gallery : gallery.filter((g) => g.category === filter));

	let serviceFilter = $state('All');
	let artistFilter = $state('all');
	const baServices = ['All', ...new Set(beforeAfter.map((b) => b.service))];
	const visibleBeforeAfter = $derived(
		beforeAfter.filter(
			(b) =>
				(serviceFilter === 'All' || b.service === serviceFilter) &&
				(artistFilter === 'all' || b.artist === artistFilter)
		)
	);
</script>

<svelte:head>
	<title>Gallery — Real Work | Lumina Beauty Studio, Bandra West</title>
	<meta
		name="description"
		content="Real bridal, party, hair, skin and nail work from Lumina Beauty Studio, Bandra West — unfiltered, in natural light, across Indian skin tones."
	/>
	<link rel="canonical" href="{site.url}/gallery" />
</svelte:head>

<PageHero
	eyebrow="GALLERY"
	title="Real work, no heavy filters"
	subtitle="Brides distrust whitened skin — so do we. Every photo here is real client work in natural light, across Indian skin tones."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by service">
		{#each galleryCategories as cat}
			<button
				type="button"
				class="min-h-12 rounded-full px-5 text-sm font-semibold transition-colors duration-150 {filter === cat
					? 'bg-ink text-white'
					: 'bg-white text-ink ring-1 ring-line hover:border-gold-dark hover:text-gold-dark'}"
				aria-pressed={filter === cat}
				onclick={() => (filter = cat)}
			>
				{cat}
			</button>
		{/each}
	</div>

	<div class="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
		{#each visible as item, i}
			<figure
				class="group relative overflow-hidden rounded-3xl border border-line bg-sand {i === 0
					? 'col-span-2 row-span-2 lg:col-span-1 lg:row-span-2'
					: ''}"
			>
				<Picture
					name={item.image}
					alt={item.alt}
					width={800}
					height={1000}
					sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
					imgClass="aspect-[4/5] h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
					pictureClass="block h-full"
				/>
				<figcaption
					class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-white"
				>
					{item.label}
				</figcaption>
			</figure>
		{/each}
	</div>
	{#if visible.length === 0}
		<p class="mt-8 text-center text-muted">No photos in this category yet — check back soon.</p>
	{/if}

	<h2 class="mt-16 font-display text-3xl font-medium text-ink">Before &amp; after</h2>
	<p class="mt-2 max-w-2xl leading-relaxed text-muted">
		Drag the handle (or use the arrow keys) to compare. Mock preview for design approval: the “before” side is the same photo shown with a filter — real before/after pairs need written client consent and are added after approval.
	</p>

	<div class="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter before and after by service">
		{#each baServices as s}
			<button
				type="button"
				class="min-h-12 rounded-full px-5 text-sm font-semibold transition-colors duration-150 {serviceFilter === s
					? 'bg-ink text-white'
					: 'bg-white text-ink ring-1 ring-line hover:border-gold-dark hover:text-gold-dark'}"
				aria-pressed={serviceFilter === s}
				onclick={() => (serviceFilter = s)}
			>
				{s}
			</button>
		{/each}
	</div>
	<div class="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter before and after by artist">
		<button
			type="button"
			class="min-h-12 rounded-full px-5 text-sm font-semibold transition-colors duration-150 {artistFilter === 'all'
				? 'bg-ink text-white'
				: 'bg-white text-ink ring-1 ring-line hover:border-gold-dark hover:text-gold-dark'}"
			aria-pressed={artistFilter === 'all'}
			onclick={() => (artistFilter = 'all')}
		>
			All artists
		</button>
		{#each artists as a}
			<button
				type="button"
				class="min-h-12 rounded-full px-5 text-sm font-semibold transition-colors duration-150 {artistFilter === a.id
					? 'bg-ink text-white'
					: 'bg-white text-ink ring-1 ring-line hover:border-gold-dark hover:text-gold-dark'}"
				aria-pressed={artistFilter === a.id}
				onclick={() => (artistFilter = a.id)}
			>
				{a.name.split(' ')[0]}
			</button>
		{/each}
	</div>

	<div class="mt-8 grid gap-6 sm:grid-cols-2">
		{#each visibleBeforeAfter as item}
			<div>
				<BeforeAfter image={item.image} alt={item.alt} label={item.label} />
			</div>
		{/each}
	</div>
	{#if visibleBeforeAfter.length === 0}
		<p class="mt-8 text-center text-muted">No before &amp; after work for this combination yet — check back soon.</p>
	{/if}

	<p class="mt-10 text-center">
		<a
			href="/book"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Book your look →
		</a>
	</p>
</section>
