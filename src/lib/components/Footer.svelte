<script lang="ts">
	import { Mail, MapPin, Phone } from '@lucide/svelte';
	import { nav, site } from '#lib/data/site.ts';
	import Logo from './Logo.svelte';
	import SocialIcon from './SocialIcon.svelte';
</script>

<footer id="contact" class="bg-white">
	<div class="mx-auto grid max-w-7xl gap-10 border-t border-line px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
		<div>
			<h3 class="font-semibold text-ink">Our Location</h3>
			<p class="mt-3 flex items-start gap-2 text-[0.95rem] leading-relaxed text-muted">
				<MapPin size={17} class="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
				{site.address}
			</p>
			<p class="mt-3 text-sm text-muted">{site.hours}</p>
		</div>
		<div>
			<h3 class="font-semibold text-ink">Quick Contact</h3>
			<p class="mt-3 space-y-2 text-[0.95rem] text-muted">
				<a href={site.phoneHref} class="flex min-h-12 items-center gap-2 hover:text-gold-dark">
					<Phone size={16} class="text-gold-dark" aria-hidden="true" />
					{site.phoneDisplay}
				</a>
				<a href="mailto:{site.email}" class="flex min-h-12 items-center gap-2 hover:text-gold-dark">
					<Mail size={16} class="text-gold-dark" aria-hidden="true" />
					{site.email}
				</a>
			</p>
		</div>
		<div>
			<h3 class="font-semibold text-ink">Follow Us</h3>
			<div class="mt-3 flex gap-3">
				{#each [{ label: 'Facebook', name: 'facebook' }, { label: 'Instagram', name: 'instagram' }, { label: 'X', name: 'x' }] as s}
					<a
						href="#contact"
						aria-label="Lumina Beauty Studio on {s.label} (mock link)"
						class="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors duration-150 hover:border-gold hover:text-gold-dark"
					>
						<SocialIcon name={s.name as 'facebook' | 'instagram' | 'x'} size={18} />
					</a>
				{/each}
			</div>
			<nav aria-label="Footer" class="mt-5 flex flex-col gap-1">
				{#each nav as item}
					<a href={item.href} class="min-h-12 content-center text-[0.95rem] text-muted hover:text-gold-dark">
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
		<div class="flex items-start gap-2 text-gold-dark sm:justify-end">
			<Logo />
			<span class="leading-none">
				<span class="block font-display text-[1.4rem] tracking-[0.18em] text-ink">LUMINA</span>
				<span class="block text-[0.6rem] tracking-[0.42em] text-muted">BEAUTY STUDIO</span>
			</span>
		</div>
	</div>
	<div class="border-t border-line py-5 text-center text-sm text-muted">
		<p class="flex flex-wrap justify-center gap-x-5 gap-y-2 px-4">
			<a href="/faq" class="min-h-12 content-center hover:text-gold-dark">FAQ</a>
			<a href="/policies" class="min-h-12 content-center hover:text-gold-dark">Booking Policies</a>
			<a href="/accessibility" class="min-h-12 content-center hover:text-gold-dark">Accessibility</a>
			<a href="/first-visit" class="min-h-12 content-center hover:text-gold-dark">First Visit Guide</a>
			<a href="/privacy" class="min-h-12 content-center hover:text-gold-dark">Privacy Policy</a>
			<a href="/terms" class="min-h-12 content-center hover:text-gold-dark">Terms of Service</a>
			<a href="/sitemap.xml" class="min-h-12 content-center hover:text-gold-dark">Sitemap</a>
		</p>
		<p class="mt-2 px-4">© 2026 Lumina Beauty Studio. All rights reserved. · Mock website — content for design approval.</p>
	</div>
</footer>
