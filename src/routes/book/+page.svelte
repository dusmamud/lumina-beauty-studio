<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { artists, services, site } from '#lib/data/site.ts';

	let step = $state(1);
	let serviceId = $state(services[0].id);
	let artistId = $state('any');
	let date = $state('');
	let time = $state('');
	let name = $state('');
	let phone = $state('');
	let notes = $state('');
	let error = $state('');
	let ref = $state('');

	const times = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
	const chosenService = $derived(services.find((s) => s.id === serviceId));
	const chosenArtist = $derived(artists.find((a) => a.id === artistId));

	// Pre-select from ?service= / ?artist= links (e.g. /book?service=bridal-makeup).
	$effect(() => {
		const q = new URLSearchParams(window.location.search);
		const s = q.get('service');
		const a = q.get('artist');
		if (s && services.some((x) => x.id === s)) serviceId = s;
		if (a && artists.some((x) => x.id === a)) artistId = a;
	});

	function next() {
		error = '';
		if (step === 3 && !date) {
			error = 'Please pick a date for your appointment.';
			return;
		}
		if (step === 3 && !time) {
			error = 'Please pick a time slot.';
			return;
		}
		if (step < 4) step += 1;
	}

	function submit(e: SubmitEvent) {
		e.preventDefault();
		error = '';
		if (name.trim().length < 2) {
			error = 'Please enter your full name.';
			return;
		}
		if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s+]/g, '').replace(/^91/, ''))) {
			error = 'Please enter a valid 10-digit Indian mobile number.';
			return;
		}
		ref = `LUM-${Math.floor(100000 + Math.random() * 900000)}`;
		step = 5;
	}

	const steps = ['Service', 'Artist', 'Date & time', 'Your details'];
</script>

<svelte:head>
	<title>Book an Appointment — Lumina Beauty Studio, Bandra West</title>
	<meta
		name="description"
		content="Book bridal makeup, hair, skin or nails at Lumina Beauty Studio in 4 quick steps. Pick a service, an artist, a slot — get an instant confirmation."
	/>
	<link rel="canonical" href="{site.url}/book" />
</svelte:head>

