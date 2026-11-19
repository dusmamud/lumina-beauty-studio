// ─── Lumina Beauty Studio — MOCK DATA ──────────────────────────────────────
// Frontend-only site. All content below is mock/placeholder data so the
// client can approve the design first. Real data replaces this file later.
// Images: only the base name is stored here; Picture.svelte builds the
// AVIF → WebP → JPG → PNG fallback chain from static/images/<name>/.
// Prices in INR (₹), times in IST, locale en-IN.
// Note: no src/env.ts in this project — SvelteKit reserves that filename
// for its explicit env variables file, so the URL lives here.

export const site = {
	name: 'Lumina Beauty Studio',
	tagline: 'Reveal Your Natural Beauty.',
	phoneDisplay: '+91 98765 43210',
	phoneHref: 'tel:+919876543210',
	whatsappHref:
		'https://wa.me/919876543210?text=Hi%20Lumina%2C%20I%20want%20to%20book%20an%20appointment',
	email: 'hello@luminabeauty.in',
	address: '2nd Floor, 14 Glow Lane, Linking Road, Bandra West, Mumbai 400 050, India',
	addressShort: 'Linking Road, Bandra West, Mumbai',
	hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
	hoursShort: 'Mon – Sat: 9:00 AM – 7:00 PM',
	url: 'https://luminabeauty.in',
	mapEmbed:
		'https://maps.google.com/maps?q=Linking%20Road%2C%20Bandra%20West%2C%20Mumbai%20400050&t=&z=15&ie=UTF8&iwloc=&output=embed',
	areas: ['Bandra West', 'Khar', 'Santacruz', 'Juhu', 'Andheri', 'Dadar', 'Mahim', 'Bandra East']
} as const;

export const nav = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Services', href: '/services' },
	{ label: 'Bridal', href: '/bridal' },
	{ label: 'Consultation', href: '/consultation' },
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Contact', href: '/contact' }
] as const;

export type Service = {
	id: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	icon: 'scissors' | 'nail' | 'face' | 'lotus' | 'sparkles' | 'heart';
	priceFrom: number;
};

export const services: Service[] = [
	{
		id: 'hair-styling',
		title: 'Hair Styling',
		description: 'Stylish cuts, colours & blow dry',
		image: 'service-hair',
		imageAlt: 'Indian woman with long wavy hair after a salon styling session',
		icon: 'scissors',
		priceFrom: 1499
	},
	{
		id: 'nail-care',
		title: 'Nail Care',
		description: 'Manicure, pedicure & nail art',
		image: 'service-nails',
		imageAlt: 'Elegant hands with dark glossy manicured nails',
		icon: 'nail',
		priceFrom: 999
	},
	{
		id: 'skin-treatments',
		title: 'Skin Treatments',
		description: 'Rejuvenate & refresh your skin',
		image: 'service-skin',
		imageAlt: 'Woman receiving a white facial mask treatment',
		icon: 'face',
		priceFrom: 1999
	},
	{
		id: 'beauty-treatments',
		title: 'Beauty Treatments',
		description: 'Waxing, threading & more',
		image: 'service-beauty',
		imageAlt: 'Woman with flawless natural makeup and glowing skin',
		icon: 'lotus',
		priceFrom: 799
	},
	{
		id: 'bridal-makeup',
		title: 'Bridal Makeup',
		description: 'HD & airbrush looks for your big day',
		image: 'gallery-bridal',
		imageAlt: 'Indian bride with elegant bridal makeup',
		icon: 'sparkles',
		priceFrom: 14999
	},
	{
		id: 'party-makeup',
		title: 'Party Makeup',
		description: 'Soft glam for evenings & events',
		image: 'service-beauty',
		imageAlt: 'Natural glam makeup look',
		icon: 'heart',
		priceFrom: 4999
	}
];

