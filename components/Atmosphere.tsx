'use client';

import { ReactNode, useEffect, useRef } from 'react';

interface AtmosphereProps {
  children: ReactNode;
  /** Ordered color stops the environment cycles through as the user scrolls. */
  stops?: string[];
}

const DEFAULT_STOPS = [
  'rgba(5,6,7,1)',            // deep black
  'rgba(10,14,16,1)',          // cool black
  'rgba(18,28,32,1)',          // icy blue glow
  'rgba(12,16,18,1)',          // cool white
  'rgba(5,6,7,1)',             // deep black
  'rgba(16,18,16,1)',          // warmer metallic
  'rgba(5,6,7,1)',             // black
];

export function Atmosphere({ children, stops = DEFAULT_STOPS }: AtmosphereProps) {
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (overlay.current) {
        const idx = p * (stops.length - 1);
        const a = Math.floor(idx);
        const b = Math.min(stops.length - 1, a + 1);
        const t = idx - a;
        overlay.current.style.background = mixColor(stops[a], stops[b], t);
      }
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [stops]);

  return (
    <div className="relative">
      <div ref={overlay} className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-200" style={{ background: stops[0] }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function parseRGBA(c: string): [number, number, number, number] {
  const m = c.match(/rgba?\(([^)]+)\)/);
  if (!m) return [0, 0, 0, 1];
  const parts = m[1].split(',').map(s => parseFloat(s.trim()));
  return [parts[0] || 0, parts[1] || 0, parts[2] || 0, parts[3] ?? 1];
}

function mixColor(a: string, b: string, t: number): string {
  const [r1, g1, b1, a1] = parseRGBA(a);
  const [r2, g2, b2, a2] = parseRGBA(b);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const bl = Math.round(b1 + (b2 - b1) * t);
  const al = a1 + (a2 - a1) * t;
  return `rgba(${r},${g},${bl},${al})`;
}
