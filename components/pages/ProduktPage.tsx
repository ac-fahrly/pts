import Link from 'next/link';
import type { Lang, ProduktContent, MockStrings } from '@/content/types';
import { DispatchBoard } from '@/components/mock-ui/DispatchBoard';
import { RouteMap } from '@/components/mock-ui/RouteMap';
import { StundenzettelTable } from '@/components/mock-ui/StundenzettelTable';
import { RouteCard } from '@/components/mock-ui/RouteCard';
import { JsonLd, breadcrumbJsonLd, howToJsonLd, webPageJsonLd } from '@/lib/seo';
import { site } from '@/lib/config';

export function ProduktPage({
  lang,
  c,
  mock,
}: {
  lang: Lang;
  c: ProduktContent;
  mock: MockStrings;
}) {
  const base = lang === 'de' ? site.domain : `${site.domain}/en`;
  const homeUrl = lang === 'de' ? site.domain : `${site.domain}/en`;
  const pageUrl = `${base}/produkt`;
  const demoHref = lang === 'de' ? '/#demo' : '/en#demo';

  return (
    <article>
      <JsonLd
        data={webPageJsonLd({
          lang,
          url: pageUrl,
          name: c.meta.title,
          description: c.meta.description,
          speakableSelectors: ['h1', '.hero-sub', '#onboarding p'],
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'PTS', url: homeUrl },
          { name: c.hero.eyebrow, url: pageUrl },
        ])}
      />
      <JsonLd
        data={howToJsonLd({
          lang,
          name: c.onboarding.h2,
          description: c.onboarding.body,
          totalTime: c.onboarding.totalTime,
          steps: c.onboarding.steps.map((s) => ({ name: `${s.day}: ${s.name}`, text: s.text })),
        })}
      />

      <section className="hero" style={{ paddingBottom: 24 }}>
        <div className="container hero-inner container-narrow">
          <span className="eyebrow">{c.hero.eyebrow}</span>
          <h1 className="text-balance">{c.hero.h1}</h1>
          <p className="hero-sub text-pretty">{c.hero.sub}</p>
        </div>
      </section>

      <section className="section" id="disposition">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <span className="eyebrow">{c.sections.disposition.eyebrow}</span>
            <h2 className="text-balance">{c.sections.disposition.h2}</h2>
            <p style={{ marginTop: 16 }}>{c.sections.disposition.body}</p>
          </div>
          <DispatchBoard s={mock} />
          <div className="grid-3" style={{ marginTop: 48 }}>
            {c.sections.disposition.cards.map((card) => (
              <div key={card.title} className="card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="routen" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div className="split split-reverse">
            <div className="split-copy">
              <span className="eyebrow">{c.sections.routen.eyebrow}</span>
              <h2 className="text-balance">{c.sections.routen.h2}</h2>
              <p>{c.sections.routen.body}</p>
              <ul className="split-list">
                {c.sections.routen.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
            </div>
            <div className="split-mock"><RouteMap s={mock} /></div>
          </div>

          <div className="produkt-fahrer">
            <div>
              <span className="eyebrow">{c.sections.fahrerApp.eyebrow}</span>
              <h2 className="text-balance">{c.sections.fahrerApp.h2}</h2>
              <p style={{ marginTop: 16 }}>{c.sections.fahrerApp.body}</p>
              <ul className="split-list" style={{ marginTop: 20 }}>
                {c.sections.fahrerApp.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
            </div>
            <div><RouteCard s={mock} /></div>
          </div>
        </div>
      </section>

      <section className="section" id="arbeitszeit">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <span className="eyebrow">{c.sections.arbeitszeit.eyebrow}</span>
              <h2 className="text-balance">{c.sections.arbeitszeit.h2}</h2>
              <p>{c.sections.arbeitszeit.body}</p>
              <ul className="split-list">
                {c.sections.arbeitszeit.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
            </div>
            <div className="split-mock"><StundenzettelTable s={mock} /></div>
          </div>
        </div>
      </section>

      {/* ONBOARDING — backs the HowTo schema */}
      <section className="section" id="onboarding" style={{ background: 'var(--bg-1)' }}>
        <div className="container container-narrow">
          <span className="eyebrow">{c.onboarding.eyebrow}</span>
          <h2 className="text-balance">{c.onboarding.h2}</h2>
          <p style={{ marginTop: 16 }}>{c.onboarding.body}</p>
          <ol className="onboarding-steps">
            {c.onboarding.steps.map((s, i) => (
              <li key={s.name}>
                <span className="onboarding-day">{s.day}</span>
                <div>
                  <div className="onboarding-name">
                    <span className="num" style={{ color: 'var(--text-lo)', marginRight: 8 }}>0{i + 1}</span>
                    {s.name}
                  </div>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <span className="eyebrow">{c.segments.eyebrow}</span>
            <h2 className="text-balance">{c.segments.h2}</h2>
          </div>
          <div className="grid-3">
            {c.segments.cards.map((seg) => (
              <div key={seg.id} className="card" id={seg.id}>
                <h3>{seg.title}</h3>
                <p style={{ marginBottom: 16 }}>{seg.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: 'var(--text-lo)' }}>
                  {seg.bullets.map((b) => <li key={b}>· {b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-1)' }}>
        <div className="container container-narrow">
          <span className="eyebrow">{c.integrations.eyebrow}</span>
          <h2 className="text-balance" style={{ marginBottom: 32 }}>{c.integrations.h2}</h2>
          <div className="integrations-grid">
            {c.integrations.items.map((i) => (
              <div key={i} className="integration-tile">{i}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div className="cta-band-inner">
              <span className="eyebrow">{c.cta.eyebrow}</span>
              <h2>{c.cta.h2}</h2>
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
