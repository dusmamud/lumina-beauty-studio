<script lang="ts">
	let { eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string } = $props();
</script>

<section class="bg-cream pb-10 pt-12 sm:pb-14 sm:pt-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">{eyebrow}</p>
		<h1 class="mt-3 max-w-3xl font-display text-[clamp(2rem,5vw,3.2rem)] leading-tight font-medium text-ink">
			{title}
		</h1>
		{#if subtitle}
			<p class="mt-4 max-w-2xl leading-relaxed text-muted">{subtitle}</p>
		{/if}
	</div>
</section>
