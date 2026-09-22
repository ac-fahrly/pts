import type { MockStrings } from '@/content/types';
import { FahrerAppMock } from './FahrerAppMock';

const vehicles = [
  { plate: 'M-AB 1234', driver: 'A. Weber', status: 'ok' as const },
  { plate: 'M-CD 5678', driver: 'F. Yılmaz', status: 'ok' as const },
  { plate: 'M-EF 9012', driver: 'P. Kowalski', status: 'live' as const },
  { plate: 'M-GH 3456', driver: 'M. Schmitt', status: 'open' as const },
  { plate: 'M-IJ 7890', driver: 'E. Demir', status: 'ok' as const },
];

const slots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];

const trips: Array<[number, number, number, string, 'accent' | 'muted' | 'conflict']> = [
  [0, 0, 2, 'Hbf → Flughafen', 'accent'],
  [0, 3, 2, 'Marienplatz → Messe', 'accent'],
  [1, 1, 2, 'Airport → Hilton', 'accent'],
  [1, 4, 1, 'Hotel → Kongress', 'muted'],
  [2, 0, 3, 'Rundfahrt Innenstadt', 'accent'],
  [2, 4, 2, 'Hotel → Airport', 'accent'],
  [3, 2, 3, 'Klinik → Domizil', 'muted'],
  [4, 1, 1, 'Werkstatt', 'conflict'],
  [4, 3, 2, 'BMW HQ → Airport', 'accent'],
];

export function DispatchBoard({ s }: { s: MockStrings }) {
  const statusLabel = (st: 'ok' | 'live' | 'open') =>
    st === 'ok' ? s.dispatchBoard.free : st === 'live' ? s.dispatchBoard.driving : s.dispatchBoard.pause;

  return (
    <>
      <div className="mock-desktop">
        <div className="mock-window">
          <div className="mock-titlebar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="mock-title">{s.dispatchBoard.title}</span>
          </div>
          <div className="mock-body mock-scroll" style={{ padding: 0 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 200px', gap: 0, minWidth: 860 }}>
              <div style={{ borderRight: '1px solid var(--border)' }}>
                <div style={headerCell}>{s.dispatchBoard.vehicle}</div>
                {vehicles.map((v) => (
                  <div key={v.plate} style={vehicleRow}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={avatar}>{v.driver.split(' ')[0][0]}{v.driver.split(' ')[1][0]}</span>
                      <div>
                        <div className="num" style={{ fontSize: 12, color: 'var(--text-hi)', fontWeight: 500 }}>{v.plate}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-lo)' }}>{v.driver}</div>
                      </div>
                    </div>
                    <span className={`pill pill-${v.status === 'ok' ? 'ok' : v.status === 'live' ? 'live' : 'open'}`}>
                      {statusLabel(v.status)}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ position: 'relative', borderRight: '1px solid var(--border)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${slots.length}, 1fr)`, borderBottom: '1px solid var(--border)' }}>
                  {slots.map((t) => (
                    <div key={t} className="num" style={{ padding: '10px 12px', fontSize: 11, color: 'var(--text-lo)', borderRight: '1px solid var(--border)' }}>
                      {t}
                    </div>
                  ))}
                </div>
                <div style={{ position: 'relative' }}>
                  {vehicles.map((v, i) => (
                    <div key={v.plate} style={{ display: 'grid', gridTemplateColumns: `repeat(${slots.length}, 1fr)`, height: 62, borderBottom: i === vehicles.length - 1 ? 'none' : '1px solid var(--border)' }}>
                      {slots.map((_, j) => (
                        <div key={j} style={{ borderRight: '1px solid var(--border)' }} />
                      ))}
                    </div>
                  ))}
                  {trips.map(([row, start, dur, label, tone], idx) => {
                    const top = row * 62 + 8;
                    const left = `calc(${(start / slots.length) * 100}% + 6px)`;
                    const width = `calc(${(dur / slots.length) * 100}% - 12px)`;
                    return (
                      <div
                        key={idx}
                        style={{
                          position: 'absolute',
                          top,
                          left,
                          width,
                          height: 46,
                          borderRadius: 6,
                          padding: '6px 10px',
                          fontSize: 11,
                          color: tone === 'muted' ? 'var(--text-mid)' : tone === 'conflict' ? '#fca5a5' : '#fff',
                          background:
                            tone === 'accent'
                              ? 'linear-gradient(135deg, rgba(113,112,255,0.9), rgba(113,112,255,0.7))'
                              : tone === 'conflict'
                              ? 'rgba(248,113,113,0.16)'
                              : 'var(--bg-3)',
                          border:
                            tone === 'accent'
                              ? '1px solid var(--accent-hi)'
                              : tone === 'conflict'
                              ? '1px solid rgba(248,113,113,0.4)'
                              : '1px solid var(--border-hi)',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          lineHeight: 1.2,
                        }}
                      >
                        <div style={{ fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</div>
                        <div className="num" style={{ opacity: 0.85, fontSize: 10 }}>
                          #{4820 + idx}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <div style={headerCell}>{s.dispatchBoard.queue} <span className="num" style={{ color: 'var(--text-lo)' }}>(3)</span></div>
                {queue.map((q, i) => (
                  <div key={i} style={{ padding: '12px 14px', borderBottom: i === queue.length - 1 ? 'none' : '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <span className="num" style={{ fontSize: 11, color: 'var(--text-lo)' }}>#{q.id}</span>
                      <span className="num" style={{ fontSize: 11, color: 'var(--text-hi)' }}>{q.time}</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-hi)', lineHeight: 1.35 }}>{q.route}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-lo)', marginTop: 4 }}>
                      <span className="num">{q.km}</span> · {q.kunde}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mock-mobile">
        <FahrerAppMock s={s} />
      </div>
    </>
  );
}

const headerCell: React.CSSProperties = {
  padding: '10px 14px',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--text-lo)',
  borderBottom: '1px solid var(--border)',
  background: 'var(--bg-2)',
};

const vehicleRow: React.CSSProperties = {
  height: 62,
  padding: '0 14px',
  borderBottom: '1px solid var(--border)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const avatar: React.CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: 6,
  background: 'var(--bg-3)',
  border: '1px solid var(--border-hi)',
  color: 'var(--text-hi)',
  fontSize: 11,
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const queue = [
  { id: 4831, time: '14:30', route: 'Hbf → BMW Werk 1', km: '18,2 km', kunde: 'BMW Group' },
  { id: 4832, time: '15:15', route: 'Hilton → Airport MUC', km: '39,4 km', kunde: 'Allianz' },
  { id: 4833, time: '16:00', route: 'Airport → Marienplatz', km: '41,1 km', kunde: 'Walk-In' },
];
