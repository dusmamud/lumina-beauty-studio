<script lang="ts">
	const items = ['Bridal Makeup', 'Party Glam', 'Hair Styling', 'Skin Treatments', 'Nail Care', 'Brows & Lashes'];
</script>

<div class="marquee overflow-hidden border-y border-line bg-ink py-3" aria-hidden="true">
	<div class="marquee-track items-center gap-8">
		{#each [...items, ...items] as item}
			<span class="flex items-center gap-8 text-sm font-semibold tracking-[0.25em] whitespace-nowrap text-cream/90 uppercase">
				{item}
				<span class="text-gold-light">✦</span>
			</span>
		{/each}
	</div>
</div>
