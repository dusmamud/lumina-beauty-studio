<script lang="ts">
	// Animated counter: counts up when scrolled into view, once.
	// Respects prefers-reduced-motion (jumps straight to the final value).
	let {
		value,
		suffix = '',
		label,
		decimals = 0
	}: { value: number; suffix?: string; label: string; decimals?: number } = $props();

	let shown = $state(0);
	let el: HTMLElement | undefined = $state();

	$effect(() => {
		if (!el) return;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (!e.isIntersecting) continue;
					io.disconnect();
					if (reduce) {
						shown = value;
						return;
					}
					const start = performance.now();
					const dur = 1200;
					const tick = (t: number) => {
						const p = Math.min(1, (t - start) / dur);
						const eased = 1 - Math.pow(1 - p, 3);
						shown = value * eased;
						if (p < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
				}
			},
			{ threshold: 0.4 }
		);
		io.observe(el);
		return () => io.disconnect();
	});

	const formatted = $derived(
		shown.toLocaleString('en-IN', {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		})
	);
</script>

<div bind:this={el} class="text-center">
	<p class="font-display text-3xl font-medium text-gold-dark sm:text-4xl">
		{formatted}{suffix}
	</p>
	<p class="mt-1 text-sm text-muted">{label}</p>
</div>