export type ServiceDetail = {
	long: string;
	about: string[];
	duration: string;
	includes: string[];
	addOns: { name: string; price: number }[];
	faqs: { q: string; a: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
	'bridal-makeup': {
		long: 'Your wedding look, built around you — skin prep, a trial, and one artist with you from the first function to the last photo. We do one bride a day, so your date is fully yours.',
		about: [
			'A wedding look is never just makeup — it is the whole day, planned backwards from your last photo. We start with a skin consultation weeks before the wedding, because the best bridal makeup begins with calm, hydrated skin, not with more product on the day. Your artist maps every function — haldi, mehendi, sangeet, wedding, reception — and plans how the look changes between them without starting from scratch.',
			'On the day, one artist stays with you from the first function to the last photo. We take only one bride a day, so there is no rushing between weddings and no handing you to an assistant halfway through. Your look is built in layers — long-wear HD or airbrush foundation, waterproof eyes, false lashes — and finished with a fixing spray that holds through Mumbai heat, humidity and happy tears.',
			'Every booking includes a free half-face trial, so you see the exact look on your own skin before the day. Bring your outfit, your jewellery and reference photos; we match the look to all three. And before you leave, you get a touch-up kit — blotting paper, your lipstick, a mini setting spray — because the best makeup is the one you can fix yourself at 2 AM.'
		],
		duration: '3 hrs per look',
		includes: [
			'HD or airbrush makeup with false lashes',
			'Hairstyling + dupatta / saree draping',
			'Touch-up kit for the day',
			'Skin-prep consultation before the wedding',
			'Travel within Bandra West included'
		],
		addOns: [
			{ name: 'Extra function look (haldi / sangeet)', price: 9999 },
			{ name: 'Outstation travel (per day)', price: 5000 },
			{ name: 'Second artist for bridesmaids', price: 4999 }
		],
		faqs: [
			{
				q: 'How far ahead should I book my bridal date?',
				a: '4–6 months ahead for peak wedding season (Nov–Feb). We take one bride per day and dates fill fast — a 40% advance locks your date.'
			},
			{
				q: 'Do you offer a trial?',
				a: 'Yes. Confirmed bookings get a free half-face trial so you can see the look on your own skin before the day.'
			},
			{
				q: 'Will the makeup last in Mumbai heat and humidity?',
				a: 'Yes — we use long-wear HD and airbrush products, set with fixing spray, and give you a touch-up kit for the day.'
			}
		]
	},
	'party-makeup': {
		long: 'Soft glam that photographs beautifully and feels light — for sangeets, receptions, birthdays, shoots and evenings out. Ready in about 90 minutes.',
		about: [
			'Party makeup should look like you on your best day — not like someone else. We start by asking where you are going and what you are wearing, then build a soft-glam look that photographs beautifully and still feels light after four hours of dancing, eating and hugging relatives.',
			'The look takes about 90 minutes, including quick hairstyling — soft waves, a low bun or a smooth blowout. Lashes are included, and everything is set with fixing spray so you are not checking the mirror every twenty minutes. If your skin is sensitive, tell us at booking; we use fragrance-free, patch-tested products.',
			'Bring your outfit or a photo of it, and we will match the look to the colours you are actually wearing. Groups of three or more get a small per-person discount, and bridesmaids can book mini-looks on the same day.'
		],
		duration: '90 min',
		includes: [
			'Soft glam or bold evening look',
			'False lashes included',
			'Quick hairstyling (waves / bun / blowout)',
			'Setting spray + blotting paper kit'
		],
		addOns: [
			{ name: 'Hair updo upgrade', price: 999 },
			{ name: 'Airbrush finish', price: 1499 },
			{ name: 'Group of 3+ (per person discount)', price: -500 }
		],
		faqs: [
			{
				q: 'How long before my event should I book?',
				a: 'A day or two is usually enough on weekdays; weekends fill up, so book 3–4 days ahead.'
			},
			{
				q: 'Can I bring my own outfit for colour matching?',
				a: 'Yes, please do — bring your outfit or a photo and we match the look to it.'
			}
		]
	},
	'hair-styling': {
		long: 'Cuts, colour and styling by senior stylists who work with Indian hair every day — wavy, curly, thick or fine. We talk first, cut second.',
		about: [
			'Good hair starts with a conversation, not a pair of scissors. Your stylist looks at your hair’s texture, thickness and history — colour, heat damage, how you actually style it at home — before suggesting a cut. We work with Indian hair every day: wavy, curly, thick, fine, and everything in between.',
			'Two of our stylists specialise in curly cuts, working with your natural pattern instead of thinning it out or straightening it away. Colour is always patch-tested on your first visit — free, 48 hours before the appointment — and we talk honestly about what your hair can and cannot do in one sitting.',
			'Every cut and colour ends with a blow-dry finish and aftercare advice for your hair type: which shampoo, how often to wash, when to come back for a gloss. The goal is hair that still looks good three weeks later, not just in the salon mirror.'
		],
		duration: '45–90 min',
		includes: [
			'Consultation + wash',
			'Cut or colour by a senior stylist',
			'Blow-dry finish',
			'Aftercare advice for your hair type'
		],
		addOns: [
			{ name: 'Balayage / global colour', price: 4999 },
			{ name: 'Keratin spa ritual', price: 2999 },
			{ name: 'Hair spa + head massage', price: 1299 }
		],
		faqs: [
			{
				q: 'Do you work with curly hair?',
				a: 'Yes — two of our stylists specialise in curly cuts and colour that respects your natural pattern.'
			},
			{
				q: 'Will you do a patch test before colour?',
				a: 'Always, on your first colour visit — free, 48 hours before the appointment.'
			}
		]
	},
	'skin-treatments': {
		long: 'Facials and skin rituals matched to your skin, not a menu — deep cleanse, glow, hydration or calming care for sensitive skin.',
		about: [
			'No two skins are the same, so no two facials should be either. Every skin treatment starts with a skin analysis — we look at hydration, sensitivity, sun damage and what your current routine is doing — and then choose the facial your skin actually needs, not the most expensive one on the menu.',
			'The signature glow facial is our most-booked treatment: deep cleanse, light exfoliation, a hydrating mask and a slow glow massage. No peels, no downtime, no redness the next day. If your skin is sensitive, we switch to fragrance-free products and skip exfoliation entirely.',
			'The glow peaks 24–48 hours after the facial, so book 3–5 days before an event, never the day before. For lasting results, a facial every 4–6 weeks beats one expensive treatment a year — skin is a routine, not a rescue mission.'
		],
		duration: '60–90 min',
		includes: [
			'Skin analysis first',
			'Deep cleanse + exfoliation',
			'Mask + glow massage',
			'SPF + aftercare plan'
		],
		addOns: [
			{ name: 'Under-eye brightening', price: 799 },
			{ name: 'Back + shoulder polish', price: 1499 },
			{ name: 'Monthly glow membership (4 facials)', price: 7999 }
		],
		faqs: [
			{
				q: 'I have sensitive skin. Is a facial safe for me?',
				a: 'Yes — tell us at booking and we use fragrance-free, patch-tested products and skip active exfoliation.'
			},
			{
				q: 'How often should I get a facial?',
				a: 'Every 4–6 weeks is ideal. Before a big event, book 3–5 days ahead, not the day before.'
			}
		]
	},
	'nail-care': {
		long: 'Classic care, gel polish and nail art — with hospital-grade hygiene: sterilised tools, single-use files and sealed polishes.',
		about: [
			'Great nails are 80% care and 20% colour. Every manicure and pedicure starts with a soak, careful shaping and cuticle care — never rushed, never cut corners. Then the polish: classic, gel, or nail art, applied in thin layers so it wears evenly and lasts.',
			'Hygiene is non-negotiable here. Metal tools are autoclaved between clients, files are single-use, and polishes are sealed. If you have a nail concern — brittle nails, a fungal worry, an allergy — tell us at booking and we will adjust the treatment or tell you honestly if you should see a doctor first.',
			'Gel polish lasts 2–3 weeks with normal care, and we remove it free at your next visit — never peel it off at home. Add nail art per nail, a paraffin treatment for dry hands, or gel extensions for a special occasion.'
		],
		duration: '45–90 min',
		includes: [
			'Soak, shape + cuticle care',
			'Gel or classic polish',
			'Hand massage',
			'Nail art on request'
		],
		addOns: [
			{ name: 'Nail art (per nail)', price: 149 },
			{ name: 'Gel extensions (full set)', price: 2999 },
			{ name: 'Paraffin treatment', price: 799 }
		],
		faqs: [
			{
				q: 'How long does gel polish last?',
				a: '2–3 weeks with normal care. We remove it free at your next visit.'
			},
			{
				q: 'Are your tools sterilised?',
				a: 'Yes — metal tools are autoclaved between clients and files are single-use.'
			}
		]
	},
	'beauty-treatments': {
		long: 'Gentle waxing, threading and clean-up with hygiene-first care — fresh strips, disposable applicators and patch tests on request.',
		about: [
			'Waxing and threading should be quick, gentle and hygienic — in that order. We use fresh strips and disposable applicators for every client, and our therapists work fast without rushing you. Sensitive skin is common, not a problem: tell us at booking and we patch-test first.',
			'Threading is done with a light hand and a steady one, and every treatment ends with soothing post-care so you walk out without redness. We will also tell you honestly when to wait — about two weeks of growth gives the smoothest waxing result, and we would rather reschedule you than give you a patchy one.',
			'Beyond waxing and threading, we do brow shaping and tinting, lash lifts and clean-ups — the small treatments that make the biggest difference to how you look every day. Book them together with a facial or haircut and save yourself a second trip.'
		],
		duration: '20–60 min',
		includes: [
			'Waxing / threading of your choice',
			'Soothing post-care',
			'Patch test on request',
			'Aftercare guidance'
		],
		addOns: [
			{ name: 'Full-body waxing', price: 2999 },
			{ name: 'Brow shaping + tint', price: 699 },
			{ name: 'Lash lift', price: 1999 }
		],
		faqs: [
			{
				q: 'Is waxing safe for sensitive skin?',
				a: 'Yes — we use gentle wax and a patch test first if you have reactive skin.'
			},
			{
				q: 'How long should hair be before waxing?',
				a: 'About 2 weeks of growth gives the smoothest result.'
			}
		]
	}
};

export const serviceArtist: Record<string, string> = {
	'bridal-makeup': 'meera',
	'party-makeup': 'aisha',
	'hair-styling': 'ravi',
	'skin-treatments': 'sana',
	'nail-care': 'sana',
	'beauty-treatments': 'aisha'
};

export type Artist = {
	id: string;
	name: string;
	role: string;
	level: string;
	specialties: string[];
	experience: string;
	image: string;
	imageAlt: string;
	days: string;
	bio: string;
};

export const artists: Artist[] = [
	{
		id: 'meera',
		name: 'Meera Kapoor',
		role: 'Founder & Lead Bridal Artist',
		level: 'Founder',
		specialties: ['Bridal HD', 'Airbrush', 'Sangeet looks'],
		experience: '8+ years',
		image: 'about-main',
		imageAlt: 'Meera Kapoor, founder and lead bridal artist',
		days: 'Tue – Sat',
		bio: 'Trained in Mumbai and London, Meera has done 1,000+ brides. She does one bride a day and stays with you from the first function to the last photo.'
	},
	{
		id: 'aisha',
		name: 'Aisha Khan',
		role: 'Senior Makeup Artist',
		level: 'Senior',
		specialties: ['Party glam', 'Editorial looks', 'Skin-first makeup'],
		experience: '6 years',
		image: 'service-beauty',
		imageAlt: 'Aisha Khan, senior makeup artist',
		days: 'Mon – Sat',
		bio: 'Aisha is the soft-glam specialist — looks that feel like skin, photograph beautifully, and last through long evenings.'
	},
	{
		id: 'ravi',
		name: 'Ravi Desai',
		role: 'Senior Hair Stylist',
		level: 'Senior',
		specialties: ['Curly cuts', 'Balayage', 'Bridal hair'],
		experience: '7 years',
		image: 'service-hair',
		imageAlt: 'Ravi Desai, senior hair stylist',
		days: 'Mon, Wed – Sat',
		bio: 'Ravi works with Indian hair textures every day — curls, waves and thick hair that most stylists thin out. He never does.'
	},
	{
		id: 'sana',
		name: 'Sana Sheikh',
		role: 'Skin & Nail Specialist',
		level: 'Senior',
		specialties: ['Glow facials', 'Sensitive skin', 'Gel nails'],
		experience: '5 years',
		image: 'service-skin',
		imageAlt: 'Sana Sheikh, skin and nail specialist',
		days: 'Tue – Sun',
		bio: 'Sana builds skin routines, not one-off facials — and her gel manicures are the reason half of Bandra books a month ahead.'
	}
];

export type BridalPackage = {
	id: string;
	name: string;
	price: number;
	tag?: string;
	looks: string;
	includes: string[];
};

export const bridalPackages: BridalPackage[] = [
	{
		id: 'hd-bridal',
		name: 'HD Bridal',
		price: 24999,
		looks: '1 look · wedding day',
		includes: [
			'HD makeup + lashes',
			'Hairstyling + draping',
			'Touch-up kit',
			'Skin-prep consultation',
			'Free half-face trial'
		]
	},
	{
		id: 'airbrush-bridal',
		name: 'Airbrush Bridal',
		price: 34999,
		tag: 'Most booked',
		looks: '1 look · wedding day',
		includes: [
			'Everything in HD Bridal',
			'Airbrush foundation (16-hr wear)',
			'Second look touch-up for reception',
			'Premium lashes + hair accessories',
			'On-location service in Mumbai'
		]
	},
	{
		id: 'signature-combo',
		name: 'Signature + Sangeet Combo',
		price: 54999,
		looks: '3 looks · sangeet + wedding + reception',
		includes: [
			'Everything in Airbrush Bridal',
			'3 complete looks, one artist throughout',
			'Dedicated assistant on the day',
			'Bridesmaid mini-looks (2 included)',
			'Priority dates — one bride a day'
		]
	}
];

export type PriceItem = { service: string; detail: string; price: number; duration: string };

export const pricing: PriceItem[] = [
	{ service: 'Bridal Makeup', detail: 'HD / airbrush, hairstyling & draping', price: 14999, duration: '3 hrs' },
	{ service: 'Party Makeup', detail: 'Soft glam look for evenings & events', price: 4999, duration: '90 min' },
	{ service: 'Haircut + Blow Dry', detail: 'Cut, wash & finish by senior stylist', price: 1499, duration: '60 min' },
	{ service: 'Signature Facial', detail: 'Deep cleanse, mask & glow massage', price: 2499, duration: '75 min' },
	{ service: 'Manicure + Pedicure', detail: 'Classic care with gel polish finish', price: 1799, duration: '90 min' },
	{ service: 'Waxing & Threading', detail: 'Full arms, legs & face — gentle care', price: 1299, duration: '45 min' }
];

export type GalleryItem = { image: string; alt: string; label: string; category: string };

export const gallery: GalleryItem[] = [
	{ image: 'gallery-bridal', alt: 'Indian bride with elegant bridal makeup', label: 'Bridal', category: 'Bridal' },
	{ image: 'service-beauty', alt: 'Natural glam makeup look', label: 'Makeup', category: 'Party' },
	{ image: 'service-hair', alt: 'Wavy hair styling', label: 'Hair', category: 'Hair' },
	{ image: 'service-skin', alt: 'Facial skin treatment', label: 'Skin', category: 'Skin' },
	{ image: 'about-main', alt: 'Soft glam portrait', label: 'Glam', category: 'Party' },
	{ image: 'service-nails', alt: 'Glossy manicured nails', label: 'Nails', category: 'Nails' },
	{ image: 'about-facial', alt: 'Relaxing facial treatment in progress', label: 'Facial', category: 'Skin' },
	{ image: 'gallery-bridal', alt: 'Bridal look with traditional jewellery', label: 'Bridal', category: 'Bridal' },
	{ image: 'service-hair', alt: 'Blow-dry finish with soft waves', label: 'Hair', category: 'Hair' },
	{ image: 'service-nails', alt: 'Nail art with dark glossy polish', label: 'Nails', category: 'Nails' },
	{ image: 'service-beauty', alt: 'Evening glam makeup', label: 'Glam', category: 'Party' },
	{ image: 'about-main', alt: 'Soft glam portrait in natural light', label: 'Bridal', category: 'Bridal' }
];

export const galleryCategories = ['All', 'Bridal', 'Party', 'Hair', 'Skin', 'Nails'] as const;

export type Testimonial = { name: string; role: string; quote: string; rating: number; service?: string; date?: string };

export const testimonials: Testimonial[] = [
	{
		name: 'Ananya Sharma',
		role: 'Bride, Mumbai',
		quote:
			'My bridal makeup stayed flawless from the morning ceremony to late night. I felt like the best version of myself — calm, confident and glowing in every photo.',
		rating: 5,
		service: 'Airbrush Bridal',
		date: 'Oct 2026'
	},
	{
		name: 'Priya Mehta',
		role: 'Regular client, Bandra',
		quote:
			'The team listens first and then suggests what suits you. My haircut and facial are now a monthly ritual I genuinely look forward to.',
		rating: 5,
		service: 'Haircut + Facial',
		date: 'Nov 2026'
	},
	{
		name: 'Kavya Iyer',
		role: 'Party makeup, Juhu',
		quote:
			'Booked for a family function and got so many compliments. The look was soft and natural, never heavy — exactly what I asked for.',
		rating: 5,
		service: 'Party Makeup',
		date: 'Sep 2026'
	},
	{
		name: 'Ritu Malhotra',
		role: 'Bride, Santacruz',
		quote:
			'Meera did my sangeet, wedding and reception looks — three days, one artist, zero stress. My mother has already booked her for my sister.',
		rating: 5,
		service: 'Signature Combo',
		date: 'Aug 2026'
	},
	{
		name: 'Sana Qureshi',
		role: 'Bride, Khar',
		quote:
			'The trial sold me. I saw the look on my own skin, changed two things, and on the day it was perfect. Worth every rupee.',
		rating: 5,
		service: 'HD Bridal',
		date: 'Jul 2026'
	},
	{
		name: 'Neha Agarwal',
		role: 'Regular client, Andheri',
		quote:
			'Gel nails that actually last three weeks, and a facial that leaves my skin glowing for days. The studio is calm, clean and never rushed.',
		rating: 4,
		service: 'Gel Nails + Facial',
		date: 'Nov 2026'
	}
];

export type BlogPost = {
	slug: string;
	title: string;
	category: string;
	date: string;
	excerpt: string;
	image: string;
	alt: string;
	body: string[];
};

export const blogPosts: BlogPost[] = [
	{
		slug: 'bridal-makeup-tips-mumbai-summer-wedding',
		title: '5 Bridal Makeup Tips for a Mumbai Summer Wedding',
		category: 'Bridal',
		date: '12 Nov 2026',
		excerpt: 'Heat, humidity and long ceremonies — how to keep your bridal look fresh from morning to midnight.',
		image: 'gallery-bridal',
		alt: 'Indian bride with elegant bridal makeup',
		body: [
			'Mumbai summer weddings are beautiful — and brutal on makeup. Heat, humidity, a morning pheras and a late-night reception mean your look has to survive 12+ hours, flash photography and happy tears.',
			'First, prep beats product. Start hydrating your skin a week before the wedding and skip any new active skincare in the final 3 days. A calm skin holds makeup far better than a freshly exfoliated one.',
			'Second, ask for airbrush or long-wear HD foundation. It sets thinner, photographs without flashback and lasts through sweat. Finish with a fixing spray, not extra powder — powder cakes in humidity.',
			'Third, keep a touch-up kit in your clutch: blotting paper (never tissue), your lipstick, and a mini setting spray. Blot first, then powder — the order matters.',
			'Fourth, waterproof everything on the eyes. Lash glue, liner and mascara should all be waterproof; happy tears are guaranteed.',
			'Finally, book a trial. Seeing the look on your own skin, in daylight, removes all guesswork — and it is the one appointment every bride tells us she was glad she did.'
		]
	},
	{
		slug: 'glow-facial-what-it-is-who-it-suits',
		title: 'The Glow Facial: What It Is and Who It Suits',
		category: 'Skin Care',
		date: '28 Oct 2026',
		excerpt: 'A gentle, no-downtime facial for dull, tired skin — and how to make the glow last for weeks.',
		image: 'service-skin',
		alt: 'Woman receiving a white facial mask treatment',
		body: [
			'The glow facial is our most-booked skin treatment, and the gentlest. No peels, no downtime — just deep cleansing, light exfoliation, a hydrating mask and a slow glow massage.',
			'It suits almost everyone, especially dull or tired skin, and skin that has seen too much sun. If your skin is sensitive, tell us at booking — we switch to fragrance-free products and skip exfoliation entirely.',
			'The glow peaks 24–48 hours after the facial, so book 3–5 days before an event, not the day before. Drink water, wear SPF, and skip strong actives for two days after.',
			'For lasting results, a facial every 4–6 weeks beats one expensive treatment a year. Skin is a routine, not a rescue mission.'
		]
	},
	{
		slug: 'hair-care-after-colour-weekly-routine',
		title: 'Hair Care After Colour: A Simple Weekly Routine',
		category: 'Hair',
		date: '10 Oct 2026',
		excerpt: 'Three small habits that keep coloured hair soft, shiny and healthy between salon visits.',
		image: 'service-hair',
		alt: 'Indian woman with long wavy hair after a salon styling session',
		body: [
			'Coloured hair is not high-maintenance — it just needs three small habits. First, wash less: 2–3 times a week with a sulphate-free shampoo keeps colour from fading.',
			'Second, oil once a week. A light oil on the lengths for 30 minutes before washing does more than most expensive masks.',
			'Third, protect it from heat. Always use a heat protectant before styling, and keep hot tools at medium heat — coloured hair dries out faster.',
			'Come back for a gloss or toner every 6–8 weeks and your colour will look freshly done all year.'
		]
	},
	{
		slug: 'hd-vs-airbrush-bridal-makeup',
		title: 'HD vs Airbrush Bridal Makeup: Which One Is Right for You?',
		category: 'Bridal',
		date: '24 Sep 2026',
		excerpt: 'Both photograph beautifully. The difference is wear time, finish and how your skin feels at 2 AM.',
		image: 'service-beauty',
		alt: 'Natural glam makeup look',
		body: [
			'HD makeup uses a high-definition foundation blended with brushes and sponges. It looks like skin, covers beautifully and suits most brides — especially if you like a soft, natural finish.',
			'Airbrush sprays a fine mist of foundation onto the skin. The layer is thinner, so it lasts longer — up to 16 hours — and holds up better in heat, humidity and tears.',
			'Our rule of thumb: a daytime wedding with lots of outdoor photos leans airbrush; an intimate evening wedding leans HD. Sensitive or very dry skin usually prefers HD.',
			'The honest answer is that the artist matters more than the technique. A trial lets you see both on your own skin before you decide.'
		]
	},
	{
		slug: 'pre-wedding-skin-prep-timeline',
		title: 'Pre-Wedding Skin Prep: A Simple 3-Month Timeline',
		category: 'Skin Care',
		date: '08 Sep 2026',
		excerpt: 'What to do 3 months, 1 month and 1 week before the wedding — and what to stop doing.',
		image: 'about-facial',
		alt: 'Relaxing facial treatment in progress',
		body: [
			'Three months out: start a simple routine — cleanser, moisturiser, SPF. Book a skin consultation so we know your skin before we plan your look.',
			'One month out: monthly facials begin, and this is the last window for any new treatment. Nothing new after this point.',
			'One week out: final facial 3–5 days before the wedding, good sleep, lots of water. No new products, no scrubs, no experiments.',
			'On the day: arrive with clean, moisturised skin and no makeup. We handle the rest.'
		]
	},
	{
		slug: 'how-to-choose-bridal-makeup-artist',
		title: 'How to Choose a Bridal Makeup Artist in Mumbai',
		category: 'Bridal',
		date: '20 Aug 2026',
		excerpt: 'Five checks before you book: portfolio, trial, one-bride-a-day, products and the advance.',
		image: 'about-main',
		alt: 'Soft glam portrait in natural light',
		body: [
			'First, check the portfolio for real brides with your skin tone, in natural light — not filtered studio shots. Ask who exactly will do your makeup on the day.',
			'Second, always do a trial. It is the only way to know how the look wears on your skin for 10+ hours.',
			'Third, ask if the artist takes one bride a day. An artist rushing between two weddings cannot stay with you through every function.',
			'Fourth, ask which products they use and whether they patch-test. Your skin will thank you.',
			'Finally, understand the advance: 40% is the Mumbai standard, and it should be clearly written down with reschedule terms.'
		]
	}
];

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
	{
		q: 'How far ahead should I book my bridal date?',
		a: '4–6 months ahead for peak wedding season (Nov–Feb). We take one bride per day and dates fill fast — a 40% advance locks your date.'
	},
	{
		q: 'Do you offer a bridal trial?',
		a: 'Yes. Confirmed bookings get a free half-face trial so you can see the look on your own skin before the day.'
	},
	{
		q: 'What payment methods do you accept?',
		a: 'UPI (GPay / PhonePe / Paytm), cards and cash. Bridal bookings need a 40% advance; the rest is due on the day.'
	},
	{
		q: 'What is your cancellation policy?',
		a: 'Reschedule free up to 7 days before your appointment. Bridal advances are non-refundable but transferable to a new date once.'
	},
	{
		q: 'Will the makeup last in Mumbai heat and humidity?',
		a: 'Yes — we use long-wear HD and airbrush products, set with fixing spray, and give you a touch-up kit for the day.'
	},
	{
		q: 'Do you travel for outstation or destination weddings?',
		a: 'Yes, across India. Travel and stay are charged at actuals, and we confirm them in writing before you book.'
	},
	{
		q: 'I have sensitive skin. Is a facial or makeup safe for me?',
		a: 'Yes — tell us at booking. We use fragrance-free, patch-tested products, skip active exfoliation, and patch-test colour on your first visit.'
	},
	{
		q: 'How long does party makeup take?',
		a: 'About 90 minutes including quick hairstyling. Bridal looks take about 3 hours per look.'
	},
	{
		q: 'Do you do group bookings for bridesmaids?',
		a: 'Yes — bridesmaids and family get mini-looks at a group rate. Tell us the headcount when you book.'
	},
	{
		q: 'Where are you located?',
		a: '2nd Floor, 14 Glow Lane, Linking Road, Bandra West, Mumbai — 5 minutes from Bandra station. Walk-ins are welcome; appointments are preferred.'
	},
	{
		q: 'What are your hours?',
		a: 'Monday to Saturday, 9:00 AM – 7:00 PM IST. Sundays are bridal-only by prior booking.'
	},
	{
		q: 'Do you sell gift cards?',
		a: 'Yes — gift cards start at ₹1,000 and work on any service. Ask at the studio or on WhatsApp.'
	}
];

