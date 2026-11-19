<script lang="ts">
	import { ArrowRight, Phone } from '@lucide/svelte';
	import { site } from '#lib/data/site.ts';
	import Picture from './Picture.svelte';
</script>

<section id="about" class="bg-sand/60 py-16 sm:py-20">
	<div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
		<div class="relative mx-auto w-full max-w-md lg:max-w-none">
			<div class="overflow-hidden rounded-t-[999px] rounded-b-3xl border border-line bg-white">
				<Picture
					name="about-main"
					alt="Indian woman with long wavy hair, hand touching her cheek, soft glam makeup"
					width={900}
					height={1100}
					sizes="(max-width: 1024px) 90vw, 520px"
					imgClass="aspect-[4/5] h-auto w-full object-cover"
					pictureClass="block"
				/>
			</div>
			<!-- curved text hugging the arch, on the cream background (after the image in DOM so it paints above it) -->
			<svg
				class="absolute -left-4 top-2 z-10 hidden h-40 w-40 text-gold-dark/70 sm:block lg:-left-8"
				viewBox="0 0 200 200"
				aria-hidden="true"
			>
				<defs>
					<path id="about-arc" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
				</defs>
				<text class="fill-current text-[10px] tracking-[0.3em]">
					<textPath href="#about-arc">BEAUTY BEGINS THE MOMENT YOU DECIDE TO BE YOURSELF •</textPath>
				</text>
			</svg>
			<button
				type="button"
				class="absolute bottom-24 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white/95 text-gold-dark shadow-lg ring-1 ring-line transition-transform duration-200 hover:scale-105"
				aria-label="Play our studio film (mock — video coming soon)"
			>
				<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path d="M8 5.5v13l11-6.5-11-6.5Z" />
				</svg>
			</button>
		</div>

		<div>
			<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">ABOUT US</p>
			<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-tight font-medium text-ink">
				Welcome To<br />Lumina Beauty Studio
			</h2>
			<p class="mt-5 max-w-lg leading-relaxed text-muted">
				We believe that beauty is more than skin deep. Our mission is to help you look good, feel great, and be
				your most confident self.
			</p>

			<div class="mt-8 grid grid-cols-2 gap-4">
				<div class="overflow-hidden rounded-2xl border border-line">
					<Picture
						name="about-facial"
						alt="Facial treatment — hands applying cream to a woman's face on a spa bed"
						width={600}
						height={420}
						sizes="(max-width: 1024px) 45vw, 260px"
						imgClass="aspect-[10/7] h-auto w-full object-cover"
						pictureClass="block"
					/>
				</div>
				<div class="overflow-hidden rounded-2xl border border-line">
					<Picture
						name="service-hair"
						alt="Hair styling session in the studio"
						width={600}
						height={420}
						sizes="(max-width: 1024px) 45vw, 260px"
						imgClass="aspect-[10/7] h-auto w-full object-cover"
						pictureClass="block"
					/>
				</div>
			</div>

			<ul class="mt-8 grid grid-cols-3 gap-4 text-center sm:max-w-md">
				<li class="rounded-2xl bg-white px-2 py-4 ring-1 ring-line">
					<p class="font-display text-2xl font-semibold text-gold-dark">8+</p>
					<p class="mt-1 text-xs text-muted">Years of craft</p>
				</li>
				<li class="rounded-2xl bg-white px-2 py-4 ring-1 ring-line">
					<p class="font-display text-2xl font-semibold text-gold-dark">12k+</p>
					<p class="mt-1 text-xs text-muted">Happy clients</p>
				</li>
				<li class="rounded-2xl bg-white px-2 py-4 ring-1 ring-line">
					<p class="font-display text-2xl font-semibold text-gold-dark">4.9 ★</p>
					<p class="mt-1 text-xs text-muted">Average rating</p>
				</li>
			</ul>

			<div class="mt-8 flex flex-wrap items-center gap-6">
				<a
					href="#gallery"
					class="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
				>
					Learn More
					<ArrowRight size={18} aria-hidden="true" />
				</a>
				<a href={site.phoneHref} class="flex min-h-12 items-center gap-2 text-ink">
					<Phone size={18} class="text-gold-dark" aria-hidden="true" />
					<span>
						<span class="block font-semibold">{site.phoneDisplay}</span>
						<span class="block text-sm text-muted">{site.hours}</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</section>
