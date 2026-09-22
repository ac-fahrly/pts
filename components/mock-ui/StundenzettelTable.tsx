import type { MockStrings } from '@/content/types';

const rows = [
  { datum: '16.09.', fahrer: 'A. Weber',     start: '06:30', ende: '15:00', pause: '00:30', netto: '08:00', status: 'ok' as const },
  { datum: '16.09.', fahrer: 'F. Yılmaz',    start: '07:15', ende: '16:45', pause: '00:45', netto: '08:45', status: 'ok' as const },
  { datum: '16.09.', fahrer: 'P. Kowalski',  start: '05:45', ende: '14:30', pause: '00:30', netto: '08:15', status: 'open' as const },
  { datum: '16.09.', fahrer: 'M. Schmitt',   start: '13:00', ende: '22:15', pause: '00:45', netto: '08:30', status: 'ok' as const },
  { datum: '16.09.', fahrer: 'E. Demir',     start: '06:00', ende: '15:45', pause: '00:30', netto: '09:15', status: 'cor' as const },
];

export function StundenzettelTable({ s }: { s: MockStrings }) {
  const statusLabel = (st: 'ok' | 'open' | 'cor') =>
    st === 'ok' ? s.timesheet.approved : st === 'open' ? s.timesheet.open : s.timesheet.correction;

  return (
    <div className="mock-window">
      <div className="mock-titlebar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="mock-title">{s.timesheet.title}</span>
      </div>

      {/* Desktop table */}
      <div className="mock-body mock-desktop" style={{ padding: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--bg-2)' }}>
              <th style={th}>{s.timesheet.date}</th>
              <th style={th}>{s.timesheet.driver}</th>
              <th style={{ ...th, textAlign: 'right' }}>{s.timesheet.start}</th>
              <th style={{ ...th, textAlign: 'right' }}>{s.timesheet.end}</th>
              <th style={{ ...th, textAlign: 'right' }}>{s.timesheet.pause}</th>
              <th style={{ ...th, textAlign: 'right' }}>{s.timesheet.net}</th>
              <th style={{ ...th, textAlign: 'right' }}>{s.timesheet.status}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                <td className="num" style={td}>{r.datum}</td>
                <td style={{ ...td, color: 'var(--text-hi)' }}>{r.fahrer}</td>
                <td className="num" style={{ ...td, textAlign: 'right' }}>{r.start}</td>
                <td className="num" style={{ ...td, textAlign: 'right' }}>{r.ende}</td>
                <td className="num" style={{ ...td, textAlign: 'right', color: 'var(--text-lo)' }}>{r.pause}</td>
                <td className="num" style={{ ...td, textAlign: 'right', color: 'var(--text-hi)', fontWeight: 500 }}>{r.netto}</td>
                <td style={{ ...td, textAlign: 'right' }}>
                  <span className={`pill pill-${r.status}`}>{statusLabel(r.status)}</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} style={{ ...td, color: 'var(--text-lo)', fontSize: 12 }}>{s.timesheet.sum}</td>
              <td className="num" style={{ ...td, textAlign: 'right', color: 'var(--text-hi)', fontWeight: 500 }}>42:45</td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Mobile card list */}
      <div className="mock-body mock-mobile" style={{ padding: 12 }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              padding: '12px 14px',
              borderRadius: 8,
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              marginBottom: 8,
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ color: 'var(--text-hi)', fontSize: 14, fontWeight: 500 }}>{r.fahrer}</div>
              <div
                className="num"
                style={{ marginTop: 4, fontSize: 12, color: 'var(--text-lo)', display: 'flex', gap: 8 }}
              >
                <span>{r.datum}</span>
                <span>·</span>
                <span>{r.start} → {r.ende}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="num" style={{ color: 'var(--text-hi)', fontWeight: 500 }}>{r.netto}</div>
              <span className={`pill pill-${r.status}`} style={{ marginTop: 4, fontSize: 10 }}>
                {statusLabel(r.status)}
              </span>
            </div>
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 4px',
            fontSize: 12,
            color: 'var(--text-lo)',
          }}
        >
          <span>{s.timesheet.sum}</span>
          <span className="num" style={{ color: 'var(--text-hi)' }}>42:45</span>
        </div>
      </div>
    </div>
  );
}

const th: React.CSSProperties = {
  padding: '10px 16px',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--text-lo)',
  textAlign: 'left',
  borderBottom: '1px solid var(--border)',
};

const td: React.CSSProperties = {
  padding: '12px 16px',
  color: 'var(--text-mid)',
};
