import type { Metadata } from 'next';
import { PreisePage } from '@/components/pages/PreisePage';
import { getPreise } from '@/lib/i18n';
import { site } from '@/lib/config';

const c = getPreise('en');

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: `${site.domain}/en/preise`, languages: { 'de-DE': `${site.domain}/preise`, 'en': `${site.domain}/en/preise` } },
};

export default function Page() {
  return <PreisePage lang="en" c={c} />;
}
