<script lang="ts">
	import { Heart } from '@lucide/svelte';
	import { instagramPosts } from '#lib/data/site.ts';
	import Picture from './Picture.svelte';
</script>

<section class="bg-white py-16 sm:py-20" aria-label="Instagram">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div>
				<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">INSTAGRAM</p>
				<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">@lumina.beauty.mumbai</h2>
				<p class="mt-2 text-muted">Daily looks, reels and behind-the-scenes from the studio.</p>
			</div>
			<a
				href="https://www.instagram.com/"
				target="_blank"
				rel="noopener"
				class="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-6 text-sm font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
			>
				Follow us →
			</a>
		</div>
		<div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
			{#each instagramPosts as post}
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noopener"
					class="group relative block overflow-hidden rounded-3xl border border-line"
					aria-label="Instagram post: {post.caption}"
				>
					<Picture
						name={post.image}
						alt={post.alt}
						width={500}
						height={500}
						sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
						imgClass="aspect-square h-auto w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
						pictureClass="block"
					/>
					<span
						class="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-ink/70 to-transparent px-3 pb-2.5 pt-8 text-xs font-semibold text-white"
					>
						<Heart size={13} fill="currentColor" aria-hidden="true" /> {post.likes}
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
