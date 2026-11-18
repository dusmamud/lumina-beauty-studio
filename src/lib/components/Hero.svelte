<script lang="ts">
	import { ArrowRight, MapPin } from '@lucide/svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { site } from '#lib/data/site.ts';
	import Picture from './Picture.svelte';

	// Hero entrance: staggered line reveal + image scale-in, 0.5–0.7s, ease-out.
	// Reduced motion: skip entirely (final state is the default).
	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const title = document.querySelector('.hero-title');
		const media = document.querySelector('.hero-media');
		const ctas = document.querySelector('.hero-ctas');
		if (!title) return;
		const split = new SplitText(title, { type: 'lines', linesClass: 'hero-line' });
		const ctx = gsap.context(() => {
			gsap.from(split.lines, { y: 28, opacity: 0, duration: 0.6, stagger: 0.09, ease: 'power3.out' });
			if (media) gsap.from(media, { scale: 1.06, opacity: 0, duration: 0.8, ease: 'power3.out' });
			if (ctas) gsap.from(ctas, { y: 16, opacity: 0, duration: 0.5, delay: 0.35, ease: 'power3.out' });
		});
		return () => {
			ctx.revert();
			split.revert();
		};
	});
</script>

<section id="home" class="relative overflow-hidden bg-cream">
	<!-- soft leaf decoration, decorative only -->
	<svg
		class="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 text-gold/10"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			d="M12 21c-4.5-2-7-5.5-7-10V5.5C8 6.5 11 9 12 12c1-3 4-5.5 7-6.5V11c0 4.5-2.5 8-7 10Z"
		/>
	</svg>

	<div class="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pb-20 lg:pt-14">
		<div class="reveal is-visible max-w-xl">
			<h1 class="hero-title font-display text-[clamp(2.6rem,7vw,4.4rem)] leading-[1.05] font-medium text-ink">
				Reveal Your<br />
				Natural<br />
				<span class="text-gold">Beauty.</span>
			</h1>
			<div class="mt-6 h-px w-16 bg-gold" aria-hidden="true"></div>
			<p class="mt-6 max-w-md text-lg leading-relaxed text-muted">
				Professional care that enhances your natural beauty and gives you confidence every day.
			</p>
			<div class="hero-ctas mt-8 flex flex-wrap items-center gap-4">
				<a
					href="/book"
					class="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-7 text-base font-semibold text-white transition-all duration-200 hover:bg-gold-dark"
				>
					Book Appointment
					<ArrowRight size={18} aria-hidden="true" />
				</a>
				<a
					href="/services"
					class="inline-flex min-h-12 items-center rounded-full border border-gold/50 px-7 text-base font-semibold text-gold-dark transition-colors duration-200 hover:border-gold-dark"
				>
					Explore Services
				</a>
			</div>
			<p class="mt-6 text-sm text-muted">
				<span class="font-semibold text-ink">4.9 ★</span> from 480+ happy clients in Mumbai
			</p>
			<p class="mt-3 flex items-start gap-2 text-sm text-muted">
				<MapPin size={15} class="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
				<span>
					{site.addressShort} · {site.hoursShort}<br />
					<a href="/bridal" class="font-semibold text-gold-dark underline underline-offset-4">
						Bridal makeup from ₹14,999 →
					</a>
				</span>
			</p>
		</div>

		<div class="hero-media relative mx-auto w-full max-w-md lg:max-w-none">
			<div class="overflow-hidden rounded-t-[999px] rounded-b-3xl border border-line bg-sand">
				<Picture
					name="hero"
					alt="Indian woman with eyes closed, serene, hand gently touching her neck, natural glowing makeup"
					width={1000}
					height={1250}
					sizes="(max-width: 1024px) 90vw, 560px"
					eager={true}
					imgClass="aspect-[4/5] h-auto w-full object-cover"
					pictureClass="block"
				/>
			</div>
			<!-- curved text hugging the arch, on the cream background (after the image in DOM so it paints above it) -->
			<svg
				class="absolute -left-3 top-6 z-10 hidden h-36 w-36 text-gold-dark sm:block lg:-left-8"
				viewBox="0 0 200 200"
				aria-hidden="true"
			>
				<defs>
					<path id="hero-arc" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
				</defs>
				<text class="fill-current text-[11px] tracking-[0.35em]">
					<textPath href="#hero-arc">SELF CARE IS SELF LOVE • LUMINA •</textPath>
				</text>
			</svg>
		</div>
	</div>
</section>
