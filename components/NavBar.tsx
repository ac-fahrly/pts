'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Lang, SharedContent } from '@/content/types';
import { site } from '@/lib/config';

function switchLangHref(pathname: string, target: Lang) {
  if (target === 'en') {
    if (pathname.startsWith('/en')) return pathname;
    return `/en${pathname === '/' ? '' : pathname}` || '/en';
  }
  if (pathname.startsWith('/en')) {
    const rest = pathname.slice(3);
    return rest || '/';
  }
  return pathname;
}

export function NavBar({ lang, shared }: { lang: Lang; shared: SharedContent }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const home = lang === 'de' ? '/' : '/en';
  const produkt = lang === 'de' ? '/produkt' : '/en/produkt';
  const preise = lang === 'de' ? '/preise' : '/en/preise';
  const faqAnchor = lang === 'de' ? '/#faq' : '/en#faq';
  const demoAnchor = lang === 'de' ? '/#demo' : '/en#demo';

  const otherLang: Lang = lang === 'de' ? 'en' : 'de';

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Navigation">
      <div className="container nav-inner">
        <Link href={home} className="wordmark" aria-label={`${site.name} home`}>
          <span className="wordmark-dot" aria-hidden />
          {site.name}
        </Link>
        <div className="nav-links">
          <Link className="nav-link" href={produkt}>{shared.nav.produkt}</Link>
          <Link className="nav-link" href={preise}>{shared.nav.preise}</Link>
          <Link className="nav-link" href={faqAnchor}>{shared.nav.fragen}</Link>
        </div>
        <div className="nav-cta">
          <Link
            href={switchLangHref(pathname, otherLang)}
            className="lang-switch"
            aria-label={shared.languageSwitch.label}
          >
            <span className={lang === 'de' ? 'lang-active' : ''}>{shared.languageSwitch.de}</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>{shared.languageSwitch.en}</span>
          </Link>
          <Link className="btn btn-primary" href={demoAnchor}>{shared.nav.demo}</Link>
        </div>
      </div>
    </nav>
  );
}
