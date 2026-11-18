import { error } from '@sveltejs/kit';
import { blogPosts } from '#lib/data/site.ts';
import type { PageServerLoad } from './$types';

export const prerender = true;

export function entries() {
	return blogPosts.map((p) => ({ slug: p.slug }));
}

export const load: PageServerLoad = ({ params }) => {
	const post = blogPosts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Article not found');
	return { post };
};
