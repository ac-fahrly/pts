import type { Metadata } from 'next';
import { ThanksPage } from '@/components/pages/ThanksPage';

export const metadata: Metadata = {
  title: 'Thanks — request received',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThanksPage lang="en" />;
}
