import type { Metadata } from 'next';
import { ThanksPage } from '@/components/pages/ThanksPage';

export const metadata: Metadata = {
  title: 'Danke — Anfrage erhalten',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThanksPage lang="de" />;
}
