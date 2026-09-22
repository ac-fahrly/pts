import Link from 'next/link';
import type { Lang, HomeContent, MockStrings } from '@/content/types';
import { DispatchBoard } from '@/components/mock-ui/DispatchBoard';
import { RouteMap } from '@/components/mock-ui/RouteMap';
import { StundenzettelTable } from '@/components/mock-ui/StundenzettelTable';
import { DispatchBoardMini } from '@/components/mock-ui/DispatchBoardMini';
import { LeadForm } from '@/components/LeadForm';
import { JsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo';
import { site } from '@/lib/config';
import { tpl } from '@/lib/i18n';

function iconFor(key: string) {
  const paths: Record<string, React.ReactNode> = {
    check: <path d="M20 7 9 18l-5-5" />,
    db: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></>,
    shield: <path d="M12 3 4 7v6c0 4 3.5 7 8 8 4.5-1 8-4 8-8V7l-8-4Z" />,
    chart: <path d="M4 12h4l3-8 4 16 3-8h4" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>,
    api: <><path d="m7 8-5 4 5 4" /><path d="m17 8 5 4-5 4" /><path d="M14 4 10 20" /></>,
  };
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      {paths[key] || paths.check}
    </svg>
  );
}

function mockFor(name: 'dispatch' | 'route' | 'timesheet' | 'dispatchMini', s: MockStrings) {
  switch (name) {
    case 'dispatch': return <DispatchBoard s={s} />;
    case 'route': return <RouteMap s={s} />;
    case 'timesheet': return <StundenzettelTable s={s} />;
    case 'dispatchMini': return <DispatchBoardMini s={s} />;
  }
}

export function HomePage({
  lang,
  c,
  mock,
}: {
  lang: Lang;
  c: HomeContent;
  mock: MockStrings;
}) {
  const demoHref = '#demo';
  const produktLink = lang === 'de' ? '/produkt' : '/en/produkt';
  const pageUrl = lang === 'de' ? site.domain : `${site.domain}/en`;

  return (
    <article>
      <JsonLd
        data={webPageJsonLd({
          lang,
          url: pageUrl,
          name: c.meta.title,
          description: c.meta.description,
          speakableSelectors: ['h1', '.hero-sub', '#faq summary', '#faq details > p'],
        })}
      />
      <JsonLd data={faqJsonLd(c.faq.items, lang)} />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">{c.hero.eyebrow}</span>
          <h1 className="text-balance">{c.hero.h1}</h1>
          <p className="hero-sub text-pretty">{c.hero.sub}</p>
          <div className="hero-cta">
            <Link href={demoHref} className="btn btn-primary btn-lg">{c.hero.ctas.primary}</Link>
          </div>
          <p className="hero-meta">
            {tpl(c.hero.meta, { days: '14', onboard: '5' })}
          </p>
        </div>
        <div className="container" style={{ marginTop: 64 }}>
          <DispatchBoard s={mock} />
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section-tight">
        <div className="container">
          <div className="logos-label">{c.trustedBy.label}</div>
          <div className="logos">
            {c.trustedBy.companies.map((co) => (
              <span key={co} className="logo-item">{co}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {c.features.map((f, i) => (
        <section
          key={f.id}
          className="section"
          id={f.id}
          style={i === 1 ? { background: 'var(--bg-1)' } : undefined}
        >
          <div className="container">
            <div className={`split ${f.reverse ? 'split-reverse' : ''}`}>
              <div className="split-copy">
                <span className="eyebrow">{f.eyebrow}</span>
                <h2 className="text-balance">{f.h2}</h2>
                <p>{f.body}</p>
                <ul className="split-list">
                  {f.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                {i === c.features.length - 1 && (
                  <div style={{ marginTop: 28 }}>
                    <Link href={`${produktLink}#arbeitszeit`} className="btn btn-secondary">
                      {lang === 'de' ? 'Details ansehen →' : 'See details →'}
                    </Link>
                  </div>
                )}
              </div>
              <div className="split-mock">{mockFor(f.mock, mock)}</div>
            </div>
          </div>
        </section>
      ))}

      {/* STATS */}
      <section className="section-tight">
        <div className="container">
          <div className="stats">
            {c.stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GRID */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <span className="eyebrow">{c.whyGrid.eyebrow}</span>
            <h2 className="text-balance">{c.whyGrid.h2}</h2>
          </div>
          <div className="grid-3">
            {c.whyGrid.cards.map((card) => (
              <div key={card.title} className="card">
                <div className="card-icon" aria-hidden>{iconFor(card.iconKey)}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <span className="eyebrow">{c.comparison.eyebrow}</span>
            <h2 className="text-balance">{c.comparison.h2}</h2>
            <p style={{ marginTop: 16 }}>{c.comparison.body}</p>
          </div>
          <div className="table-scroll">
            <table className="price-compare" style={{ marginTop: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: '34%' }}>{c.comparison.header.task}</th>
                  <th>{c.comparison.header.old}</th>
                  <th>{c.comparison.header.pts}</th>
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((r) => (
                  <tr key={r.task}>
                    <td style={{ color: 'var(--text-hi)' }}>{r.task}</td>
                    <td>{r.old}</td>
                    <td>{r.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-tight" style={{ background: 'var(--bg-1)' }}>
        <div className="container container-narrow">
          <blockquote style={{ fontSize: 24, lineHeight: 1.4, color: 'var(--text-hi)', letterSpacing: '-0.01em' }}>
            „{c.testimonial.quote}"
          </blockquote>
          <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44, height: 44, borderRadius: 8,
                background: 'var(--bg-3)', border: '1px solid var(--border-hi)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-hi)', fontWeight: 500,
              }}
            >
              {c.testimonial.author.initials}
            </div>
            <div>
              <div style={{ color: 'var(--text-hi)', fontSize: 15 }}>{c.testimonial.author.name}</div>
              <div style={{ color: 'var(--text-lo)', fontSize: 13 }}>{c.testimonial.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container container-narrow">
          <span className="eyebrow">{c.faq.eyebrow}</span>
          <h2 className="text-balance" style={{ marginBottom: 40 }}>{c.faq.h2}</h2>
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

      {/* CTA + LEAD FORM */}
      <section className="section" id="demo">
        <div className="container">
          <div className="cta-band">
            <div className="cta-band-inner">
              <span className="eyebrow">{c.demo.eyebrow}</span>
              <h2 className="text-balance">{c.demo.h2}</h2>
              <p style={{ marginTop: 12, color: 'var(--text-mid)' }}>{c.demo.body}</p>
              <LeadForm c={c.form} lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
