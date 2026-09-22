import type { MockStrings } from '@/content/types';

export function RouteMap({ s }: { s: MockStrings }) {
  const stopTitles = s.routeMap.stops;
  return (
    <div className="mock-window">
      <div className="mock-titlebar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="mock-title">{s.routeMap.title}</span>
      </div>
      <div className="mock-body" style={{ padding: 0, position: 'relative' }}>
        <svg
          viewBox="0 0 600 380"
          role="img"
          aria-label={s.routeMap.title}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <defs>
            <linearGradient id="cityFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e2126" />
              <stop offset="100%" stopColor="#17191d" />
            </linearGradient>
            <linearGradient id="routeStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b8aff" />
              <stop offset="100%" stopColor="#7170ff" />
            </linearGradient>
          </defs>

          <path
            d="M 60 80 Q 40 160 90 240 Q 130 310 220 320 Q 340 340 440 300 Q 540 260 550 180 Q 555 100 470 60 Q 350 30 250 55 Q 140 60 60 80 Z"
            fill="url(#cityFill)"
            stroke="#26292f"
            strokeWidth="1"
          />

          <g stroke="#2d3037" strokeWidth="1.5" fill="none" opacity="0.9">
            <path d="M 80 100 Q 200 130 400 110 T 540 150" />
            <path d="M 100 200 Q 250 210 400 220 T 540 240" />
            <path d="M 120 280 Q 250 290 380 290" />
            <path d="M 200 60 Q 220 180 240 320" />
            <path d="M 340 70 Q 340 200 340 330" />
            <path d="M 440 80 Q 460 200 450 300" />
          </g>

          <path
            d="M 130 280 Q 180 260 220 210 Q 260 170 320 190 Q 380 210 420 170 Q 470 130 510 130"
            fill="none"
            stroke="url(#routeStroke)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M 130 280 Q 200 300 300 300 Q 400 300 510 130"
            fill="none"
            stroke="#565a63"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />

          {[
            { x: 130, y: 280, i: 0 },
            { x: 220, y: 210, i: 1 },
            { x: 420, y: 170, i: 2 },
            { x: 510, y: 130, i: 3 },
          ].map(({ x, y, i }) => (
            <g key={i}>
              <title>{stopTitles[i]}</title>
              <circle cx={x} cy={y} r="14" fill="var(--bg-0)" stroke="#7170ff" strokeWidth="2" />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="#f7f8f8"
                fontSize="12"
                fontFamily="JetBrains Mono, SF Mono, ui-monospace, Menlo, monospace"
                fontWeight="600"
              >
                {i + 1}
              </text>
            </g>
          ))}

          <g transform="translate(24, 24)">
            <rect width="140" height="48" rx="8" fill="#101113" stroke="#26292f" />
            <text x="12" y="20" fontSize="10" fill="#7d8189" fontFamily="Inter, -apple-system, system-ui, sans-serif" letterSpacing="0.06em">{s.routeMap.total}</text>
            <text x="12" y="38" fontSize="14" fill="#f7f8f8" fontFamily="JetBrains Mono, SF Mono, ui-monospace, Menlo, monospace" fontWeight="600">44,2 km · 38 min</text>
          </g>

          <g transform="translate(430, 24)">
            <rect width="140" height="48" rx="8" fill="#101113" stroke="#26292f" />
            <text x="12" y="20" fontSize="10" fill="#7d8189" fontFamily="Inter, -apple-system, system-ui, sans-serif" letterSpacing="0.06em">{s.routeMap.saved}</text>
            <text x="12" y="38" fontSize="14" fill="#6ee7a3" fontFamily="JetBrains Mono, SF Mono, ui-monospace, Menlo, monospace" fontWeight="600">−12,8 km · −18 %</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
