<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { blogPosts, site } from '#lib/data/site.ts';
	import Picture from '#lib/components/Picture.svelte';
</script>

<svelte:head>
	<title>Beauty Notes — Blog | Lumina Beauty Studio, Bandra West</title>
	<meta
		name="description"
		content="Bridal makeup tips, skin prep timelines, HD vs airbrush and how to choose your artist — practical notes from the Lumina studio."
	/>
	<link rel="canonical" href="{site.url}/blog" />
</svelte:head>

<PageHero
	eyebrow="BLOG"
	title="Beauty Notes"
	subtitle="Practical notes from the studio — no jargon, no sponsored tips. Just what we tell our own clients."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each blogPosts as post}
			<article class="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition-shadow duration-200 hover:shadow-lg">
				<a href="/blog/{post.slug}" class="block overflow-hidden" aria-label="Read: {post.title}">
					<Picture
						name={post.image}
						alt={post.alt}
						width={800}
						height={520}
						sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 380px"
						imgClass="aspect-[16/10] h-auto w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
						pictureClass="block"
					/>
				</a>
				<div class="flex flex-1 flex-col p-5">
					<p class="text-xs font-bold tracking-wider text-gold-dark">{post.category} · {post.date}</p>
					<h2 class="mt-2 font-display text-lg leading-snug font-semibold text-ink">
						<a href="/blog/{post.slug}" class="hover:text-gold-dark">{post.title}</a>
					</h2>
					<p class="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{post.excerpt}</p>
					<a
						href="/blog/{post.slug}"
						class="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-gold-dark underline underline-offset-4"
					>
						Read article →
					</a>
				</div>
			</article>
		{/each}
	</div>
</section>
