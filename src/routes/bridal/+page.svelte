<script lang="ts">
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { bridalPackages, faqs, gallery, inr, site } from '#lib/data/site.ts';
	import Picture from '#lib/components/Picture.svelte';

	let date = $state('');
	let checkResult = $state<null | { available: boolean; message: string }>(null);

	function checkDate() {
		if (!date) return;
		// Mock availability: deterministic per date, so the same date always answers the same.
		const seed = [...date].reduce((a, c) => a + c.charCodeAt(0), 0);
		const available = seed % 10 < 7;
		checkResult = available
			? {
					available: true,
					message: `Good news — ${new Date(date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} looks open. A 40% advance locks it — we take one bride a day.`
				}
			: {
					available: false,
					message: `That date is already booked with another bride. Join the waitlist on WhatsApp and we will tell you first if it opens up.`
				};
	}

	const bridalFaqs = faqs.filter((f) =>
		['How far ahead should I book my bridal date?', 'Do you offer a bridal trial?', 'Will the makeup last in Mumbai heat and humidity?', 'Do you travel for outstation or destination weddings?', 'What payment methods do you accept?', 'What is your cancellation policy?'].includes(f.q)
	);
</script>

<svelte:head>
	<title>Bridal Makeup Artist in Bandra West, Mumbai — Lumina Beauty Studio</title>
	<meta
		name="description"
		content="HD & airbrush bridal makeup in Mumbai from ₹24,999. One bride a day, free trial, 3 looks for sangeet, wedding & reception. Check your date."
	/>
	<link rel="canonical" href="{site.url}/bridal" />
</svelte:head>

<PageHero
	eyebrow="BRIDAL"
	title="Your wedding look, from first function to last photo"
	subtitle="One bride a day. One artist with you throughout. HD or airbrush, trial included, and a look that survives Mumbai heat, happy tears and 12 hours of celebrating."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 lg:grid-cols-3">
		{#each bridalPackages as pkg}
			<article
				class="relative flex flex-col rounded-3xl bg-white p-7 ring-1 {pkg.tag
					? 'ring-2 ring-gold shadow-lg'
					: 'ring-line'}"
			>
				{#if pkg.tag}
					<span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold tracking-wide whitespace-nowrap text-white uppercase">
						{pkg.tag}
					</span>
				{/if}
				<h2 class="font-display text-2xl font-semibold text-ink">{pkg.name}</h2>
				<p class="mt-1 text-sm text-muted">{pkg.looks}</p>
				<p class="mt-4 font-display text-3xl font-medium text-gold-dark">{inr(pkg.price)}</p>
				<ul class="mt-5 flex-1 space-y-2.5 text-[0.95rem] text-ink/85">
					{#each pkg.includes as inc}
						<li class="flex gap-3"><span class="text-gold-dark" aria-hidden="true">✓</span>{inc}</li>
					{/each}
				</ul>
				<a
					href="/book?service=bridal-makeup"
					class="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
				>
					Book {pkg.name}
				</a>
			</article>
		{/each}
	</div>

	<div class="mt-14 rounded-3xl bg-sand/60 p-6 ring-1 ring-line sm:p-8">
		<h2 class="font-display text-2xl font-medium text-ink">Check your wedding date</h2>
		<p class="mt-2 text-muted">
			Enter your date and see instantly if it is open. This is a mock checker — real availability is confirmed
			on WhatsApp within 2 working hours.
		</p>
		<form
			class="mt-5 flex flex-col gap-3 sm:flex-row"
			onsubmit={(e) => {
				e.preventDefault();
				checkDate();
			}}
		>
			<label class="sr-only" for="bridal-date">Wedding date</label>
			<input
				id="bridal-date"
				type="date"
				bind:value={date}
				required
				class="min-h-12 flex-1 rounded-xl border border-line bg-white px-4 text-base text-ink"
			/>
			<button
				type="submit"
				class="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
			>
				Check my date
			</button>
		</form>
		{#if checkResult}
			<p
				role="status"
				class="mt-4 rounded-xl px-4 py-3 text-[0.95rem] font-medium {checkResult.available
					? 'bg-green-50 text-green-900'
					: 'bg-amber-50 text-amber-900'}"
			>
				{checkResult.message}
			</p>
			{#if checkResult.available}
				<a
					href="/book?service=bridal-makeup"
					class="mt-3 inline-flex min-h-12 items-center rounded-full border border-gold/50 px-6 text-sm font-semibold text-gold-dark"
				>
					Lock this date →
				</a>
			{:else}
				<a
					href={site.whatsappHref}
					target="_blank"
					rel="noopener"
					class="mt-3 inline-flex min-h-12 items-center rounded-full border border-gold/50 px-6 text-sm font-semibold text-gold-dark"
				>
					Join the waitlist on WhatsApp →
				</a>
			{/if}
		{/if}
		<p class="mt-4 text-sm text-muted">
			Advance: 40% to lock your date (non-refundable, transferable to a new date once). Balance due on the day.
			Travel within Bandra West included; outstation at actuals.
		</p>
	</div>

	<div class="mt-14 grid gap-10 lg:grid-cols-2">
		<div>
			<h2 class="font-display text-2xl font-medium text-ink">How a bridal booking works</h2>
			<ol class="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink/85">
				<li><strong>1. Check your date</strong> — above, or message us on WhatsApp.</li>
				<li><strong>2. Free half-face trial</strong> — see the look on your own skin, in daylight.</li>
				<li><strong>3. 40% advance locks the date</strong> — UPI, card or cash.</li>
				<li><strong>4. Skin prep plan</strong> — a simple routine for the weeks before.</li>
				<li><strong>5. The day</strong> — one artist, with you from the first function to the last photo.</li>
			</ol>
		</div>
		<div>
			<h2 class="font-display text-2xl font-medium text-ink">Bridal questions</h2>
			<div class="mt-5">
				<FaqAccordion items={bridalFaqs} idPrefix="bridal-faq" />
			</div>
		</div>
	</div>

	<h2 class="mt-14 font-display text-2xl font-medium text-ink">Recent bridal work</h2>
	<div class="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
		{#each gallery.filter((g) => g.category === 'Bridal').slice(0, 4) as item}
			<div class="overflow-hidden rounded-3xl border border-line">
				<Picture
					name={item.image}
					alt={item.alt}
					width={600}
					height={600}
					sizes="(max-width: 640px) 45vw, 280px"
					imgClass="aspect-square h-auto w-full object-cover"
					pictureClass="block"
				/>
			</div>
		{/each}
	</div>
</section>
