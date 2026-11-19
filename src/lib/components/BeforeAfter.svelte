<script lang="ts">
	import { ChevronsLeftRight } from '@lucide/svelte';
	import Picture from './Picture.svelte';

	let {
		image,
		alt,
		label
	}: {
		image: string;
		alt: string;
		label: string;
	} = $props();

	let pos = $state(50);
	let dragging = $state(false);
	let slider: HTMLDivElement | undefined = $state();

	function setFromClientX(clientX: number) {
		if (!slider) return;
		const rect = slider.getBoundingClientRect();
		pos = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
	}

	function onPointerDown(e: PointerEvent) {
		slider?.setPointerCapture(e.pointerId);
		dragging = true;
		setFromClientX(e.clientX);
	}

	function onPointerMove(e: PointerEvent) {
		if (dragging) setFromClientX(e.clientX);
	}

	function onPointerUp() {
		dragging = false;
	}

	function onKeyDown(e: KeyboardEvent) {
		const step = e.shiftKey ? 10 : 5;
		if (e.key === 'ArrowLeft') {
			pos = Math.max(0, pos - step);
			e.preventDefault();
		} else if (e.key === 'ArrowRight') {
			pos = Math.min(100, pos + step);
			e.preventDefault();
		} else if (e.key === 'Home') {
			pos = 0;
			e.preventDefault();
		} else if (e.key === 'End') {
			pos = 100;
			e.preventDefault();
		}
	}
</script>

<div
	bind:this={slider}
	role="slider"
	tabindex="0"
	aria-label="Before and after comparison for {label}. Drag the handle or use the arrow keys."
	aria-valuemin={0}
	aria-valuemax={100}
	aria-valuenow={Math.round(pos)}
	aria-valuetext="{Math.round(pos)} percent after shown"
	class="relative touch-none overflow-hidden rounded-3xl border border-line bg-sand select-none"
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointercancel={onPointerUp}
	onkeydown={onKeyDown}
>
	<!-- After (full image) -->
	<Picture
		name={image}
		alt={alt}
		width={800}
		height={600}
		sizes="(max-width: 768px) 90vw, 560px"
		imgClass="aspect-[4/3] h-auto w-full object-cover"
		pictureClass="block"
	/>
	<!-- Before (same image, filtered) — clipped to the left of the divider -->
	<div class="absolute inset-0" style="clip-path: inset(0 {100 - pos}% 0 0)">
		<Picture
			name={image}
			alt=""
			width={800}
			height={600}
			sizes="(max-width: 768px) 90vw, 560px"
			imgClass="aspect-[4/3] h-auto w-full object-cover grayscale brightness-[0.82]"
			pictureClass="block"
		/>
	</div>

	<!-- Labels -->
	<span
		class="pointer-events-none absolute top-3 left-3 rounded-full bg-ink/75 px-3 py-1.5 text-xs font-semibold text-white"
	>
		Before (mock preview)
	</span>
	<span
		class="pointer-events-none absolute top-3 right-3 rounded-full bg-ink/75 px-3 py-1.5 text-xs font-semibold text-white"
	>
		After
	</span>

	<!-- Divider + 48px handle -->
	<div class="pointer-events-none absolute inset-y-0" style="left: {pos}%">
		<div class="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"></div>
		<div
			class="absolute top-1/2 -left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg ring-1 ring-line"
			aria-hidden="true"
		>
			<ChevronsLeftRight size={22} />
		</div>
	</div>
</div>
<p class="mt-2 text-sm font-medium text-ink/80">{label}</p>
