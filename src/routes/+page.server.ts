import type { PageServerLoad } from './$types';
import { blogPosts, gallery, pricing, services, site, testimonials } from '#lib/data/site.ts';

// Thin load function: mock data lives in one file (#lib/data/site.ts)
// so real data can replace it later without touching components.
export const load: PageServerLoad = () => {
	return { site, services, pricing, gallery, testimonials, blogPosts };
};
