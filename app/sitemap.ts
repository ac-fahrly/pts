import type { MetadataRoute } from 'next';
import { site } from '@/lib/config';

export const dynamic = 'force-static';

// Bump this per-page whenever the page content changes.
const LASTMOD: Record<string, string> = {
  '/': '2026-09-22',
  '/produkt': '2026-09-22',
  '/preise': '2026-09-22',
  '/impressum': '2026-09-22',
};

const PAGES = ['/', '/produkt', '/preise', '/impressum'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const p of PAGES) {
    const dePath = p === '/' ? '' : p;
    const enPath = p === '/' ? '' : p;
    entries.push({
      url: `${site.domain}${dePath}`,
      lastModified: LASTMOD[p],
      changeFrequency: p === '/impressum' ? 'yearly' : p === '/' ? 'weekly' : 'monthly',
      priority: p === '/impressum' ? 0.3 : p === '/' ? 1.0 : 0.9,
      alternates: {
        languages: {
          'de-DE': `${site.domain}${dePath}`,
          en: `${site.domain}/en${enPath}`,
        },
      },
    });
    entries.push({
      url: `${site.domain}/en${enPath}`,
      lastModified: LASTMOD[p],
      changeFrequency: p === '/impressum' ? 'yearly' : p === '/' ? 'weekly' : 'monthly',
      priority: p === '/impressum' ? 0.3 : p === '/' ? 0.95 : 0.85,
    });
  }
  return entries;
}
