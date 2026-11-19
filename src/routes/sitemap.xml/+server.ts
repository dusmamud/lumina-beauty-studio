import { blogPosts, services, site } from '#lib/data/site.ts';

export const prerender = true;

const staticPages = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/about', priority: '0.8', changefreq: 'monthly' },
	{ path: '/services', priority: '0.9', changefreq: 'weekly' },
	{ path: '/bridal', priority: '0.9', changefreq: 'weekly' },
	{ path: '/consultation', priority: '0.7', changefreq: 'monthly' },
	{ path: '/gift-cards', priority: '0.7', changefreq: 'monthly' },
	{ path: '/team', priority: '0.7', changefreq: 'monthly' },
	{ path: '/gallery', priority: '0.8', changefreq: 'weekly' },
	{ path: '/pricing', priority: '0.9', changefreq: 'weekly' },
	{ path: '/reviews', priority: '0.7', changefreq: 'weekly' },
	{ path: '/book', priority: '0.9', changefreq: 'weekly' },
	{ path: '/contact', priority: '0.8', changefreq: 'monthly' },
	{ path: '/faq', priority: '0.7', changefreq: 'monthly' },
	{ path: '/policies', priority: '0.5', changefreq: 'monthly' },
	{ path: '/accessibility', priority: '0.5', changefreq: 'yearly' },
	{ path: '/first-visit', priority: '0.7', changefreq: 'monthly' },
	{ path: '/blog', priority: '0.8', changefreq: 'weekly' },
	{ path: '/privacy', priority: '0.3', changefreq: 'yearly' },
	{ path: '/terms', priority: '0.3', changefreq: 'yearly' }
];

export function GET() {
	const urls = [
		...staticPages.map(
			(p) =>
				`  <url><loc>${site.url}${p.path}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`
		),
		...services.map(
			(s) => `  <url><loc>${site.url}/services/${s.id}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
		),
		...blogPosts.map(
			(b) => `  <url><loc>${site.url}/blog/${b.slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`
		)
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
