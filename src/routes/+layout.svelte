<script lang="ts">
	import '@fontsource/playfair-display/400.css';
	import '@fontsource/playfair-display/500.css';
	import '@fontsource/playfair-display/600.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '../app.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { site } from '#lib/data/site.ts';

	let { children } = $props();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BeautySalon',
		name: site.name,
		description: 'Professional makeup artist and beauty studio in Bandra West, Mumbai — bridal makeup, hair styling, skin treatments and nail care.',
		telephone: site.phoneDisplay,
		email: site.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: '14 Glow Lane, Linking Road, Bandra West',
			addressLocality: 'Mumbai',
			postalCode: '400050',
			addressCountry: 'IN'
		},
		priceRange: '₹₹',
		url: site.url
	};

	// Reveal-on-scroll: transform + opacity only, 300ms, respects reduced motion via CSS.
	$effect(() => {
		const els = document.querySelectorAll('.reveal');
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
			},
			{ threshold: 0.12 }
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	});
</script>

<svelte:head>
	<title>Lumina Beauty Studio — Makeup Artist & Beauty Studio in Mumbai</title>
	<meta
		name="description"
		content="Reveal your natural beauty. Bridal & party makeup, hair styling, skin treatments and nail care in Bandra West, Mumbai. Book an appointment today."
	/>
	<link rel="canonical" href={site.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Lumina Beauty Studio — Reveal Your Natural Beauty" />
	<meta
		property="og:description"
		content="Professional care that enhances your natural beauty and gives you confidence every day."
	/>
	<meta property="og:url" content={site.url} />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
>
	Skip to main content
</a>

<Header />
<main id="main">{@render children()}</main>
<Footer />
