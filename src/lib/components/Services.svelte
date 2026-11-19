<script lang="ts">
	import { Flower2, Heart, Scissors, Sparkles, Droplets, Gem } from '@lucide/svelte';
	import { inr, services } from '#lib/data/site.ts';
	import Picture from './Picture.svelte';

	const icons = {
		scissors: Scissors,
		nail: Droplets,
		face: Sparkles,
		lotus: Flower2,
		sparkles: Gem,
		heart: Heart
	} as const;

	// Homepage shows the four core services; the full list lives on /services.
	const featured = services.slice(0, 4);
</script>

<section id="services" class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">Our Beauty Services</h2>
			<div class="mx-auto mt-4 flex items-center justify-center gap-3" aria-hidden="true">
				<span class="h-px w-12 bg-gold/60"></span>
				<span class="text-gold">✦</span>
				<span class="h-px w-12 bg-gold/60"></span>
			</div>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
			{#each featured as service}
				{@const Icon = icons[service.icon]}
				<article class="group text-center">
					<div class="relative mx-auto w-44 max-w-full">
						<div
							class="overflow-hidden rounded-full border-4 border-sand bg-sand transition-transform duration-300 ease-out group-hover:scale-[1.03]"
						>
							<Picture
								name={service.image}
								alt={service.imageAlt}
								width={600}
								height={600}
								sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 220px"
								imgClass="aspect-square h-auto w-full object-cover"
								pictureClass="block"
							/>
						</div>
						<span
							class="absolute -left-1 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold-dark shadow-md ring-1 ring-line"
							aria-hidden="true"
						>
							<Icon size={22} />
						</span>
					</div>
					<h3 class="mt-5 font-display text-xl font-semibold text-ink">{service.title}</h3>
					<p class="mx-auto mt-1 max-w-[16rem] text-[0.95rem] leading-relaxed text-muted">
						{service.description}
					</p>
					<p class="mt-2 text-sm font-semibold text-gold-dark">From {inr(service.priceFrom)}</p>
					<a
						href="/book?service={service.id}"
						class="mt-3 inline-flex min-h-12 items-center rounded-full px-4 text-sm font-semibold text-gold-dark underline decoration-gold/40 underline-offset-4 transition-colors hover:text-ink"
						aria-label="Book {service.title}"
					>
						Book this service →
					</a>
				</article>
			{/each}
		</div>

		<p class="mx-auto mt-12 max-w-xl text-center leading-relaxed text-muted">
			We use premium products and advanced techniques to bring out the best in you. Because you deserve to shine.
		</p>
		<p class="mt-6 text-center">
			<a
				href="/services"
				class="inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
			>
				View all services & prices →
			</a>
		</p>
	</div>
</section>
