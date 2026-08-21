'use client';

import { useRef, useState } from 'react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { VideoScene } from '@/components/VideoScene';
import { ScrollRail } from '@/components/ScrollRail';
import { Atmosphere } from '@/components/Atmosphere';
import { useScrollProgress } from '@/hooks/use-scroll';
import type { ArtifactMode } from '@/components/VideoScene';

const designVideos = ['/assets/corryon.MP4', '/assets/design-one.MP4'];

const stages = [
  { id: '01', label: 'GEOMETRY', title: 'A LINE APPEARS.', desc: 'The object begins as a single geometric constraint in darkness.' },
  { id: '02', label: 'MATERIAL', title: 'SURFACES FORM.', desc: 'Wireframe resolves into a continuous surface mesh.' },
  { id: '03', label: 'STRUCTURE', title: 'MATTER IS CHOSEN.', desc: 'The mesh becomes solid. Material properties are assigned.' },
  { id: '04', label: 'FORM', title: 'IT OPTIMIZES ITSELF.', desc: 'Structural intelligence removes what is unnecessary.' },
  { id: '05', label: 'PRODUCT', title: 'A PRODUCT EXISTS.', desc: 'The computed form becomes a manufacturable object.' },
];

function modeForProgress(p: number): ArtifactMode {
  if (p < 0.16) return 'wireframe';
  if (p < 0.32) return 'mesh';
  if (p < 0.48) return 'solid';
  if (p < 0.64) return 'optimized';
  return 'product';
}

export default function DesignPage() {
  const progress = useScrollProgress();
  const mode = modeForProgress(progress);
  const [aero, setAero] = useState(0.6);
  const [weight, setWeight] = useState(0.5);
  const [strength, setStrength] = useState(0.7);
  const [size, setSize] = useState(0.5);
  const [stageIdx, setStageIdx] = useState(0);
  const paramsRef = useRef<HTMLDivElement>(null);

  const stageIdxFromProgress = Math.min(stages.length - 1, Math.floor(progress * stages.length * 0.99));
  if (stageIdxFromProgress !== stageIdx) setStageIdx(stageIdxFromProgress);

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
            params={{ aero, weight, strength, size }}
            scrollProgress={progress}
            autoRotate
            videos={designVideos}
          />
        </div>

        {/* Floating parameter panel - appears after geometry stage */}
        <div
          ref={paramsRef}
          data-cursor
          className={`fixed left-5 top-1/2 z-30 w-[230px] -translate-y-1/2 border-l hairline pl-5 transition-opacity duration-700 md:left-10 md:w-[260px] ${progress > 0.08 && progress < 0.7 ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <p className="mb-7 text-[10px] tracking-tech text-white/40">PARAMETRIC CONTROL</p>
          <ParamSlider label="AERODYNAMICS" value={aero} onChange={setAero} />
          <ParamSlider label="WEIGHT" value={weight} onChange={setWeight} />
          <ParamSlider label="STRENGTH" value={strength} onChange={setStrength} />
          <ParamSlider label="SIZE" value={size} onChange={setSize} />
          <div className="mt-6 border-t hairline pt-4 text-[10px] leading-5 tracking-tech text-white/35">
            LIVE SOLUTION<br />
            <span className="text-ice">{(weight * 18.4 + aero * 12.2).toFixed(1)} KG</span> / <span className="text-ice">{Math.round((1 - strength) * 100)}% VOID</span>
          </div>
        </div>

        {/* Scroll narrative */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="flex min-h-screen items-end px-5 pb-16 pt-36 md:px-10 md:pb-24">
            <div className="relative z-10">
              <h1 className="font-display max-w-5xl text-[14vw] leading-[.76] tracking-[-.1em] md:text-[11vw]">
                DESIGN WHAT<br />DOESN&apos;T EXIST.
              </h1>
            </div>
          </section>

          {/* Stages */}
          {stages.map((stage) => (
            <section key={stage.label} className="relative flex min-h-[90vh] items-end px-5 pb-20 md:px-10 md:pb-28">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-transparent" />
              <div className="relative z-10 ml-auto max-w-xl text-right md:mr-20">
                <div className="mb-6 flex items-center justify-end gap-4">
                  <span className="text-[10px] tracking-tech text-white/45">{stage.label}</span>
                  <div className="h-px w-12 bg-ice/40" />
                </div>
                <h2 className="font-display text-5xl leading-[.9] tracking-[-.07em] text-white md:text-7xl">{stage.title}</h2>
                <p className="mt-6 text-sm leading-6 text-white/45">{stage.desc}</p>
              </div>
            </section>
          ))}

          {/* Closing statement */}
          <section className="relative px-5 py-40 md:px-10 md:py-64">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(93,143,151,.1),transparent_46%)]" />
            <div className="relative mx-auto max-w-[1600px]">
              <h2 className="font-display max-w-4xl text-5xl leading-[.9] tracking-[-.07em] md:text-8xl">
                Every object begins as a possibility.
              </h2>
              <p className="mt-12 max-w-md text-base leading-7 text-white/45">
                We treat constraints as a material. Geometry is not drawn, it is resolved through physics, purpose, and the intelligence to find what no one has made before.
              </p>
            </div>
          </section>

          <SiteFooter />
        </div>

        {/* Stage rail */}
      </main>
    </Atmosphere>
  );
}

function ParamSlider({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <label className="block border-b hairline py-4" data-cursor>
      <span className="mb-2 flex justify-between text-[10px] tracking-tech text-white/55">
        <span>{label}</span>
        <span className="text-white">{value.toFixed(2)}</span>
      </span>
      <input
        className="w-full accent-[#b5d6dc]"
        type="range"
        min={0}
        max={1}
        step=".01"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}
