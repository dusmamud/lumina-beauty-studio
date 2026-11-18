<script lang="ts">
	import { blogPosts } from '#lib/data/site.ts';
	import Picture from './Picture.svelte';
</script>

<section id="blog" class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div>
				<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">BLOG</p>
				<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">Beauty Notes</h2>
			</div>
			<a href="#blog" class="inline-flex min-h-11 items-center font-semibold text-gold-dark underline underline-offset-4">
				View all articles →
			</a>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each blogPosts as post}
				<article class="overflow-hidden rounded-3xl bg-cream ring-1 ring-line">
					<Picture
						name={post.image}
						alt={post.alt}
						width={800}
						height={520}
						sizes="(max-width: 768px) 90vw, 400px"
						imgClass="aspect-[16/10] h-auto w-full object-cover"
						pictureClass="block"
					/>
					<div class="p-5">
						<p class="text-xs font-bold tracking-wider text-gold-dark">{post.category} · {post.date}</p>
						<h3 class="mt-2 font-display text-lg leading-snug font-semibold text-ink">{post.title}</h3>
						<p class="mt-2 text-[0.95rem] leading-relaxed text-muted">{post.excerpt}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
