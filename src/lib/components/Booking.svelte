<script lang="ts">
	import { services, site } from '#lib/data/site.ts';

	// Mock booking form — frontend only, no backend yet.
	// On submit we validate locally and show a success state.
	// Real booking (API / WhatsApp / calendar) plugs in here after client approval.
	let name = $state('');
	let phone = $state('');
	let service = $state(services[0].id);
	let date = $state('');
	let time = $state('11:00');
	let notes = $state('');
	let submitted = $state(false);
	let error = $state('');

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
		if (!date) {
			error = 'Please pick a date for your appointment.';
			return;
		}
		submitted = true;
	}

	const chosen = $derived(services.find((s) => s.id === service));
</script>

<section id="book" class="bg-sand/60 py-16 sm:py-20">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
		<div class="lg:col-span-2">
			<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">BOOK NOW</p>
			<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-tight font-medium text-ink">
				Book Your<br />Appointment
			</h2>
			<p class="mt-4 max-w-md leading-relaxed text-muted">
				Pick a service, date and time. We will call you back within 2 working hours (IST) to confirm your slot.
			</p>
			<ul class="mt-6 space-y-2 text-[0.95rem] text-ink/85">
				<li>• {site.hours}</li>
				<li>• {site.address}</li>
				<li>• Walk-ins welcome, appointments preferred</li>
			</ul>
		</div>

		<div class="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8 lg:col-span-3">
			{#if submitted}
				<div role="status" class="py-8 text-center">
					<p class="font-display text-3xl text-gold-dark">Thank you, {name.trim().split(' ')[0]}!</p>
					<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">
						Your request for <strong class="text-ink">{chosen?.title}</strong> on
						<strong class="text-ink">
							{new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
								weekday: 'long',
								day: 'numeric',
								month: 'long',
								year: 'numeric'
							})}
						</strong>
						at <strong class="text-ink">{time}</strong> is noted. This is a mock booking — we will confirm by phone once real
						bookings are live.
					</p>
					<button
						type="button"
						class="mt-6 inline-flex min-h-12 items-center rounded-full border border-gold/50 px-6 font-semibold text-gold-dark"
						onclick={() => {
							submitted = false;
							name = '';
							phone = '';
							notes = '';
						}}
					>
						Book another appointment
					</button>
				</div>
			{:else}
				<form onsubmit={submit} novalidate>
					<div class="grid gap-5 sm:grid-cols-2">
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
								autocomplete="tel"
								placeholder="98765 43210"
								bind:value={phone}
								required
								class="min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink placeholder:text-muted/70"
							/>
						</div>
						<div>
							<label for="bk-service" class="mb-1.5 block text-sm font-semibold text-ink">Service</label>
							<select
								id="bk-service"
								bind:value={service}
								class="min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink"
							>
								{#each services as s}
									<option value={s.id}>{s.title}</option>
								{/each}
							</select>
						</div>
						<div>
							<label for="bk-time" class="mb-1.5 block text-sm font-semibold text-ink">Preferred time (IST)</label>
							<select
								id="bk-time"
								bind:value={time}
								class="min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink"
							>
								{#each ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'] as t}
									<option value={t}>{t}</option>
								{/each}
							</select>
						</div>
						<div class="sm:col-span-2">
							<label for="bk-date" class="mb-1.5 block text-sm font-semibold text-ink">Preferred date</label>
							<input
								id="bk-date"
								type="date"
								bind:value={date}
								required
								class="min-h-12 w-full rounded-xl border border-line bg-cream px-4 text-base text-ink"
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
					{#if error}
						<p role="alert" class="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>
					{/if}
					<button
						type="submit"
						class="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark sm:w-auto"
					>
						Request Appointment
					</button>
					<p class="mt-3 text-sm text-muted">No payment needed now. We confirm every booking by phone.</p>
				</form>
			{/if}
		</div>
	</div>
</section>
