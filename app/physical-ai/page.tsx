'use client';

import { useEffect, useState } from 'react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { VideoScene } from '@/components/VideoScene';
import { ScrollRail } from '@/components/ScrollRail';
import { Atmosphere } from '@/components/Atmosphere';
import { useScrollProgress } from '@/hooks/use-scroll';

const loop = [
  { id: '01', label: 'PERCEIVE', title: 'THE WORLD ARRIVES AS SIGNAL.', desc: 'Sensors convert the environment into data. Light, force, position, and texture become a model of reality.' },
  { id: '02', label: 'REASON', title: 'INTENT BECOMES A MODEL.', desc: 'The system builds a physical model of what is, and what could be.' },
  { id: '03', label: 'SIMULATE', title: 'EVERY ACTION MEETS CONSEQUENCE.', desc: 'Possible futures are tested in simulation before any move is made.' },
  { id: '04', label: 'DECIDE', title: 'ONE PATH IS CHOSEN.', desc: 'The system selects the action most likely to succeed in the physical world.' },
  { id: '05', label: 'ACT', title: 'THE MACHINE MOVES.', desc: 'The decision becomes motion. The world is changed.' },
  { id: '06', label: 'LEARN', title: 'REALITY RETURNS AS INTELLIGENCE.', desc: 'The outcome is fed back. The model improves. The next decision is sharper.' },
];

export default function PhysicalAIPage() {
  const progress = useScrollProgress();
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(Math.min(loop.length - 1, Math.floor(progress * loop.length * 0.99)));
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
            { color: '#1a4a52' },
          ]}
        /> */}
         {/* Fixed central machine stage */}
        <div className="fixed inset-0 z-0">
          <VideoScene mode="solid" videoSrc="/assets/robot.MP4" />
        </div>

        {/* Scroll narrative */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="flex min-h-screen items-end px-5 pb-16 pt-36 md:px-10 md:pb-24">
            <div className="relative z-10">
              <h1 className="font-display max-w-5xl text-[14vw] leading-[.76] tracking-[-.1em] md:text-[11vw]">
                INTELLIGENCE<br />THAT ACTS.
              </h1>
            </div>
          </section>

          {/* Loop stages */}
          {loop.map((stage, i) => (
            <section key={stage.label} className="relative flex min-h-screen items-center px-5 md:px-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-transparent" />
              <div className={`relative z-10 w-full max-w-xl ${i % 2 === 0 ? 'md:ml-auto md:mr-20 md:text-right' : 'md:ml-20'}`}>
                <div className={`mb-6 flex items-center gap-4 ${i % 2 === 0 ? 'justify-end' : ''}`}>
                  {i % 2 === 0 ? (
                    <>
                      <span className="text-[10px] tracking-tech text-white/45">{stage.label}</span>
                      <div className="h-px w-12 bg-ice/40" />
                    </>
                  ) : (
                    <>
                      <span className="text-[10px] tracking-tech text-white/45">{stage.label}</span>
                      <div className="h-px w-12 bg-ice/40" />
                    </>
                  )}
                </div>
                <h2 className="font-display text-4xl leading-[.92] tracking-[-.07em] text-white md:text-6xl">{stage.title}</h2>
                <p className="mt-6 text-sm leading-6 text-white/45">{stage.desc}</p>
              </div>
            </section>
          ))}

          {/* Systems list */}
          <section className="relative px-5 py-40 md:px-10 md:py-64">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,126,134,.12),transparent_45%)]" />
            <div className="relative mx-auto max-w-[1600px]">
              <p className="mb-12 text-[10px] tracking-tech text-white/40">SYSTEMS WE BUILD</p>
              <div className="grid gap-4 text-[11px] tracking-tech text-white/55 md:grid-cols-5">
                {['ROBOTS', 'VEHICLES', 'MACHINES', 'AUTONOMOUS SYSTEMS', 'INDUSTRIAL EQUIPMENT'].map((label) => (
                  <div key={label} className="border-b hairline pb-5 transition-colors hover:text-white">{label}</div>
                ))}
              </div>
              <h2 className="mt-32 max-w-5xl font-display text-5xl leading-[.88] tracking-[-.08em] md:text-8xl">
                Ooryon builds AI that can exist in the physical world.
              </h2>
            </div>
          </section>

          <SiteFooter />
        </div>

        {/* Loop rail */}
      </main>
    </Atmosphere>
  );
}
