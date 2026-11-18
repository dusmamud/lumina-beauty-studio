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
	email: 'hello@luminabeauty.in',
	address: '2nd Floor, 14 Glow Lane, Linking Road, Bandra West, Mumbai 400 050, India',
	hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
	hoursShort: 'Mon – Sat: 9:00 AM – 7:00 PM',
	url: 'https://luminabeauty.in'
} as const;

export const nav = [
	{ label: 'Home', href: '#home' },
	{ label: 'About Us', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Gallery', href: '#gallery' },
	{ label: 'Blog', href: '#blog' },
	{ label: 'Contact', href: '#contact' }
] as const;

export type Service = {
	id: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	icon: 'scissors' | 'nail' | 'face' | 'lotus';
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

export type GalleryItem = { image: string; alt: string; label: string };

export const gallery: GalleryItem[] = [
	{ image: 'gallery-bridal', alt: 'Indian bride with elegant bridal makeup', label: 'Bridal' },
	{ image: 'service-beauty', alt: 'Natural glam makeup look', label: 'Makeup' },
	{ image: 'service-hair', alt: 'Wavy hair styling', label: 'Hair' },
	{ image: 'service-skin', alt: 'Facial skin treatment', label: 'Skin' },
	{ image: 'about-main', alt: 'Soft glam portrait', label: 'Glam' },
	{ image: 'service-nails', alt: 'Glossy manicured nails', label: 'Nails' }
];

export type Testimonial = { name: string; role: string; quote: string; rating: number };

export const testimonials: Testimonial[] = [
	{
		name: 'Ananya Sharma',
		role: 'Bride, Mumbai',
		quote:
			'My bridal makeup stayed flawless from the morning ceremony to late night. I felt like the best version of myself — calm, confident and glowing in every photo.',
		rating: 5
	},
	{
		name: 'Priya Mehta',
		role: 'Regular client, Bandra',
		quote:
			'The team listens first and then suggests what suits you. My haircut and facial are now a monthly ritual I genuinely look forward to.',
		rating: 5
	},
	{
		name: 'Kavya Iyer',
		role: 'Party makeup, Juhu',
		quote:
			'Booked for a family function and got so many compliments. The look was soft and natural, never heavy — exactly what I asked for.',
		rating: 5
	}
];

export type BlogPost = { title: string; category: string; date: string; excerpt: string; image: string; alt: string };

export const blogPosts: BlogPost[] = [
	{
		title: '5 Bridal Makeup Tips for a Mumbai Summer Wedding',
		category: 'Bridal',
		date: '12 Nov 2026',
		excerpt: 'Heat, humidity and long ceremonies — how to keep your bridal look fresh from morning to midnight.',
		image: 'gallery-bridal',
		alt: 'Indian bride with elegant bridal makeup'
	},
	{
		title: 'The Glow Facial: What It Is and Who It Suits',
		category: 'Skin Care',
		date: '28 Oct 2026',
		excerpt: 'A gentle, no-downtime facial for dull, tired skin — and how to make the glow last for weeks.',
		image: 'service-skin',
		alt: 'Woman receiving a white facial mask treatment'
	},
	{
		title: 'Hair Care After Colour: A Simple Weekly Routine',
		category: 'Hair',
		date: '10 Oct 2026',
		excerpt: 'Three small habits that keep coloured hair soft, shiny and healthy between salon visits.',
		image: 'service-hair',
		alt: 'Indian woman with long wavy hair after a salon styling session'
	}
];

export function inr(amount: number): string {
	return amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
}
