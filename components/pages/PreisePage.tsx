import Link from 'next/link';
import type { Lang, PreiseContent } from '@/content/types';
import { JsonLd, breadcrumbJsonLd, faqJsonLd, productWithTiersJsonLd, webPageJsonLd } from '@/lib/seo';
import { site } from '@/lib/config';
import { tpl } from '@/lib/i18n';

export function PreisePage({ lang, c }: { lang: Lang; c: PreiseContent }) {
  const base = lang === 'de' ? site.domain : `${site.domain}/en`;
  const demoHref = lang === 'de' ? '/#demo' : '/en#demo';
  const pageUrl = `${base}/preise`;

  return (
    <article>
      <JsonLd
        data={webPageJsonLd({
          lang,
          url: pageUrl,
          name: c.meta.title,
          description: c.meta.description,
          speakableSelectors: ['h1', '.hero-sub', '.price-card h3', '.price-card .amount'],
        })}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: 'PTS', url: site.domain }, { name: c.hero.eyebrow, url: pageUrl }])} />
      <JsonLd data={productWithTiersJsonLd(lang, c.tiers)} />
      <JsonLd data={faqJsonLd(c.faq.items, lang)} />

      <section className="hero" style={{ paddingBottom: 24 }}>
        <div className="container hero-inner container-narrow">
          <span className="eyebrow">{c.hero.eyebrow}</span>
          <h1 className="text-balance">{c.hero.h1}</h1>
          <p className="hero-sub text-pretty">{c.hero.sub}</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="price-grid">
            {c.tiers.map((t) => (
              <div key={t.id} className={`price-card ${t.featured ? 'featured' : ''}`}>
                {t.badge && <span className="badge">{t.badge}</span>}
                <h3>{t.name}</h3>
                <p className="desc">{t.desc}</p>
                <div className="price-value">
                  <span className="amount">{t.price}</span>
                  {t.per && <span className="per">{t.per}</span>}
                </div>
                <ul>
                  {t.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Link href={t.ctaHref} className={`btn ${t.featured ? 'btn-primary' : 'btn-secondary'}`}>
                  {t.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
          <p className="price-note">{c.note}</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-1)' }}>
        <div className="container container-narrow">
          <span className="eyebrow">{c.faq.eyebrow}</span>
          <h2 style={{ marginBottom: 32 }}>{c.faq.h2}</h2>
          <div className="faq">
            {c.faq.items.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div className="cta-band-inner">
              <span className="eyebrow">{c.cta.eyebrow}</span>
              <h2>{tpl(c.cta.h2, { mins: '15' })}</h2>
              <p style={{ marginTop: 12, color: 'var(--text-mid)' }}>{c.cta.body}</p>
              <div className="cta-band-actions">
                <Link href={demoHref} className="btn btn-primary btn-lg">{c.cta.primary}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
