<script lang="ts">
	import { Menu, Phone, X } from '@lucide/svelte';
	import { nav, site } from '#lib/data/site.ts';
	import Logo from './Logo.svelte';

	let open = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 8;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur transition-shadow duration-200 {scrolled
		? 'shadow-[0_2px_16px_rgba(33,29,25,0.06)]'
		: ''}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
		<a href="/" class="flex min-h-11 items-center gap-2 text-gold-dark" aria-label="Lumina Beauty Studio — home">
			<Logo />
			<span class="leading-none">
				<span class="block font-display text-[1.4rem] tracking-[0.18em] text-ink">LUMINA</span>
				<span class="block text-[0.6rem] tracking-[0.42em] text-muted">BEAUTY STUDIO</span>
			</span>
		</a>

		<nav aria-label="Primary" class="hidden items-center gap-7 lg:flex">
			{#each nav as item}
				<a
					href={item.href}
					class="min-h-11 content-center text-[0.95rem] font-medium text-ink/80 transition-colors duration-150 hover:text-gold-dark"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-4 md:flex">
			<div class="text-right leading-tight">
				<a href={site.phoneHref} class="flex min-h-11 items-center justify-end gap-1.5 text-[0.95rem] font-semibold text-ink">
					<Phone size={15} aria-hidden="true" />
					{site.phoneDisplay}
				</a>
				<p class="text-xs text-muted">Bandra West, Mumbai</p>
			</div>
			<a
				href="/book"
				class="inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
			>
				Book Appointment
			</a>
		</div>

		<button
			type="button"
			class="flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink lg:hidden"
			aria-expanded={open}
			aria-controls="mobile-menu"
			aria-label={open ? 'Close menu' : 'Open menu'}
			onclick={() => (open = !open)}
		>
			{#if open}<X size={24} aria-hidden="true" />{:else}<Menu size={24} aria-hidden="true" />{/if}
		</button>
	</div>

	{#if open}
		<nav
			id="mobile-menu"
			aria-label="Mobile"
			data-lenis-prevent
			class="border-t border-line bg-cream px-4 pb-4 pt-2 lg:hidden"
		>
			{#each nav as item}
				<a
					href={item.href}
					class="block min-h-11 content-center border-b border-line/60 py-2 text-base font-medium text-ink"
					onclick={() => (open = false)}
				>
					{item.label}
				</a>
			{/each}
			<a
				href="/book"
				class="mt-4 flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-base font-semibold text-white"
				onclick={() => (open = false)}
			>
				Book Appointment
			</a>
		</nav>
	{/if}
</header>
