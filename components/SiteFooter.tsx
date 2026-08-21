import Link from 'next/link';
import { Emblem } from './Emblem';
import { Icons } from './icons';

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t hairline bg-[#050607]/80 px-5 pb-10 pt-24 backdrop-blur-sm md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-14 md:flex-row">
        <div className="flex flex-col items-start gap-6">
          <Emblem className="h-16 w-24" />
          <p className="max-w-xs text-left text-sm leading-6 text-white/40">
            The bridge between computational intelligence and physical reality.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-[10px] tracking-tech text-white/30 transition-colors hover:text-white">TERMS</Link>
            <span className="text-white/20">/</span>
            <Link href="/privacy" className="text-[10px] tracking-tech text-white/30 transition-colors hover:text-white">PRIVACY</Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-20">
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-[10px] tracking-tech text-white/45 md:grid-cols-3">
            <Link href="/design" className="transition-colors hover:text-white">DESIGN</Link>
            <Link href="/simulate" className="transition-colors hover:text-white">SIMULATE</Link>
            <Link href="/physical-ai" className="transition-colors hover:text-white">PHYSICAL AI</Link>
            <Link href="/lab" className="transition-colors hover:text-white">LAB</Link>
            <Link href="/about" className="transition-colors hover:text-white">ABOUT</Link>
            <span className="text-white/30">© 2026 OORYON</span>
          </div>
          <div className="flex flex-col items-center gap-5">
            <span className="text-[10px] tracking-tech text-white/25">CONNECT</span>
            <div className="flex flex-col items-center gap-5">
              <Link
                href="https://www.linkedin.com/company/ooryon/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-white/30 transition-all duration-500 hover:text-white"
                aria-label="LinkedIn"
              >
                <Icons.linkedin className="h-4 w-4" />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[9px] tracking-tech opacity-0 transition-all duration-300 group-hover:opacity-100">
                  LINKEDIN
                </span>
              </Link>
              <Link
                href="https://x.com/ooryon"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-white/30 transition-all duration-500 hover:text-white"
                aria-label="X"
              >
                <Icons.x className="h-4 w-4" />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[9px] tracking-tech opacity-0 transition-all duration-300 group-hover:opacity-100">
                  X
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
