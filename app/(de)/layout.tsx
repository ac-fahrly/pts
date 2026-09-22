import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { MobileCTABar } from '@/components/MobileCTABar';
import { JsonLd, organizationJsonLd, softwareApplicationJsonLd, webSiteJsonLd } from '@/lib/seo';
import { getShared } from '@/lib/i18n';
import { site } from '@/lib/config';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'PTS — Personentransportsoftware für Disposition & Arbeitszeit',
    template: '%s | PTS',
  },
  description:
    'PTS ist die Software für Personenbeförderung: Routen planen, Fahrten disponieren, Arbeitszeit gesetzeskonform erfassen. Ab 39 € pro Fahrzeug.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: site.domain,
    siteName: site.name,
    title: 'PTS — Personentransportsoftware',
    description: 'Disposition und Arbeitszeiterfassung für Mietwagen, Taxi und Krankentransport.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: site.domain,
    languages: {
      'de-DE': site.domain,
      'en': `${site.domain}/en`,
      'x-default': site.domain,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#08090a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayoutDE({ children }: { children: React.ReactNode }) {
  const shared = getShared('de');
  return (
    <html lang="de" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webSiteJsonLd('de')} />
        <JsonLd data={softwareApplicationJsonLd} />
        <a href="#main" className="skip-link">{shared.skipLink}</a>
        <NavBar lang="de" shared={shared} />
        <main id="main">{children}</main>
        <Footer lang="de" shared={shared} />
        <MobileCTABar lang="de" shared={shared} />
      </body>
    </html>
  );
}
