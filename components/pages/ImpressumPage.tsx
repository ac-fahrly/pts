import type { Lang, ImpressumContent } from '@/content/types';
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo';
import { site } from '@/lib/config';
import { tpl } from '@/lib/i18n';

export function ImpressumPage({ lang, c }: { lang: Lang; c: ImpressumContent }) {
  const base = lang === 'de' ? site.domain : `${site.domain}/en`;
  const vars = {
    company: site.legal.company,
    street: site.legal.street,
    city: site.legal.city,
    region: site.legal.region,
    postal: site.legal.postal,
    country: site.legal.countryName,
    ceo: site.legal.ceo,
    email: site.email,
  };

  return (
    <article>
      <JsonLd
        data={webPageJsonLd({
          lang,
          url: `${base}/impressum`,
          name: c.meta.title,
          description: c.meta.description,
        })}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: 'PTS', url: site.domain }, { name: c.title, url: `${base}/impressum` }])} />

      <section className="section legal-content">
        <div className="container container-narrow">
          <span className="eyebrow">{c.eyebrow}</span>
          <h1 style={{ marginBottom: 40 }}>{c.title}</h1>

          <p style={{ color: 'var(--text-lo)', fontSize: 14, marginBottom: 8 }}>{c.legalHeader}</p>

          <dl>
            <dt>{c.labels.anbieter}</dt>
            <dd>{site.legal.company}</dd>
            <dt>{c.labels.anschrift}</dt>
            <dd>
              {site.legal.street}
              <br />{site.legal.city}, {site.legal.region} <span className="num">{site.legal.postal}</span>
              <br />{site.legal.countryName}
            </dd>
            <dt>{c.labels.vertreten}</dt>
            <dd>{site.legal.ceo}</dd>
            <dt>{c.labels.kontakt}</dt>
            <dd>
              {c.labels.email}: <a href={site.emailHref}>{site.email}</a>
              <br />
              {c.labels.whatsapp}:{' '}
              <a href={site.whatsappHref} rel="noopener" target="_blank" className="num">
                {site.whatsapp}
              </a>
            </dd>
          </dl>

          <h2>{c.responsibleTitle}</h2>
          <p>{tpl(c.responsibleBody, vars)}</p>

          <h2>{c.euTitle}</h2>
          <p>{c.euBody}</p>

          <h2>{c.consumerTitle}</h2>
          <p>{c.consumerBody}</p>

          <h2>{c.liabilityTitle}</h2>
          <p>{c.liabilityBody}</p>

          <h2>{c.copyrightTitle}</h2>
          <p>{c.copyrightBody}</p>

          <h1 id="datenschutz" style={{ marginTop: 80 }}>{c.privacy.title}</h1>
          {c.privacy.sections.map((s) => (
            <section key={s.h2}>
              <h2>{s.h2}</h2>
              <p>{tpl(s.body, vars)}</p>
              {s.list && (
                <ul>
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </section>
          ))}

          <p style={{ marginTop: 40, color: 'var(--text-lo)', fontSize: 13 }}>{c.privacy.stand}</p>
        </div>
      </section>
    </article>
  );
}
