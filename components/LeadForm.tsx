import type { FormContent, Lang } from '@/content/types';

const FORM_ENDPOINT = 'https://formspree.io/f/xwlpeobk';

export function LeadForm({ c, lang, id = 'demo' }: { c: FormContent; lang: Lang; id?: string }) {
  const thanksPath = lang === 'de' ? '/danke' : '/thanks';
  return (
    <form id={id} className="lead-form" action={FORM_ENDPOINT} method="post" aria-label={c.submit}>
      <input type="hidden" name="_subject" value={c.subject} />
      <input type="hidden" name="_next" value={thanksPath} />
      <input type="hidden" name="_language" value={lang} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

      <div className="field">
        <label htmlFor="name">{c.labels.name}</label>
        <input id="name" name="name" type="text" required placeholder={c.placeholders.name} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="firma">{c.labels.firma}</label>
        <input id="firma" name="firma" type="text" required placeholder={c.placeholders.firma} autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="email">{c.labels.email}</label>
        <input id="email" name="email" type="email" required placeholder={c.placeholders.email} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="telefon">{c.labels.telefon}</label>
        <input id="telefon" name="telefon" type="tel" placeholder={c.placeholders.telefon} autoComplete="tel" />
      </div>
      <div className="field full">
        <label htmlFor="fahrzeuge">{c.labels.fahrzeuge}</label>
        <select id="fahrzeuge" name="fahrzeuge" defaultValue="">
          <option value="" disabled>{c.select}</option>
          {c.vehicleRanges.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="nachricht">{c.labels.nachricht}</label>
        <textarea id="nachricht" name="nachricht" rows={3} placeholder={c.placeholders.nachricht} />
      </div>
      <div className="full" style={{ marginTop: 6 }}>
        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
          {c.submit}
        </button>
      </div>
      <p className="full" style={{ fontSize: 12, color: 'var(--text-lo)', marginTop: 4 }}>
        {c.disclaimer}
      </p>
    </form>
  );
}
