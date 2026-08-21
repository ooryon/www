'use client';

import { useEffect, useState } from 'react';

export function ScrollRail({ sections }: { sections: { color: string }[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const p = scrollTop / docHeight;
      const idx = Math.min(sections.length - 1, Math.floor(p * sections.length));
      setActive(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections.length]);

  const color = sections[active]?.color || '#b5d6dc';

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden h-[60vh] -translate-y-1/2 flex-col md:flex">
      {/* Track */}
      <div className="h-full w-px bg-white/10" />
      {/* Fill */}
      <div
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transition-all duration-500 ease-out"
        style={{
          height: `${((active + 1) / sections.length) * 100}%`,
          backgroundColor: color,
          boxShadow: `0 0 6px ${color}40`,
        }}
      />
      {/* Indicator dot */}
      <div
        className="absolute left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full transition-all duration-500 ease-out"
        style={{
          top: `${((active + 1) / sections.length) * 100}%`,
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}80`,
        }}
      />
    </div>
  );
}
