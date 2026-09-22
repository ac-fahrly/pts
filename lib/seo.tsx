import type { Lang } from '@/content/types';
import { site } from './config';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.domain}#organization`,
  name: site.name,
  legalName: site.legal.company,
  url: site.domain,
  logo: {
    '@type': 'ImageObject',
    url: `${site.domain}/logo.svg`,
    width: 512,
    height: 512,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      areaServed: ['DE', 'AT', 'CH'],
      availableLanguage: ['de', 'en'],
      email: site.email,
      contactOption: 'HearingImpairedSupported',
      url: site.whatsappHref,
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      areaServed: 'DE',
      availableLanguage: ['de', 'en'],
      email: site.email,
      url: site.whatsappHref,
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.legal.street,
    postalCode: site.legal.postal,
    addressLocality: site.legal.city,
    addressRegion: site.legal.region,
    addressCountry: site.legal.country,
  },
  // sameAs: fill with real entity links once accounts exist.
  sameAs: [
    'https://www.linkedin.com/company/fahrly',
  ],
};

export function webSiteJsonLd(lang: Lang) {
  const url = lang === 'de' ? site.domain : `${site.domain}/en`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${url}#website`,
    url,
    name: site.name,
    inLanguage: lang === 'de' ? 'de-DE' : 'en',
    publisher: { '@id': `${site.domain}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${site.domain}#software`,
  name: 'PTS',
  description:
    'Personentransportsoftware für Disposition, Routenplanung und Arbeitszeiterfassung. Für Mietwagen, Taxi und Krankentransport.',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'FleetManagementSoftware',
  operatingSystem: 'Web, iOS, Android',
  inLanguage: ['de-DE', 'en'],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '39',
    highPrice: '69',
    offerCount: 3,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      priceCurrency: 'EUR',
      unitText: 'pro Fahrzeug pro Monat',
      referenceQuantity: {
        '@type': 'QuantitativeValue',
        value: 1,
        unitCode: 'MON',
        unitText: 'vehicle-month',
      },
    },
  },
  featureList: [
    'Disposition & Board',
    'Multi-Stop-Routenoptimierung',
    'Arbeitszeiterfassung nach BAG-Urteil 2022',
    'Fahrer-App (iOS, Android, offline)',
    'DATEV, Lexoffice, sevDesk Integration',
    'REST-API + Webhooks',
  ],
  publisher: { '@id': `${site.domain}#organization` },
};

export function productWithTiersJsonLd(
  lang: Lang,
  tiers: { id: string; name: string; desc: string; priceValue?: number; ctaHref: string }[],
) {
  const base = lang === 'de' ? site.domain : `${site.domain}/en`;
  const priceMap: Record<string, number> = { starter: 39, pro: 69 };
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${base}/preise#product`,
    name: 'PTS',
    description:
      lang === 'de'
        ? 'Personentransportsoftware für Disposition und Arbeitszeit.'
        : 'Software for passenger transport: dispatch and work-time.',
    brand: { '@type': 'Brand', name: 'PTS' },
    offers: tiers.map((t) => {
      const price = priceMap[t.id];
      return {
        '@type': 'Offer',
        name: t.name,
        description: t.desc,
        url: `${base}${t.ctaHref}`,
        priceCurrency: 'EUR',
        price: price ? price.toString() : undefined,
        availability: 'https://schema.org/InStock',
        eligibleRegion: ['DE', 'AT', 'CH'],
        priceSpecification: price
          ? {
              '@type': 'UnitPriceSpecification',
              price: price.toString(),
              priceCurrency: 'EUR',
              unitText: lang === 'de' ? 'pro Fahrzeug pro Monat' : 'per vehicle per month',
              referenceQuantity: {
                '@type': 'QuantitativeValue',
                value: 1,
                unitCode: 'MON',
              },
            }
          : undefined,
      };
    }),
  };
}

export function faqJsonLd(items: { q: string; a: string }[], lang: Lang = 'de') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang === 'de' ? 'de-DE' : 'en',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function howToJsonLd(opts: {
  lang: Lang;
  name: string;
  description: string;
  totalTime: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: opts.lang === 'de' ? 'de-DE' : 'en',
    name: opts.name,
    description: opts.description,
    totalTime: opts.totalTime,
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function webPageJsonLd(opts: {
  lang: Lang;
  url: string;
  name: string;
  description: string;
  speakableSelectors?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang === 'de' ? 'de-DE' : 'en',
    isPartOf: {
      '@id': `${opts.lang === 'de' ? site.domain : `${site.domain}/en`}#website`,
    },
    ...(opts.speakableSelectors && {
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: opts.speakableSelectors,
      },
    }),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
