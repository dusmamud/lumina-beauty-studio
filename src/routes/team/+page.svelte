<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { artists, site } from '#lib/data/site.ts';
	import Picture from '#lib/components/Picture.svelte';
</script>

<svelte:head>
	<title>Meet the Artists — Lumina Beauty Studio, Bandra West</title>
	<meta
		name="description"
		content="Meet Meera, Aisha, Ravi and Sana — the artists behind Lumina Beauty Studio. Bridal, hair, skin and nails, with 5–8 years of craft each."
	/>
	<link rel="canonical" href="{site.url}/team" />
</svelte:head>

<PageHero
	eyebrow="OUR TEAM"
	title="You book a person, not a salon"
	subtitle="Every artist has a specialty, a level and their own days. Pick the person whose work you love — the booking form lets you choose."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 md:grid-cols-2">
		{#each artists as artist}
			<article class="overflow-hidden rounded-3xl bg-white ring-1 ring-line">
				<div class="grid sm:grid-cols-5">
					<div class="sm:col-span-2">
						<Picture
							name={artist.image}
							alt={artist.imageAlt}
							width={600}
							height={700}
							sizes="(max-width: 768px) 90vw, 380px"
							imgClass="aspect-[6/7] h-full w-full object-cover"
							pictureClass="block h-full"
						/>
					</div>
					<div class="p-6 sm:col-span-3">
						<p class="text-xs font-bold tracking-[0.2em] text-gold-dark uppercase">{artist.level}</p>
						<h2 class="mt-2 font-display text-2xl font-semibold text-ink">{artist.name}</h2>
						<p class="text-sm font-medium text-muted">{artist.role} · {artist.experience}</p>
						<p class="mt-3 leading-relaxed text-muted">{artist.bio}</p>
						<p class="mt-4 flex flex-wrap gap-2">
							{#each artist.specialties as s}
								<span class="rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-gold-dark ring-1 ring-line">
									{s}
								</span>
							{/each}
						</p>
						<p class="mt-4 text-sm text-muted">In studio: {artist.days}</p>
						<a
							href="/book?artist={artist.id}"
							class="mt-5 inline-flex min-h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
						>
							Book with {artist.name.split(' ')[0]} →
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
