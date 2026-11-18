<script lang="ts">
	import { gallery } from '#lib/data/site.ts';
	import Picture from './Picture.svelte';
</script>

<section id="gallery" class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">GALLERY</p>
			<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">Recent Work</h2>
			<p class="mx-auto mt-3 max-w-lg text-muted">A glimpse of bridal, glam, hair and skin work from our Bandra studio.</p>
		</div>
		<div class="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
			{#each gallery as item, i}
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
	</div>
</section>
