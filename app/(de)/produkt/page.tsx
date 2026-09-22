import type { Metadata } from 'next';
import { ProduktPage } from '@/components/pages/ProduktPage';
import { getProdukt, getMock } from '@/lib/i18n';
import { site } from '@/lib/config';

const c = getProdukt('de');

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: `${site.domain}/produkt`, languages: { 'de-DE': `${site.domain}/produkt`, 'en': `${site.domain}/en/produkt` } },
};

export default function Page() {
  return <ProduktPage lang="de" c={c} mock={getMock('de')} />;
}
