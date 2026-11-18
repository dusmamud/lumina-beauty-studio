import { error } from '@sveltejs/kit';
import { serviceDetails, services } from '#lib/data/site.ts';
import type { PageServerLoad } from './$types';

export const prerender = true;

export function entries() {
	return services.map((s) => ({ slug: s.id }));
}

export const load: PageServerLoad = ({ params }) => {
	const service = services.find((s) => s.id === params.slug);
	if (!service) error(404, 'Service not found');
	const detail = serviceDetails[service.id];
	if (!detail) error(404, 'Service not found');
	return { service, detail };
};
