'use client';

import { useEffect, useRef, useState } from 'react';

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      const t = e.target as HTMLElement;
      setActive(!!t.closest('a, button, [data-cursor]'));
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-white mix-blend-difference" />
      <div ref={ring} className={`pointer-events-none fixed left-0 top-0 z-[100] -ml-[18px] -mt-[18px] h-9 w-9 rounded-full border border-white/40 mix-blend-difference transition-[width,height,opacity] duration-300 ${active ? 'h-12 w-12 -ml-[24px] -mt-[24px] opacity-100' : 'opacity-60'}`} />
    </>
  );
}
