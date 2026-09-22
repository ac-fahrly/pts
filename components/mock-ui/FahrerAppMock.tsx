import type { MockStrings } from '@/content/types';

export function FahrerAppMock({ s }: { s: MockStrings }) {
  return (
    <div
      style={{
        margin: '0 auto',
        width: 280,
        maxWidth: '100%',
        padding: 12,
        background: 'linear-gradient(180deg, var(--bg-2), var(--bg-1))',
        border: '1px solid var(--border-hi)',
        borderRadius: 32,
        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.55)',
      }}
    >
      <div
        style={{
          background: 'var(--bg-0)',
          borderRadius: 22,
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}
      >
        {/* status bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 16px 4px',
            fontSize: 11,
            color: 'var(--text-lo)',
          }}
        >
          <span className="num">14:30</span>
          <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-lo)' }} />
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-lo)' }} />
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-lo)' }} />
            <span
              style={{
                marginLeft: 6,
                padding: '1px 6px',
                border: '1px solid var(--text-lo)',
                borderRadius: 3,
                fontSize: 9,
              }}
            >
              84%
            </span>
          </span>
        </div>

        {/* header */}
        <div style={{ padding: '12px 16px 16px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: 'var(--text-lo)', letterSpacing: '0.04em' }}>
              {s.fahrerApp.title.toUpperCase()}
            </span>
            <span className="pill pill-live" style={{ fontSize: 10 }}>{s.fahrerApp.live}</span>
          </div>
          <div style={{ marginTop: 10, fontSize: 15, color: 'var(--text-hi)', fontWeight: 500 }}>
            {s.fahrerApp.order} <span className="num">#4820</span>
          </div>
        </div>

        {/* route */}
        <div style={{ padding: '16px', display: 'flex', gap: 10 }}>
          <div
            aria-hidden
            style={{
              width: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 6,
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                border: '2px solid var(--accent-hi)',
                background: 'var(--bg-0)',
                flexShrink: 0,
              }}
            />
            <span style={{ flex: 1, width: 2, background: 'var(--border-hi)', margin: '4px 0' }} />
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: 2,
                background: 'var(--accent-hi)',
                boxShadow: '0 0 12px var(--accent)',
                flexShrink: 0,
              }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <div style={{ fontSize: 10, color: 'var(--text-lo)' }}>{s.fahrerApp.pickup}</div>
              <div style={{ fontSize: 13, color: 'var(--text-hi)', fontWeight: 500 }}>München Hbf</div>
              <div className="num" style={{ fontSize: 11, color: 'var(--text-lo)' }}>14:30 · Bahnhofplatz 2</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'var(--text-lo)' }}>{s.fahrerApp.destination}</div>
              <div style={{ fontSize: 13, color: 'var(--text-hi)', fontWeight: 500 }}>Flughafen MUC</div>
              <div className="num" style={{ fontSize: 11, color: 'var(--text-lo)' }}>15:14 · Terminal 1</div>
            </div>
          </div>
        </div>

        {/* meta strip */}
        <div
          className="num"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 16px',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            fontSize: 12,
            color: 'var(--text-mid)',
          }}
        >
          <span>44,2 km</span>
          <span>38 min</span>
          <span style={{ color: '#6ee7a3' }}>−12,8 km</span>
        </div>

        {/* action */}
        <div style={{ padding: 12 }}>
          <button className="btn btn-primary" style={{ width: '100%' }}>
            {s.fahrerApp.assign}
          </button>
        </div>
      </div>
    </div>
  );
}