export type Offer = { title: string; detail: string; tag: string };

export const offers: Offer[] = [
	{
		title: 'First Visit Glow',
		detail: '20% off your first facial or haircut — mention this site when you book.',
		tag: 'New clients'
	},
	{
		title: 'Bridal + Sangeet Combo',
		detail: 'Book 3 bridal looks together and save ₹10,000 on the Signature Combo.',
		tag: 'Brides'
	},
	{
		title: 'Bring a Friend',
		detail: 'Book together and you both get a free blow-dry with any service above ₹1,999.',
		tag: 'Refer a friend'
	}
];

export type InstagramPost = { image: string; alt: string; caption: string; likes: string };

export const instagramPosts: InstagramPost[] = [
	{ image: 'gallery-bridal', alt: 'Bridal look', caption: 'Airbrush bridal for Ananya — 16-hour wear, zero touch-ups needed.', likes: '1.2k' },
	{ image: 'service-hair', alt: 'Hair styling', caption: 'Soft waves + gloss for the weekend. No filter, just good light.', likes: '860' },
	{ image: 'service-skin', alt: 'Facial', caption: 'Glow facial day — this skin had not slept in a week.', likes: '940' },
	{ image: 'service-nails', alt: 'Nails', caption: 'Dark, glossy, and lasting 3 weeks. Gel, done right.', likes: '720' },
	{ image: 'service-beauty', alt: 'Party glam', caption: 'Sangeet glam that survived 4 hours of dancing.', likes: '1.5k' },
	{ image: 'about-main', alt: 'Soft glam portrait', caption: 'Soft glam, natural light, real skin.', likes: '1.1k' }
];

