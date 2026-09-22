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
    default: 'PTS — Software for passenger transport: dispatch & work-time',
    template: '%s | PTS',
  },
  description:
    'PTS is the software for passenger transport: plan routes, dispatch trips, track work time to German labor law. From 39 € per vehicle.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${site.domain}/en`,
    siteName: site.name,
    title: 'PTS — Passenger transport software',
    description: 'Dispatch and work-time tracking for chauffeur, taxi and medical transport fleets.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${site.domain}/en`,
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

export default function RootLayoutEN({ children }: { children: React.ReactNode }) {
  const shared = getShared('en');
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webSiteJsonLd('en')} />
        <JsonLd data={softwareApplicationJsonLd} />
        <a href="#main" className="skip-link">{shared.skipLink}</a>
        <NavBar lang="en" shared={shared} />
        <main id="main">{children}</main>
        <Footer lang="en" shared={shared} />
        <MobileCTABar lang="en" shared={shared} />
      </body>
    </html>
  );
}
