<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import TrustBar from '#lib/components/TrustBar.svelte';
	import { artists, site } from '#lib/data/site.ts';
	import Picture from '#lib/components/Picture.svelte';
</script>

<svelte:head>
	<title>About Lumina Beauty Studio — Bandra West, Mumbai</title>
	<meta
		name="description"
		content="Meet the artists behind Lumina Beauty Studio, Bandra West. 8+ years, 1,000+ brides, premium products and hygiene-first care."
	/>
	<link rel="canonical" href="{site.url}/about" />
</svelte:head>

<PageHero
	eyebrow="ABOUT US"
	title="A small studio with a simple promise"
	subtitle="Look like yourself, only more rested, more confident, more you. That is the whole philosophy — everything else is technique."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid items-center gap-12 lg:grid-cols-2">
		<div class="overflow-hidden rounded-3xl border border-line">
			<Picture
				name="about-main"
				alt="Meera Kapoor, founder of Lumina Beauty Studio, at work"
				width={900}
				height={1100}
				sizes="(max-width: 1024px) 90vw, 520px"
				imgClass="aspect-[4/5] h-auto w-full object-cover"
				pictureClass="block"
			/>
		</div>
		<div>
			<h2 class="font-display text-[clamp(1.7rem,3.5vw,2.3rem)] font-medium text-ink">
				Started by a makeup artist, not a chain
			</h2>
			<p class="mt-4 leading-relaxed text-muted">
				Lumina began in 2018 with one chair, one mirror and Meera Kapoor's kit. Eight years later it is
				still a small studio on purpose — one bride a day, appointments that are never rushed, and artists
				who know your name and your skin.
			</p>
			<p class="mt-4 leading-relaxed text-muted">
				We train in Mumbai and London, use professional products (MAC, Bobbi Brown, Kryolan, OPI, L'Oréal
				Professionnel), and clean every brush between clients. No shortcuts, no heavy filters on our
				portfolio — what you see is what you get.
			</p>
			<ul class="mt-6 space-y-3 text-[0.95rem] text-ink/85">
				<li>• <strong>1,000+ brides</strong> styled across Mumbai and destination weddings</li>
				<li>• <strong>One bride a day</strong> — your date is fully yours</li>
				<li>• <strong>Hygiene-first:</strong> sterilised tools, single-use files, sealed products</li>
				<li>• <strong>Skin-first:</strong> patch tests, sensitive-skin care, honest advice</li>
			</ul>
			<a
				href="/team"
				class="mt-8 inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
			>
				Meet the artists →
			</a>
		</div>
	</div>
</section>

<TrustBar />

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="text-center">
		<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">OUR VALUES</p>
		<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">How we work</h2>
	</div>
	<div class="mt-10 grid gap-6 md:grid-cols-3">
		{#each [{ t: 'Listen first', d: 'Every appointment starts with a conversation — your skin, your hair, your occasion, your comfort. We suggest; you decide.' }, { t: 'Skin before makeup', d: 'Good makeup starts with healthy skin. We prep, protect and never pile product on unhappy skin.' }, { t: 'Honest pricing', d: 'Every price is on this website. No hidden charges, no pressure to upgrade — the quote you see is the quote you pay.' }] as v}
			<article class="rounded-3xl bg-white p-6 ring-1 ring-line">
				<h3 class="font-display text-xl font-semibold text-ink">{v.t}</h3>
				<p class="mt-3 leading-relaxed text-muted">{v.d}</p>
			</article>
		{/each}
	</div>
	<p class="mt-10 text-center">
		<a
			href="/book"
			class="inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
		>
			Book an appointment →
		</a>
	</p>
</section>
