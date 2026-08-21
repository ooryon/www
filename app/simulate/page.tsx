'use client';

import { useEffect, useState } from 'react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { VideoScene } from '@/components/VideoScene';
import { ScrollRail } from '@/components/ScrollRail';
import { Atmosphere } from '@/components/Atmosphere';
import { useScrollProgress } from '@/hooks/use-scroll';

type SimType = 'airflow' | 'structural' | 'thermal' | 'motion' | 'impact';

const sims: { id: string; type: SimType; label: string; title: string; desc: string; varLabel: string; unit: string; factor: number }[] = [
  { id: '01', type: 'airflow', label: 'AERODYNAMICS', title: 'AIR MOVES THROUGH IT.', desc: 'Fluid lines wrap the body. Pressure differentials emerge across every surface.', varLabel: 'VELOCITY', unit: 'M/S', factor: 1.2 },
  { id: '02', type: 'structural', label: 'STRUCTURAL', title: 'FORCE FINDS THE WEAK POINT.', desc: 'Stress propagates through the lattice. The structure reveals where it will fail.', varLabel: 'LOAD', unit: 'KN', factor: 4.5 },
  { id: '03', type: 'thermal', label: 'THERMAL', title: 'HEAT MOVES THROUGH MATTER.', desc: 'Energy migrates across the material. Hot zones expand. Cold zones resist.', varLabel: 'TEMPERATURE', unit: '°C', factor: 8.5 },
  { id: '04', type: 'motion', label: 'MOTION', title: 'IT TRAVELS A PATH.', desc: 'Kinematics are traced through a simulated environment. Every joint is predicted.', varLabel: 'ANGULAR VEL', unit: 'RAD/S', factor: 0.8 },
  { id: '05', type: 'impact', label: 'IMPACT', title: 'IT ABSORBS A COLLISION.', desc: 'Energy radiates from the point of contact. The structure deforms and recovers.', varLabel: 'ENERGY', unit: 'KJ', factor: 3.2 },
];

const simVideos = ['/assets/tunnel.MP4', '/assets/simulate-one.MP4', '/assets/simulate-two.MP4', '/assets/simulate-three.MP4'];

function simForProgress(p: number): number {
  return Math.min(sims.length - 1, Math.floor(p * sims.length * 0.99));
}

export default function SimulatePage() {
  const progress = useScrollProgress();
  const [idx, setIdx] = useState(0);
  const [variable, setVariable] = useState(68);

  useEffect(() => { setIdx(simForProgress(progress)); }, [progress]);

  const sim = sims[idx];
  const intensity = 0.4 + (variable / 100) * 0.6;
  const velocity = 0.3 + (variable / 100) * 0.7;
  const liveValue = (variable * sim.factor).toFixed(2);

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
         {/* Fixed simulation stage */}
        <div className="fixed inset-0 z-0">
          <VideoScene mode="solid" videos={simVideos} scrollProgress={progress} />
          {/* Edge gradients to blend video into margins */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
        </div>

        {/* Scroll narrative */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="flex min-h-screen items-end px-5 pb-16 pt-36 md:px-10 md:pb-24">
            <div className="relative z-10">
              <h1 className="font-display max-w-5xl text-[14vw] leading-[.76] tracking-[-.1em] md:text-[11vw]">
                BEFORE IT<br />EXISTS, WE TEST IT.
              </h1>
            </div>
          </section>

          {/* Simulation scenes */}
          {sims.map((s) => (
            <section key={s.label} className="relative flex min-h-screen items-end px-5 pb-24 md:px-10 md:pb-32">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-transparent" />
              <div className="relative z-10 w-full">
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[10px] tracking-tech text-white/45">{s.label}</span>
                  <div className="h-px w-12 bg-ice/40" />
                </div>
                <h2 className="font-display max-w-3xl text-5xl leading-[.9] tracking-[-.07em] text-white md:text-7xl">{s.title}</h2>
                <p className="mt-6 max-w-md text-sm leading-6 text-white/45">{s.desc}</p>
              </div>
            </section>
          ))}

          {/* Live variable panel - right middle */}
          <div
            className="fixed right-6 top-1/2 z-30 -translate-y-1/2 md:right-10 transition-all duration-700"
            style={{
              opacity: progress > 0.05 && progress < 0.75 ? 1 : 0,
              pointerEvents: progress > 0.05 && progress < 0.75 ? 'auto' : 'none',
            }}
          >
            <div className="flex flex-col items-end gap-4 border border-white/[.06] bg-[#050607]/30 px-5 py-5 backdrop-blur-xl md:px-6 md:py-6">
              <div className="flex flex-col gap-5">
                <div>
                  <div className="mb-1 text-[9px] tracking-tech text-white/25">{sim.varLabel}</div>
                  <div className="font-display text-base tracking-[-.04em] text-white/80 md:text-lg">
                    {liveValue} <span className="text-[10px] tracking-normal text-white/25">{sim.unit}</span>
                  </div>
                </div>
                <div className="h-px w-full bg-white/[.06]" />
                <div>
                  <div className="mb-1 text-[9px] tracking-tech text-white/25">CONVERGENCE</div>
                  <div className="font-display text-base tracking-[-.04em] text-white/80 md:text-lg">
                    99.{Math.max(10, 99 - Math.round(variable / 12))}<span className="text-[10px] tracking-normal text-white/25">%</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="mb-1 text-[9px] tracking-tech text-white/25">SOLVER</div>
                  <div className="font-display text-base tracking-[-.04em] text-ice/70 md:text-lg">ACTIVE</div>
                </div>
              </div>
              <div data-cursor className="w-24 md:w-28">
                <input
                  className="sim-slider h-px w-full appearance-none bg-white/15"
                  type="range"
                  min="20"
                  max="120"
                  value={variable}
                  onChange={(e) => setVariable(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <section className="relative px-5 py-40 md:px-10 md:py-64">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(77,129,137,.1),transparent_46%)]" />
            <div className="relative mx-auto max-w-[1600px]">
              <p className="mb-12 text-[10px] tracking-tech text-white/40">A WORLD IN MOTION</p>
              <h2 className="font-display max-w-5xl text-5xl leading-[.9] tracking-[-.07em] md:text-8xl">
                The physical world has rules. We make them legible.
              </h2>
              <p className="mt-12 max-w-xl text-base leading-7 text-white/45">
                A digital twin is more than a visual replica. It is a living model that lets every force, surface, temperature, and decision be tested before it meets matter.
              </p>
            </div>
          </section>

          <SiteFooter />
        </div>

        {/* Sim type rail */}
      </main>
    </Atmosphere>
  );
}
