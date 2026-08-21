'use client';

import Link from 'next/link';
import { Emblem } from './Emblem';
import { useEffect, useState } from 'react';

const links = [
  ['DESIGN', '/design'],
  ['SIMULATE', '/simulate'],
  ['PHYSICAL AI', '/physical-ai'],
  ['LAB', '/lab'],
];

export function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > last && y > 300);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'bg-[#050607]/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 md:py-6">
        <Link href="/" className="flex items-center">
          <Emblem className="h-10 w-14" />
        </Link>
        <div className="hidden items-center gap-10 text-[10px] tracking-tech text-white/55 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="transition-colors hover:text-white">{label}</Link>)}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-[10px] tracking-tech text-white/55 transition-colors hover:text-white">ABOUT</Link>
        </div>
      </nav>
    </header>
  );
}