export type ConsultationStep = { title: string; detail: string };

export const consultationSteps: ConsultationStep[] = [
	{
		title: 'Tell us about you',
		detail: 'Skin, hair, allergies, what you liked or hated last time — 10 minutes of honest talk before anyone touches a brush.'
	},
	{
		title: 'We look, then we plan',
		detail: 'Your artist checks your skin or hair in natural light and maps a look that suits your face, outfit and the occasion.'
	},
	{
		title: 'Try it on your skin',
		detail: 'For colour and bridal, a patch test or a half-face trial shows you exactly how it will look and wear.'
	},
	{
		title: 'You leave with a plan',
		detail: 'Price, duration, aftercare and the right date — written down, no surprises later.'
	}
];

export const patchTestNotes: string[] = [
	'Free, and takes 10 minutes — a small amount of product behind your ear or on your inner arm.',
	'Colour needs 48 hours before your appointment, so book your patch test at least two days ahead.',
	'We patch-test on your first colour visit, and again if you change products or have had a reaction elsewhere.',
	'If you have ever reacted to hair colour, tell us at booking — do not skip the test.',
	'Skin treatments use fragrance-free, patch-tested products; tell us about allergies and we adjust.'
];

export type GiftCard = { amount: number; label: string; note: string };

export const giftCards: GiftCard[] = [
	{
		amount: 1000,
		label: 'A little glow',
		note: 'Covers threading, a classic manicure, or part of any service.'
	},
	{
		amount: 2500,
		label: 'The glow facial',
		note: 'A full signature facial, or a haircut and blow-dry.'
	},
	{
		amount: 5000,
		label: 'The full treat',
		note: 'Party makeup, or a facial plus gel nails — their pick.'
	},
	{
		amount: 10000,
		label: 'The bridal gift',
		note: 'Part of a bridal package, or a full day of pampering.'
	}
];

