<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { site } from '#lib/data/site.ts';

	let name = $state('');
	let phone = $state('');
	let message = $state('');
	let sent = $state(false);
	let error = $state('');

	function submit(e: SubmitEvent) {
		e.preventDefault();
		error = '';
		if (name.trim().length < 2) {
			error = 'Please enter your name.';
			return;
		}
		if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s+]/g, '').replace(/^91/, ''))) {
			error = 'Please enter a valid 10-digit Indian mobile number.';
			return;
		}
		sent = true;
	}
</script>

<svelte:head>
	<title>Contact & Location — Lumina Beauty Studio, Linking Road, Bandra West</title>
	<meta
		name="description"
		content="Visit Lumina Beauty Studio at Linking Road, Bandra West, Mumbai — 5 minutes from Bandra station. Call, WhatsApp or send a message."
	/>
	<link rel="canonical" href="{site.url}/contact" />
</svelte:head>

<PageHero
	eyebrow="CONTACT"
	title="Come say hi — or just call"
	subtitle="2nd Floor, 14 Glow Lane, Linking Road, Bandra West — 5 minutes from Bandra station, above the old flower market. Walk-ins welcome, appointments preferred."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-2">
		<div>
			<div class="overflow-hidden rounded-3xl border border-line">
				<iframe
					title="Map — Lumina Beauty Studio, Linking Road, Bandra West, Mumbai"
					src={site.mapEmbed}
					class="h-80 w-full border-0"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				<div class="rounded-3xl bg-white p-5 ring-1 ring-line">
					<h2 class="font-semibold text-ink">How to reach us</h2>
					<ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
						<li>• Train: Bandra station, 5 min walk</li>
						<li>• Auto / taxi: ask for Linking Road, near the flower market</li>
						<li>• Parking: paid parking on Linking Road</li>
						<li>• Landmark: above the old flower market</li>
					</ul>
				</div>
				<div class="rounded-3xl bg-white p-5 ring-1 ring-line">
					<h2 class="font-semibold text-ink">Hours</h2>
					<p class="mt-2 text-sm leading-relaxed text-muted">
						{site.hours}<br />Sundays: bridal-only, by prior booking.<br />Festival hours are posted on Instagram.
					</p>
					<p class="mt-3 text-sm text-muted">
						Areas we serve: {site.areas.join(', ')}.
					</p>
				</div>
			</div>
		</div>

		<div class="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
			<h2 class="font-display text-2xl font-medium text-ink">Send us a message</h2>
			<p class="mt-2 text-sm text-muted">
				Questions about a service, a date or a gift card? We reply within 2 working hours.
			</p>
			{#if sent}
				<div role="status" class="mt-6 rounded-2xl bg-cream px-5 py-6 text-center ring-1 ring-line">
					<p class="font-display text-2xl text-gold-dark">Thank you, {name.trim().split(' ')[0]}!</p>
					<p class="mt-2 text-muted">
						Your message is noted. We will call you back on your mobile within 2 working hours.
					</p>
					<button
						type="button"
						class="mt-4 inline-flex min-h-12 items-center rounded-full border border-gold/50 px-6 text-sm font-semibold text-gold-dark"
						onclick={() => {
							sent = false;
							name = '';
							phone = '';
							message = '';
						}}
					>
						Send another message
					</button>
				</div>
			{:else}
				<form onsubmit={submit} novalidate class="mt-6 space-y-5">
					<div>
						<label for="ct-name" class="mb-1.5 block text-sm font-semibold text-ink">Your name</label>
						<input
							id="ct-name"
							type="text"
							autocomplete="name"
							placeholder="e.g. Ananya Sharma"
							bind:value={name}
							required
							class="min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink placeholder:text-muted/70"
						/>
					</div>
					<div>
						<label for="ct-phone" class="mb-1.5 block text-sm font-semibold text-ink">Mobile number</label>
						<input
							id="ct-phone"
							type="tel"
							inputmode="tel"
							autocomplete="tel"
							placeholder="98765 43210"
							bind:value={phone}
							required
							class="min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink placeholder:text-muted/70"
						/>
					</div>
					<div>
						<label for="ct-message" class="mb-1.5 block text-sm font-semibold text-ink">Message</label>
						<textarea
							id="ct-message"
							rows="4"
							placeholder="Hi! I wanted to ask about…"
							bind:value={message}
							class="w-full rounded-xl border border-line bg-cream px-4 py-3 text-base text-ink placeholder:text-muted/70"
						></textarea>
					</div>
					{#if error}
						<p role="alert" class="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>
					{/if}
					<button
						type="submit"
						class="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark sm:w-auto"
					>
						Send message
					</button>
				</form>
			{/if}
			<div class="mt-6 flex flex-wrap gap-3 border-t border-line pt-6">
				<a
					href={site.phoneHref}
					class="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-ink px-6 text-base font-semibold text-white"
				>
					Call {site.phoneDisplay}
				</a>
				<a
					href={site.whatsappHref}
					target="_blank"
					rel="noopener"
					class="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-gold/50 px-6 text-base font-semibold text-gold-dark"
				>
					WhatsApp us
				</a>
			</div>
		</div>
	</div>
</section>
