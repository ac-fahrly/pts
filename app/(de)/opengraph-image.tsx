import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'PTS — Personentransportsoftware für Disposition & Arbeitszeit';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#08090a',
          color: '#f7f8f8',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -220,
            right: -160,
            width: 720,
            height: 720,
            background: 'radial-gradient(circle at center, rgba(113, 112, 255, 0.35), transparent 60%)',
            display: 'flex',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: '#7170ff', boxShadow: '0 0 24px #7170ff', display: 'flex' }} />
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}>PTS</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#8b8aff',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontWeight: 500,
            }}
          >
            Personentransportsoftware
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              maxWidth: 1040,
            }}
          >
            Disposition und Arbeitszeit. In einem System.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              color: '#b4b8bf',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Für Mietwagen, Taxi und Krankentransport. Ab 39 € pro Fahrzeug.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 16, color: '#7d8189', letterSpacing: '0.04em' }}>
          <span>pts.software</span>
          <span>·</span>
          <span>Made in Germany</span>
          <span>·</span>
          <span>DSGVO-konform</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
