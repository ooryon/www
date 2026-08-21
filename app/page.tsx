'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { VideoScene } from '@/components/VideoScene';
import { ScrollRail } from '@/components/ScrollRail';
import { Atmosphere } from '@/components/Atmosphere';
import { Emblem } from '@/components/Emblem';
import { useScrollProgress } from '@/hooks/use-scroll';
import type { ArtifactMode } from '@/components/VideoScene';

const scenes = [
  { label: 'THE OBJECT', title: 'A POSSIBILITY.', desc: 'Every object begins as a set of constraints.' },
  { label: 'THE GEOMETRY', title: 'FORM EMERGES.', desc: 'Intelligence resolves constraints into physical geometry.' },
  { label: 'THE SIMULATION', title: 'IT MEETS THE WORLD.', desc: 'Forces, flows, and failure modes are tested before matter exists.' },
  { label: 'THE INTELLIGENCE', title: 'IT BEGINS TO MOVE.', desc: 'The model becomes a system that perceives, reasons, and acts.' },
  { label: 'THE REALITY', title: 'MADE PHYSICAL.', desc: 'What was computed is now built.' },
];

function modeForProgress(p: number): ArtifactMode {
  if (p < 0.18) return 'wireframe';
  if (p < 0.36) return 'mesh';
  if (p < 0.54) return 'solid';
  if (p < 0.72) return 'optimized';
  return 'product';
}

export default function Home() {
  const progress = useScrollProgress();
  const mode = modeForProgress(progress);
  const [sceneIdx, setSceneIdx] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSceneIdx(Math.min(scenes.length - 1, Math.floor(progress * scenes.length * 0.99)));
  }, [progress]);

  return (
    <Atmosphere>
      <SiteNav />
      <main className="relative">
        {/* <ScrollRail
          sections={[
            { color: '#b5d6dc' },
            { color: '#7fa8af' },
            { color: '#5a9098' },
            { color: '#3d7880' },
            { color: '#2a5f66' },
          ]}
        /> */}
        {/* Fixed 3D stage */}
        <div className="fixed inset-0 z-0">
          <VideoScene
            mode={mode}
            params={{ aero: 0.6, weight: 0.5, strength: 0.7, size: 0.5 }}
            scrollProgress={progress}
            autoRotate
          />
        </div>

        {/* Scroll narrative */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="flex min-h-screen items-end px-5 pb-16 pt-32 md:px-10 md:pb-24">
            <div className="relative z-10 w-full">
              <div className="group">
                <h1 
                  className="font-display text-center text-[19vw] font-semibold leading-[.72] tracking-[-.1em] md:text-[17vw] flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ 
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 60%)', 
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 60%)' 
                  }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent opacity-15 mix-blend-overlay -mr-[0.18em]">
                    OO
                  </span>
                  <Emblem className="h-[19vw] w-auto opacity-15 mix-blend-overlay md:h-[17vw] relative top-[0.01em]" />
                  <span className="bg-gradient-to-r from-transparent via-white to-black bg-clip-text text-transparent opacity-15 mix-blend-overlay -ml-[0.18em]">
                    ON
                  </span>
                </h1>
              </div>
              <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <p className="max-w-[480px] text-2xl leading-[1.05] tracking-[-.04em] text-white/85 md:text-5xl">
                  DIGITAL MINDS,<br />PHYSICAL HANDS.
                </p>
                <p className="max-w-[240px] text-xs leading-5 text-white/40">
                  We design, simulate, and build systems that connect intelligence to the physical world.
                </p>
              </div>
            </div>
          </section>

          {/* Scene spacers - each one drives the artifact forward */}
          {scenes.map((scene, i) => (
            <section key={scene.label} className="relative flex min-h-screen items-end px-5 pb-20 md:px-10 md:pb-28">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-transparent" />
              <div className="relative z-10 w-full">
              <div className="mb-16 flex items-center gap-4">
                <span className="text-[10px] tracking-tech text-white/45">{scene.label}</span>
              </div>
                <h2 className="font-display max-w-3xl text-5xl leading-[.9] tracking-[-.07em] text-white md:text-8xl">
                  {scene.title}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-6 text-white/45">{scene.desc}</p>
              </div>
            </section>
          ))}

          {/* Pillars */}
          <section className="relative border-t hairline bg-[#050607]/80 backdrop-blur-sm">
            <div className="mx-auto max-w-[1600px]">
              {[
                ['DESIGN', 'Possibility becomes form.', '/design'],
                ['SIMULATE', 'Form meets the world.', '/simulate'],
                ['PHYSICAL AI', 'Intelligence begins to move.', '/physical-ai'],
                ['LAB', 'The model becomes matter.', '/lab'],
              ].map(([title, desc, href]) => (
                <Link
                  href={href}
                  key={title}
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b hairline px-5 py-9 transition-colors last:border-0 hover:bg-white/[.02] md:grid-cols-[1fr_1fr_auto] md:px-10 md:py-12"
                >
                  <span className="font-display text-4xl tracking-[-.06em] md:text-7xl">{title}</span>
                  <span className="hidden text-xs text-white/40 md:block">{desc}</span>
                  <span className="text-[10px] tracking-tech text-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">learn more</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Manifesto */}
          <section className="relative px-5 py-40 md:px-10 md:py-64">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(93,143,151,.1),transparent_46%)]" />
            <div className="relative mx-auto max-w-[1600px]">
              <div className="grid grid-cols-1 gap-px md:grid-cols-2">
                {/* Left card */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-8 py-12 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:border-l md:border-t">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <p className="font-display text-2xl leading-[1.1] tracking-[-.03em] text-white/70 transition-all duration-500 group-hover:text-white md:text-4xl md:leading-[1.05]">
                    Algorithms have weight.
                  </p>
                  <div className="mt-8 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Right card */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-8 py-12 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:border-l md:border-t">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <p className="font-display text-2xl leading-[1.1] tracking-[-.03em] text-white/70 transition-all duration-500 group-hover:text-white md:text-4xl md:leading-[1.05]">
                    Physics is the proof.
                  </p>
                  <div className="mt-8 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </div>
          </section>

          <SiteFooter />
        </div>

        {/* Progress rail */}
      </main>
    </Atmosphere>
  );
}