export const giftCardHowItWorks: ConsultationStep[] = [
	{
		title: 'Pick an amount',
		detail: '₹1,000, ₹2,500, ₹5,000 or ₹10,000 — or any amount in between.'
	},
	{
		title: 'Call or WhatsApp us',
		detail: 'Tell us the amount and the recipient’s name. Pay by UPI, card or cash at the studio.'
	},
	{
		title: 'We send the card',
		detail: 'Digital card on WhatsApp or email the same day; a printed card at the studio if you prefer.'
	},
	{
		title: 'They book',
		detail: 'The recipient books any service and mentions the card code — it works like cash at the studio.'
	}
];

export const giftCardValidity =
	'Valid for 12 months from purchase, on any service, for anyone. The card is transferable once, and any unused balance stays on the card for the next visit.';

export type BeforeAfterItem = {
	image: string;
	alt: string;
	service: string;
	artist: string;
	label: string;
};

export const beforeAfter: BeforeAfterItem[] = [
	{
		image: 'gallery-bridal',
		alt: 'Bridal HD makeup, soft glam, by Meera',
		service: 'Bridal',
		artist: 'meera',
		label: 'Airbrush bridal — Meera'
	},
	{
		image: 'service-hair',
		alt: 'Balayage and blow-dry finish, by Ravi',
		service: 'Hair',
		artist: 'ravi',
		label: 'Balayage + blow-dry — Ravi'
	},
	{
		image: 'service-skin',
		alt: 'Glow facial result, by Sana',
		service: 'Skin',
		artist: 'sana',
		label: 'Glow facial — Sana'
	},
	{
		image: 'service-nails',
		alt: 'Gel manicure with dark glossy polish, by Sana',
		service: 'Nails',
		artist: 'sana',
		label: 'Gel nails — Sana'
	}
];

