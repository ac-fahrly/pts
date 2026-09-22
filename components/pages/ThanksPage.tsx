import Link from 'next/link';
import type { Lang } from '@/content/types';

const copy = {
  de: {
    eyebrow: 'Anfrage erhalten',
    h1: 'Danke — wir sind dran.',
    body: 'Ihre Demo-Anfrage ist bei uns. Wir melden uns per E-Mail innerhalb eines Werktags mit einem Terminvorschlag.',
    back: 'Zurück zur Startseite',
    href: '/',
  },
  en: {
    eyebrow: 'Request received',
    h1: "Thanks — we're on it.",
    body: "Your demo request is in. We'll reply by email within one business day with a proposed time.",
    back: 'Back to home',
    href: '/en',
  },
} as const;

export function ThanksPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <article>
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container container-narrow" style={{ textAlign: 'left' }}>
          <div
            aria-hidden
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'var(--accent-glow)',
              border: '1px solid var(--accent)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-hi)',
              marginBottom: 24,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <span className="eyebrow">{c.eyebrow}</span>
          <h1 className="text-balance" style={{ marginBottom: 20 }}>{c.h1}</h1>
          <p style={{ maxWidth: 560 }}>{c.body}</p>
          <div style={{ marginTop: 32 }}>
            <Link href={c.href} className="btn btn-secondary btn-lg">← {c.back}</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
