<script lang="ts">
	import { blogPosts, site } from '#lib/data/site.ts';
	import Picture from '#lib/components/Picture.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);
	const related = $derived(blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3));
</script>

<svelte:head>
	<title>{post.title} — Lumina Beauty Studio</title>
	<meta name="description" content={post.excerpt} />
	<link rel="canonical" href="{site.url}/blog/{post.slug}" />
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-12 sm:px-6">
	<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">{post.category} · {post.date}</p>
	<h1 class="mt-3 font-display text-[clamp(1.8rem,4.5vw,2.8rem)] leading-tight font-medium text-ink">
		{post.title}
	</h1>
	<p class="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>
	<div class="mt-8 overflow-hidden rounded-3xl border border-line">
		<Picture
			name={post.image}
			alt={post.alt}
			width={1000}
			height={640}
			sizes="(max-width: 768px) 90vw, 720px"
			eager={true}
			imgClass="aspect-[16/10] h-auto w-full object-cover"
			pictureClass="block"
		/>
	</div>
	<div class="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
		{#each post.body as para}
			<p>{para}</p>
		{/each}
	</div>
	<div class="mt-10 rounded-3xl bg-sand/60 p-6 text-center ring-1 ring-line">
		<p class="font-display text-xl font-medium text-ink">Want this look in real life?</p>
		<p class="mt-2 text-muted">Book a visit — the consultation is free, and honest.</p>
		<a
			href="/book"
			class="mt-4 inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Book an appointment →
		</a>
	</div>
</article>

<section class="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
	<h2 class="font-display text-2xl font-medium text-ink">Keep reading</h2>
	<div class="mt-6 grid gap-6 md:grid-cols-3">
		{#each related as r}
			<article class="overflow-hidden rounded-3xl bg-white ring-1 ring-line">
				<a href="/blog/{r.slug}" class="block overflow-hidden" aria-label="Read: {r.title}">
					<Picture
						name={r.image}
						alt={r.alt}
						width={800}
						height={520}
						sizes="(max-width: 768px) 90vw, 380px"
						imgClass="aspect-[16/10] h-auto w-full object-cover"
						pictureClass="block"
					/>
				</a>
				<div class="p-5">
					<p class="text-xs font-bold tracking-wider text-gold-dark">{r.category} · {r.date}</p>
					<h3 class="mt-2 font-display text-lg leading-snug font-semibold text-ink">
						<a href="/blog/{r.slug}" class="hover:text-gold-dark">{r.title}</a>
					</h3>
				</div>
			</article>
		{/each}
	</div>
	<p class="mt-8">
		<a href="/blog" class="font-semibold text-gold-dark underline underline-offset-4">← All articles</a>
	</p>
</section>
