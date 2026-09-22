import Link from 'next/link';
import type { Lang, SharedContent } from '@/content/types';

export function MobileCTABar({ lang, shared }: { lang: Lang; shared: SharedContent }) {
  const demoHref = lang === 'de' ? '/#demo' : '/en#demo';
  return (
    <div className="mobile-cta" role="region" aria-label={shared.nav.demo}>
      <Link href={demoHref} className="btn btn-primary btn-lg" style={{ flex: 1 }}>
        {shared.nav.demo}
      </Link>
    </div>
  );
}