export type AccessibilityFeature = { title: string; detail: string };

export const accessibilityFeatures: AccessibilityFeature[] = [
	{
		title: 'Step-free access',
		detail: 'The studio is on the 2nd floor with a lift from the ground floor, and the entrance and treatment rooms are step-free.'
	},
	{
		title: 'Accessible washroom',
		detail: 'A step-free, accessible washroom is available inside the studio.'
	},
	{
		title: 'Assistance on request',
		detail: 'Tell us when you book and we will help with stairs, seating, or anything else — a chair in the waiting area, a quieter slot, extra time.'
	},
	{
		title: 'Service animals welcome',
		detail: 'Guide and assistance dogs are welcome in the studio.'
	},
	{
		title: 'Sensory-friendly visits',
		detail: 'If bright lights, strong scents or noise are a problem, ask for a quieter slot — early mornings are usually calmest, and we use fragrance-free products on request.'
	},
	{
		title: 'Booking help',
		detail: 'If the website is hard to use, call or WhatsApp us and we will book for you — no online form needed.'
	}
];

export const firstVisitSteps: ConsultationStep[] = [
	{
		title: 'Arrive 10 minutes early',
		detail: 'So we can offer you chai, confirm your booking, and start on time — your slot is yours, we never double-book.'
	},
	{
		title: 'A short consultation',
		detail: 'Your artist asks about your skin, hair, allergies and what you want — 5 to 10 minutes before we start.'
	},
	{
		title: 'Patch test, if needed',
		detail: 'First colour visit? We patch-test free, 48 hours before — book it with your consultation.'
	},
	{
		title: 'Your treatment',
		detail: 'Relax. We explain each step as we go, and you can ask for a pause any time.'
	},
	{
		title: 'Aftercare, written down',
		detail: 'You leave with simple aftercare and a note of what to avoid for 24–48 hours.'
	},
	{
		title: 'What to bring',
		detail: 'Reference photos, your outfit for colour matching, and a list of products you are allergic to. Arrive with clean hair for colour, and clean, moisturised skin for makeup.'
	}
];

export const firstVisitFaqs: FaqItem[] = [
	{
		q: 'Do I need to book, or can I walk in?',
		a: 'Walk-ins are welcome, but appointments are preferred — booked clients never wait.'
	},
	{
		q: 'What if I am late?',
		a: 'Call us. We hold your slot for 15 minutes; after that we may need to shorten the treatment.'
	},
	{
		q: 'Can I bring someone with me?',
		a: 'Yes — one guest is welcome to wait in the lounge. Children under 12 need an adult with them at all times.'
	},
	{
		q: 'How do I pay?',
		a: 'UPI, cards and cash. Bridal bookings need a 40% advance.'
	}
];

export function inr(amount: number): string {
	return amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
}
