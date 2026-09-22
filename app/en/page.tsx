import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { getHome, getMock } from '@/lib/i18n';
import { site } from '@/lib/config';

const c = getHome('en');

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  keywords: c.meta.keywords,
  alternates: { canonical: `${site.domain}/en`, languages: { 'de-DE': site.domain, 'en': `${site.domain}/en` } },
};

export default function Page() {
  return <HomePage lang="en" c={c} mock={getMock('en')} />;
}
