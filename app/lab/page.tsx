'use client';

import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { VideoScene } from '@/components/VideoScene';
import { ScrollRail } from '@/components/ScrollRail';
import { Atmosphere } from '@/components/Atmosphere';
import { useScrollProgress, useDeviceTier } from '@/hooks/use-scroll';

const inventions = [
  {
    name: 'VANTA',
    type: 'AUTONOMOUS TERRAIN SYSTEM',
    detail: 'An adaptive platform for landscapes that have no roads. It perceives terrain, simulates grip, and moves with intent.',
    specs: ['All-terrain autonomy', 'Real-time surface analysis', 'Adaptive suspension'],
    phases: ['DESIGNED', 'SIMULATED', 'OPTIMIZED', 'PROTOTYPED'],
  },
  {
    name: 'NEXUS',
    type: 'PHYSICAL AI WORKSTATION',
    detail: 'A machine that translates intent into engineered matter. It designs, tests, and manufactures within a single intelligent loop.',
    specs: ['Generative design engine', 'In-process inspection', 'Closed-loop manufacturing'],
    phases: ['DESIGNED', 'SIMULATED', 'OPTIMIZED', 'PROTOTYPED'],
  },
  {
    name: 'ORBITAL',
    type: 'MOTION INTELLIGENCE',
    detail: 'A new language for machines that move through uncertainty. Every path is predicted before it is taken.',
    specs: ['Predictive kinematics', 'Dynamic obstacle avoidance', 'Trajectory optimization'],
    phases: ['DESIGNED', 'SIMULATED', 'OPTIMIZED', 'PROTOTYPED'],
  },
  {
    name: 'STRATA',
    type: 'ADAPTIVE MACHINE',
    detail: 'A structure that reshapes itself to the task. It learns the load and reconfigures its geometry in real time.',
    specs: ['Morphing structure', 'Load-aware reconfiguration', 'Self-healing materials'],
    phases: ['DESIGNED', 'SIMULATED', 'OPTIMIZED', 'PROTOTYPED'],
  },
];

const capabilities = [
  { title: 'PERCEPTION', desc: 'Sensors that understand the environment as a coherent model, not just raw data.' },
  { title: 'REASONING', desc: 'Physics-informed intelligence that simulates outcomes before acting.' },
  { title: 'ACTION', desc: 'Actuation systems that translate digital decisions into precise physical motion.' },
  { title: 'LEARNING', desc: 'Continuous improvement from every interaction with the real world.' },
];

export default function LabPage() {
  const progress = useScrollProgress();
  const tier = useDeviceTier();

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
        {/* Fixed spatial environment */}
        <div className="fixed inset-0 z-0">
          {tier === 'high' ? (
            <VideoScene mode="solid" videoSrc="/assets/industrial.MP4" />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="font-display text-[18vw] tracking-[-.1em] text-white/8">L</div>
            </div>
          )}
        </div>

        {/* Scroll narrative */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="flex min-h-screen items-end px-5 pb-16 pt-36 md:px-10 md:pb-24">
            <div className="relative z-10">
              <h1 className="font-display max-w-5xl text-[14vw] leading-[.76] tracking-[-.1em] md:text-[11vw]">
                FROM SIMULATION<br />TO REALITY.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/45">
                We don't just design machines. We build the intelligence that makes them think, adapt, and evolve in the physical world.
              </p>
            </div>
          </section>

          {/* Capabilities */}
          <section className="border-y hairline px-5 py-24 md:px-10 md:py-32">
            <div className="mx-auto max-w-[1600px]">
              <p className="mb-16 text-[10px] tracking-tech text-white/40">HOW WE WORK</p>
              <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((cap, i) => (
                  <div
                    key={cap.title}
                    className="group relative border-t hairline bg-[#050607]/40 px-6 py-10 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:border-l"
                  >
                    <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                    <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                    <span className="mb-4 block text-[10px] tracking-tech text-white/20 transition-colors duration-500 group-hover:text-ice/60">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl tracking-[-.04em] text-white/70 transition-all duration-500 group-hover:text-white md:text-2xl">
                      {cap.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/45 transition-colors duration-500 group-hover:text-white/70">
                      {cap.desc}
                    </p>
                    <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Invention scenes */}
          {inventions.map((inv, i) => (
            <section key={inv.name} className="relative flex min-h-screen items-end px-5 pb-24 md:px-10 md:pb-32">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-transparent" />
              <div className="relative z-10 w-full">
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[10px] tracking-tech text-white/45">{inv.type}</span>
                </div>
                <h2 className="font-display text-6xl leading-[.86] tracking-[-.07em] text-white md:text-[9vw]">{inv.name}</h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-white/45">{inv.detail}</p>

                {/* Specs */}
                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {inv.specs.map((spec) => (
                    <div key={spec} className="border-t hairline pt-4">
                      <span className="text-xs tracking-tech text-ice/80">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Phase track */}
                <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
                  {inv.phases.map((phase, pi) => (
                    <div key={phase} className="border-t hairline pt-4">
                      <span className="text-[10px] tracking-tech text-ice">0{pi + 1}</span>
                      <h3 className="mt-3 font-display text-2xl tracking-[-.05em] text-white md:text-3xl">{phase}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Closing */}
          <section className="relative px-5 py-40 md:px-10 md:py-64">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(93,143,151,.1),transparent_46%)]" />
            <div className="relative mx-auto max-w-[1600px]">
              <h2 className="font-display max-w-4xl text-5xl leading-[.88] tracking-[-.07em] md:text-8xl">
                Every machine we build is a proof of concept for the next.
              </h2>
              <p className="mt-12 max-w-xl text-base leading-7 text-white/45">
                We don't separate intelligence from hardware. They are the same system. The body is the mind's way of changing the world.
              </p>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </Atmosphere>
  );
}
