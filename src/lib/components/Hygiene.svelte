<section class="bg-cream py-16 sm:py-20" aria-label="Hygiene and products">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-10 lg:grid-cols-2">
			<div>
				<p class="text-xs font-bold tracking-[0.3em] text-gold-dark">HYGIENE & PRODUCTS</p>
				<h2 class="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium text-ink">
					Clean tools, honest products
				</h2>
				<p class="mt-4 leading-relaxed text-muted">
					A top bridal worry that most salon sites ignore — so here it is, plainly. Brushes are cleaned
					between every client, metal tools are sterilised, files and applicators are single-use, and every
					product is sealed and in date.
				</p>
				<p class="mt-3 leading-relaxed text-muted">
					We work with MAC, Bobbi Brown, Kryolan, OPI and L'Oréal Professionnel. Sensitive skin? Tell us at
					booking — we patch-test and switch to fragrance-free products.
				</p>
			</div>
			<ul class="grid gap-4 sm:grid-cols-2">
				{#each [{ t: 'Sterilised tools', d: 'Autoclaved between clients' }, { t: 'Single-use files', d: 'New file, every client' }, { t: 'Patch tests', d: 'Free, 48 hrs before colour' }, { t: 'Sealed products', d: 'In date, stored properly' }] as item}
					<li class="rounded-3xl bg-white p-5 ring-1 ring-line">
						<p class="font-semibold text-ink">{item.t}</p>
						<p class="mt-1 text-sm text-muted">{item.d}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
