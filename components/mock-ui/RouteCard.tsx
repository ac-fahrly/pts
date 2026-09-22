import type { MockStrings } from '@/content/types';

export function RouteCard({ s }: { s: MockStrings }) {
  return (
    <div
      style={{
        background: 'var(--bg-1)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: 20,
        maxWidth: 340,
        fontSize: 13,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span className="num" style={{ color: 'var(--text-lo)' }}>{s.fahrerApp.order} #4820</span>
        <span className="pill pill-live">{s.fahrerApp.live}</span>
      </div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <div
          aria-hidden
          style={{
            width: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 6,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              border: '2px solid var(--accent-hi)',
              background: 'var(--bg-1)',
              flexShrink: 0,
            }}
          />
          <span style={{ flex: 1, width: 2, background: 'var(--border-hi)', margin: '4px 0' }} />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: 'var(--accent-hi)',
              boxShadow: '0 0 12px var(--accent)',
              flexShrink: 0,
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-lo)', marginBottom: 2 }}>{s.fahrerApp.pickup}</div>
            <div style={{ color: 'var(--text-hi)', fontWeight: 500 }}>München Hbf, Bahnhofplatz 2</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-lo)', marginBottom: 2 }}>{s.fahrerApp.destination}</div>
            <div style={{ color: 'var(--text-hi)', fontWeight: 500 }}>Flughafen MUC, Terminal 1</div>
          </div>
        </div>
      </div>
      <div
        className="num"
        style={{
          display: 'flex',
          gap: 16,
          padding: '12px 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          color: 'var(--text-mid)',
          fontSize: 12,
        }}
      >
        <span>14:30</span>
        <span>·</span>
        <span>44,2 km</span>
        <span>·</span>
        <span>38 min</span>
      </div>
      <button className="btn btn-primary" style={{ width: '100%', marginTop: 16 }}>
        {s.fahrerApp.assign}
      </button>
    </div>
  );
}
