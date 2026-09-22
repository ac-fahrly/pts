import Link from 'next/link';
import type { Lang, SharedContent } from '@/content/types';
import { site } from '@/lib/config';
import { tpl } from '@/lib/i18n';

export function Footer({ lang, shared }: { lang: Lang; shared: SharedContent }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-col">
            <div className="wordmark" style={{ marginBottom: 12 }}>
              <span className="wordmark-dot" aria-hidden />
              {site.name}
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-lo)', maxWidth: 320 }}>
              {shared.footer.tagline}
            </p>
          </div>
          {shared.footer.columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>{tpl(shared.footer.copyright, { year })}</span>
          <span>
            <a
              href={site.whatsappHref}
              rel="noopener"
              target="_blank"
              className="num"
              style={{ color: 'var(--text-mid)' }}
            >
              WhatsApp {site.whatsapp}
            </a>
            {' · '}
            <a href={site.emailHref} style={{ color: 'var(--text-mid)' }}>{site.email}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
