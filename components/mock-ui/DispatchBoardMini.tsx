import type { MockStrings } from '@/content/types';

const rows = [
  { id: 4820, route: 'Hbf → Flughafen',      km: '44,2 km', min: '38 min', save: '−8 min',  tone: 'ok' as const },
  { id: 4821, route: 'Hilton → Kongress',    km: '11,4 km', min: '14 min', save: '−3 min',  tone: 'ok' as const },
  { id: 4822, route: 'BMW HQ → Airport',     km: '39,4 km', min: '35 min', save: '−12 min', tone: 'ok' as const },
  { id: 4823, route: 'Klinik → Domizil',     km: '8,7 km',  min: '12 min', save: '±0 min',  tone: 'muted' as const },
  { id: 4824, route: 'Rundfahrt Innenstadt', km: '14,6 km', min: '52 min', save: '−6 min',  tone: 'ok' as const },
];

export function DispatchBoardMini({ s }: { s: MockStrings }) {
  return (
    <div className="mock-window">
      <div className="mock-titlebar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="mock-title">{s.mini.title}</span>
      </div>
      <div className="mock-body dispatch-mini">
        {rows.map((r) => (
          <div key={r.id} className="dispatch-mini-row">
            <span className="num dispatch-mini-id">#{r.id}</span>
            <span className="dispatch-mini-route">{r.route}</span>
            <span className="num dispatch-mini-cell dispatch-mini-km">{r.km}</span>
            <span className="num dispatch-mini-cell dispatch-mini-min">{r.min}</span>
            <span
              className="num dispatch-mini-save"
              style={{ color: r.tone === 'ok' ? '#6ee7a3' : 'var(--text-lo)' }}
            >
              {r.save}
            </span>
          </div>
        ))}
        <div className="dispatch-mini-footer">
          <span>{s.mini.optimized}</span>
          <span className="num" style={{ color: '#6ee7a3' }}>−29 min · −12,8 km</span>
        </div>
      </div>
    </div>
  );
}
