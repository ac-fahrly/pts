export const site = {
  name: 'PTS',
  fullName: 'PTS — Personentransportsoftware',
  domain: 'https://pts.software',
  tagline: 'Disposition und Arbeitszeiterfassung für Personenbeförderung',
  whatsapp: '+49 171 841 1868',
  whatsappHref: 'https://wa.me/491718411868',
  email: 'support@fahrly.de',
  emailHref: 'mailto:support@fahrly.de',
  // Backward-compat aliases (buttons that formerly said "call" now open WhatsApp).
  phone: '+49 171 841 1868',
  phoneHref: 'https://wa.me/491718411868',
  legal: {
    company: 'Fahrly Solutions LLC',
    street: '1111b South Governors Avenue, STE 40935',
    postal: '19904',
    city: 'Dover',
    region: 'DE',
    country: 'US',
    countryName: 'United States',
    ceo: 'Adam Belamri',
  },
  pricing: {
    starter: 39,
    pro: 69,
    enterprise: null as null | number,
  },
} as const;
