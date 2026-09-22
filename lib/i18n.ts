import type { Lang, HomeContent, ProduktContent, PreiseContent, ImpressumContent, SharedContent, MockStrings } from '@/content/types';

import homeDe from '@/content/de/home.json';
import produktDe from '@/content/de/produkt.json';
import preiseDe from '@/content/de/preise.json';
import impressumDe from '@/content/de/impressum.json';
import sharedDe from '@/content/de/shared.json';
import mockDe from '@/content/de/mock-strings.json';

import homeEn from '@/content/en/home.json';
import produktEn from '@/content/en/produkt.json';
import preiseEn from '@/content/en/preise.json';
import impressumEn from '@/content/en/impressum.json';
import sharedEn from '@/content/en/shared.json';
import mockEn from '@/content/en/mock-strings.json';

export const LANGS: Lang[] = ['de', 'en'];

export function pathFor(lang: Lang, sub: '' | '/produkt' | '/preise' | '/impressum' = '') {
  const prefix = lang === 'de' ? '' : '/en';
  return `${prefix}${sub || '/'}`.replace(/\/$/, '') || '/';
}

const map = {
  de: { home: homeDe, produkt: produktDe, preise: preiseDe, impressum: impressumDe, shared: sharedDe, mock: mockDe },
  en: { home: homeEn, produkt: produktEn, preise: preiseEn, impressum: impressumEn, shared: sharedEn, mock: mockEn },
} as const;

export function getHome(lang: Lang): HomeContent { return map[lang].home as unknown as HomeContent; }
export function getProdukt(lang: Lang): ProduktContent { return map[lang].produkt as unknown as ProduktContent; }
export function getPreise(lang: Lang): PreiseContent { return map[lang].preise as unknown as PreiseContent; }
export function getImpressum(lang: Lang): ImpressumContent { return map[lang].impressum as unknown as ImpressumContent; }
export function getShared(lang: Lang): SharedContent { return map[lang].shared as unknown as SharedContent; }
export function getMock(lang: Lang): MockStrings { return map[lang].mock as unknown as MockStrings; }

export function tpl(s: string, vars: Record<string, string | number>) {
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