<PageHero
	eyebrow="BOOK NOW"
	title="Book in four quick steps"
	subtitle="No account, no email needed — just your name and mobile. We confirm every booking by phone within 2 working hours."
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
	{#if step < 5}
		<ol class="flex items-center gap-2" aria-label="Booking progress">
			{#each steps as label, i}
				<li class="flex flex-1 items-center gap-2">
					<span
						class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold {step > i + 1
							? 'bg-gold text-white'
							: step === i + 1
								? 'bg-ink text-white'
								: 'bg-white text-muted ring-1 ring-line'}"
						aria-current={step === i + 1 ? 'step' : undefined}
					>
						{i + 1}
					</span>
					<span class="hidden text-sm font-medium {step === i + 1 ? 'text-ink' : 'text-muted'} sm:block">
						{label}
					</span>
					{#if i < steps.length - 1}<span class="h-px flex-1 bg-line" aria-hidden="true"></span>{/if}
				</li>
			{/each}
		</ol>

		<div class="mt-8 rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
			{#if step === 1}
				<h2 class="font-display text-2xl font-medium text-ink">Pick a service</h2>
				<div class="mt-5 grid gap-3 sm:grid-cols-2">
					{#each services as s}
						<button
							type="button"
							class="min-h-14 rounded-2xl px-5 py-3 text-left ring-1 transition-colors {serviceId === s.id
								? 'bg-cream ring-2 ring-gold'
								: 'bg-white ring-line hover:ring-gold/60'}"
							aria-pressed={serviceId === s.id}
							onclick={() => (serviceId = s.id)}
						>
							<span class="block font-semibold text-ink">{s.title}</span>
							<span class="block text-sm text-muted">From ₹{s.priceFrom.toLocaleString('en-IN')} · {s.description}</span>
						</button>
					{/each}
				</div>
			{:else if step === 2}
				<h2 class="font-display text-2xl font-medium text-ink">Pick an artist</h2>
				<p class="mt-1 text-sm text-muted">Or let us match you with whoever is free — every artist is senior-trained.</p>
				<div class="mt-5 grid gap-3 sm:grid-cols-2">
					<button
						type="button"
						class="min-h-14 rounded-2xl px-5 py-3 text-left ring-1 transition-colors {artistId === 'any'
							? 'bg-cream ring-2 ring-gold'
							: 'bg-white ring-line hover:ring-gold/60'}"
						aria-pressed={artistId === 'any'}
						onclick={() => (artistId = 'any')}
					>
						<span class="block font-semibold text-ink">Any available artist</span>
						<span class="block text-sm text-muted">Fastest slot, same quality</span>
					</button>
					{#each artists as a}
						<button
							type="button"
							class="min-h-14 rounded-2xl px-5 py-3 text-left ring-1 transition-colors {artistId === a.id
								? 'bg-cream ring-2 ring-gold'
								: 'bg-white ring-line hover:ring-gold/60'}"
							aria-pressed={artistId === a.id}
							onclick={() => (artistId = a.id)}
						>
							<span class="block font-semibold text-ink">{a.name}</span>
							<span class="block text-sm text-muted">{a.role} · {a.days}</span>
						</button>
					{/each}
				</div>
			{:else if step === 3}
				<h2 class="font-display text-2xl font-medium text-ink">Pick a date & time</h2>
				<p class="mt-1 text-sm text-muted">
					Showing open slots for {chosenService?.title}{chosenArtist ? ` with ${chosenArtist.name.split(' ')[0]}` : ''}.
				</p>
				<label for="bk-date" class="mt-5 block text-sm font-semibold text-ink">Preferred date</label>
				<input
					id="bk-date"
					type="date"
					bind:value={date}
					required
					class="mt-1.5 min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink"
				/>
				<p class="mt-5 text-sm font-semibold text-ink">Time slots (IST)</p>
				<div class="mt-2 flex flex-wrap gap-2" role="group" aria-label="Time slots">
					{#each times as t}
						<button
							type="button"
							class="min-h-11 min-w-20 rounded-full px-4 text-sm font-semibold transition-colors {time === t
								? 'bg-ink text-white'
								: 'bg-cream text-ink ring-1 ring-line hover:ring-gold-dark'}"
							aria-pressed={time === t}
							onclick={() => (time = t)}
						>
							{t}
						</button>
					{/each}
				</div>
			{:else if step === 4}
				<h2 class="font-display text-2xl font-medium text-ink">Your details</h2>
				<form onsubmit={submit} novalidate>
					<div class="mt-5 grid gap-5 sm:grid-cols-2">
						<div>
							<label for="bk-name" class="mb-1.5 block text-sm font-semibold text-ink">Full name</label>
							<input
								id="bk-name"
								type="text"
								autocomplete="name"
								placeholder="e.g. Ananya Sharma"
								bind:value={name}
								required
								class="min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink placeholder:text-muted/70"
							/>
						</div>
						<div>
							<label for="bk-phone" class="mb-1.5 block text-sm font-semibold text-ink">Mobile number</label>
							<input
								id="bk-phone"
								type="tel"
								inputmode="tel"
								autocomplete="tel"
								placeholder="98765 43210"
								bind:value={phone}
								required
								class="min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink placeholder:text-muted/70"
							/>
						</div>
						<div class="sm:col-span-2">
							<label for="bk-notes" class="mb-1.5 block text-sm font-semibold text-ink">
								Anything we should know? <span class="font-normal text-muted">(optional)</span>
							</label>
							<textarea
								id="bk-notes"
								rows="3"
								placeholder="Occasion, skin type, allergies…"
								bind:value={notes}
								class="w-full rounded-xl border border-line bg-cream px-4 py-3 text-base text-ink placeholder:text-muted/70"
							></textarea>
						</div>
					</div>
					<button
						type="submit"
						class="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark sm:w-auto"
					>
						Confirm booking
					</button>
					<p class="mt-3 text-sm text-muted">No payment needed now. We confirm every booking by phone.</p>
				</form>
			{/if}

			{#if error}
				<p role="alert" class="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>
			{/if}

			{#if step < 4}
				<div class="mt-6 flex justify-between">
					<button
						type="button"
						class="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold text-muted disabled:opacity-40"
						disabled={step === 1}
						onclick={() => (step -= 1)}
					>
						← Back
					</button>
					<button
						type="button"
						class="inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
						onclick={next}
					>
						Continue →
					</button>
				</div>
			{/if}
		</div>

		<p class="mt-6 text-center text-sm text-muted">
			Prefer to talk? Call <a href={site.phoneHref} class="font-semibold text-gold-dark">{site.phoneDisplay}</a>
			or
			<a href={site.whatsappHref} target="_blank" rel="noopener" class="font-semibold text-gold-dark">
				WhatsApp us →
			</a>
		</p>
	{:else}
		<div role="status" class="rounded-3xl bg-white p-8 text-center ring-1 ring-line sm:p-12">
			<p class="font-display text-3xl text-gold-dark">You are booked in, {name.trim().split(' ')[0]}!</p>
			<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">
				<strong class="text-ink">{chosenService?.title}</strong>
				{chosenArtist ? ` with ${chosenArtist.name}` : ''} on
				<strong class="text-ink">
					{new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
						weekday: 'long',
						day: 'numeric',
						month: 'long',
						year: 'numeric'
					})}
				</strong>
				at <strong class="text-ink">{time}</strong>.
			</p>
			<p class="mx-auto mt-4 max-w-md rounded-2xl bg-cream px-5 py-4 text-sm leading-relaxed text-muted ring-1 ring-line">
				Booking reference: <strong class="text-ink">{ref}</strong><br />
				We will WhatsApp you a confirmation and a reminder 2 hours before. Reschedule free up to 7 days ahead —
				just reply to the WhatsApp message.
			</p>
			<p class="mt-4 text-sm text-muted">{site.address}<br />{site.hours}</p>
			<div class="mt-6 flex flex-wrap justify-center gap-3">
				<a
					href="/"
					class="inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-base font-semibold text-white"
				>
					Back to home
				</a>
				<button
					type="button"
					class="inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark"
					onclick={() => {
						step = 1;
						name = '';
						phone = '';
						notes = '';
						date = '';
						time = '';
					}}
				>
					Book another
				</button>
			</div>
		</div>
	{/if}
</section>
