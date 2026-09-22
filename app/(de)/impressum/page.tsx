import type { Metadata } from 'next';
import { ImpressumPage } from '@/components/pages/ImpressumPage';
import { getImpressum } from '@/lib/i18n';
import { site } from '@/lib/config';

const c = getImpressum('de');

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: `${site.domain}/impressum`, languages: { 'de-DE': `${site.domain}/impressum`, 'en': `${site.domain}/en/impressum` } },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ImpressumPage lang="de" c={c} />;
}
