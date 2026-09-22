export type Lang = 'de' | 'en';

export type MetaContent = {
  title: string;
  description: string;
  keywords?: string[];
};

export type CTAContent = { primary: string; secondary: string };

export type FeatureBlock = {
  id: string;
  eyebrow: string;
  h2: string;
  body: string;
  list: string[];
  mock: 'dispatch' | 'route' | 'timesheet' | 'dispatchMini';
  reverse?: boolean;
};

export type FAQItem = { q: string; a: string };

export type ComparisonRow = { task: string; old: string; pts: string };

export type WhyCard = { iconKey: 'check' | 'db' | 'shield' | 'chart' | 'clock' | 'api'; title: string; body: string };

export type StatItem = { value: string; label: string };

export type FormContent = {
  labels: Record<string, string>;
  placeholders: Record<string, string>;
  vehicleRanges: string[];
  submit: string;
  disclaimer: string;
  select: string;
  subject: string;
};

export type HomeContent = {
  meta: MetaContent;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    ctas: CTAContent;
    meta: string;
  };
  trustedBy: { label: string; companies: string[] };
  features: FeatureBlock[];
  stats: StatItem[];
  whyGrid: { eyebrow: string; h2: string; cards: WhyCard[] };
  comparison: {
    eyebrow: string;
    h2: string;
    body: string;
    header: { task: string; old: string; pts: string };
    rows: ComparisonRow[];
  };
  testimonial: {
    quote: string;
    author: { initials: string; name: string; role: string };
  };
  faq: { eyebrow: string; h2: string; items: FAQItem[] };
  demo: { eyebrow: string; h2: string; body: string };
  form: FormContent;
};

export type OnboardingStep = { day: string; name: string; text: string };

export type ProduktContent = {
  meta: MetaContent;
  hero: { eyebrow: string; h1: string; sub: string };
  sections: {
    disposition: { eyebrow: string; h2: string; body: string; cards: { title: string; body: string }[] };
    routen: FeatureBlock;
    fahrerApp: { eyebrow: string; h2: string; body: string; list: string[] };
    arbeitszeit: FeatureBlock;
  };
  onboarding: {
    eyebrow: string;
    h2: string;
    body: string;
    totalTime: string;
    steps: OnboardingStep[];
  };
  segments: {
    eyebrow: string;
    h2: string;
    cards: {
      id: string;
      title: string;
      body: string;
      bullets: string[];
    }[];
  };
  integrations: {
    eyebrow: string;
    h2: string;
    items: string[];
  };
  cta: { eyebrow: string; h2: string; body: string; primary: string; secondary: string };
};

export type PricingTier = {
  id: string;
  name: string;
  desc: string;
  price: string;
  per: string;
  bullets: string[];
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  isCallCTA?: boolean;
};

export type CompareCell = boolean | string;

export type PreiseContent = {
  meta: MetaContent;
  hero: { eyebrow: string; h1: string; sub: string };
  tiers: PricingTier[];
  note: string;
  compare: {
    eyebrow: string;
    h2: string;
    header: { funktion: string; starter: string; pro: string; enterprise: string };
    rows: { label: string; starter: CompareCell; pro: CompareCell; enterprise: CompareCell }[];
  };
  faq: { eyebrow: string; h2: string; items: FAQItem[] };
  cta: { eyebrow: string; h2: string; body: string; primary: string; secondary: string };
};

export type ImpressumContent = {
  meta: MetaContent;
  eyebrow: string;
  title: string;
  legalHeader: string;
  labels: {
    anbieter: string;
    anschrift: string;
    vertreten: string;
    kontakt: string;
    email: string;
    whatsapp: string;
  };
  responsibleTitle: string;
  responsibleBody: string;
  euTitle: string;
  euBody: string;
  consumerTitle: string;
  consumerBody: string;
  liabilityTitle: string;
  liabilityBody: string;
  copyrightTitle: string;
  copyrightBody: string;
  privacy: {
    title: string;
    sections: { h2: string; body: string; list?: string[] }[];
    stand: string;
  };
};

export type SharedContent = {
  nav: {
    produkt: string;
    preise: string;
    fragen: string;
    demo: string;
    phoneLabel: string;
  };
  footer: {
    tagline: string;
    columns: {
      title: string;
      links: { label: string; href: string; external?: boolean }[];
    }[];
    copyright: string;
    contact: string;
  };
  mobileCta: { call: string; demo: string };
  skipLink: string;
  languageSwitch: { label: string; de: string; en: string };
};

export type MockStrings = {
  dispatchBoard: {
    title: string;
    vehicle: string;
    queue: string;
    free: string;
    pause: string;
    driving: string;
  };
  routeMap: {
    title: string;
    total: string;
    saved: string;
    pickup: string;
    stops: string[];
  };
  timesheet: {
    title: string;
    date: string;
    driver: string;
    start: string;
    end: string;
    pause: string;
    net: string;
    status: string;
    approved: string;
    open: string;
    correction: string;
    sum: string;
  };
  fahrerApp: {
    title: string;
    order: string;
    live: string;
    pickup: string;
    destination: string;
    assign: string;
  };
  mini: {
    title: string;
    optimized: string;
  };
};
