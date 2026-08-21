'use client';

import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { VideoScene } from '@/components/VideoScene';
import { ScrollRail } from '@/components/ScrollRail';
import { Atmosphere } from '@/components/Atmosphere';
import { Emblem } from '@/components/Emblem';
import { useScrollProgress } from '@/hooks/use-scroll';

const principles = [
  ['01', 'We begin with physical constraints.'],
  ['02', 'We use intelligence to find new outcomes.'],
  ['03', 'We build what the model makes possible.'],
];

const disciplines = [
  'PHYSICAL AI',
  'COMPUTATIONAL DESIGN',
  'ENGINEERING SIMULATION',
  'DIGITAL TWINS',
  'ROBOTICS',
  'AUTONOMOUS SYSTEMS',
  'ADVANCED MANUFACTURING',
];

export default function AboutPage() {
  const progress = useScrollProgress();
  return (
    <Atmosphere>
      <SiteNav />
      <main className="relative">
        {/* <ScrollRail
          sections={[
            { color: '#b5d6dc' },
            { color: '#7fa8af' },
            { color: '#5a9098' },
          ]}
        /> */}
        {/* Fixed ambient backdrop */}
        <div className="fixed inset-0 z-0">
          <VideoScene mode="solid" videoSrc="/assets/ocean.MP4" />
          <div
            className="absolute inset-0 transition-all duration-1000"
            style={{ background: `radial-gradient(ellipse at 50% ${30 + progress * 40}%, rgba(93,143,151,.12), transparent 50%)` }}
          />
        </div>

        <div className="relative z-10">
          {/* Hero */}
          <section className="flex min-h-screen items-end px-5 pb-16 pt-36 md:px-10 md:pb-24">
            <div className="relative z-10">
              <h1 className="font-display max-w-6xl text-[14vw] leading-[.76] tracking-[-.1em] md:text-[11vw]">
                THE WORLD IS<br />OUR MEDIUM.
              </h1>
            </div>
          </section>

          {/* Statement */}
          <section className="px-5 py-32 md:px-10 md:py-52">
            <div className="mx-auto grid max-w-[1600px] gap-20 md:grid-cols-[.4fr_1.6fr]">
              <Emblem className="h-16 w-24" />
              <div>
                <p className="font-display text-4xl leading-[.95] tracking-[-.06em] md:text-7xl">
                  Ooryon exists at the point where intelligence becomes matter.
                </p>
                <p className="mt-12 max-w-lg text-base leading-7 text-white/45">
                  We are engineers, designers, physicists, and builders. We believe the defining technology of this century will not live inside a screen. It will move through the world around us.
                </p>
              </div>
            </div>
          </section>

          {/* Disciplines */}
          <section className="border-b hairline px-5 py-24 md:px-10 md:py-32">
            <div className="mx-auto max-w-[1600px]">
              <div className="grid grid-cols-1 gap-px md:grid-cols-3">
                {/* Row 1 */}
                {/* Large card - PHYSICAL AI */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-8 py-12 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:row-span-2 md:border-l-0">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <span className="mb-4 block text-[10px] tracking-tech text-white/20 transition-colors duration-500 group-hover:text-ice/60">
                    01
                  </span>
                  <span className="font-display text-2xl tracking-[-.04em] text-white/70 transition-all duration-500 group-hover:text-white md:text-3xl">
                    PHYSICAL AI
                  </span>
                  <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Standard card - COMPUTATIONAL DESIGN */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-6 py-10 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:border-l">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <span className="mb-4 block text-[10px] tracking-tech text-white/20 transition-colors duration-500 group-hover:text-ice/60">
                    02
                  </span>
                  <span className="font-display text-xl tracking-[-.04em] text-white/70 transition-all duration-500 group-hover:text-white md:text-2xl">
                    COMPUTATIONAL DESIGN
                  </span>
                  <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Standard card - ENGINEERING SIMULATION */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-6 py-10 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:border-l">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <span className="mb-4 block text-[10px] tracking-tech text-white/20 transition-colors duration-500 group-hover:text-ice/60">
                    03
                  </span>
                  <span className="font-display text-xl tracking-[-.04em] text-white/70 transition-all duration-500 group-hover:text-white md:text-2xl">
                    ENGINEERING SIMULATION
                  </span>
                  <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Row 2 */}
                {/* Standard card - DIGITAL TWINS */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-6 py-10 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:border-l">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <span className="mb-4 block text-[10px] tracking-tech text-white/20 transition-colors duration-500 group-hover:text-ice/60">
                    04
                  </span>
                  <span className="font-display text-xl tracking-[-.04em] text-white/70 transition-all duration-500 group-hover:text-white md:text-2xl">
                    DIGITAL TWINS
                  </span>
                  <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Large card - ROBOTICS */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-8 py-12 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:row-span-2 md:border-l">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <span className="mb-4 block text-[10px] tracking-tech text-white/20 transition-colors duration-500 group-hover:text-ice/60">
                    05
                  </span>
                  <span className="font-display text-2xl tracking-[-.04em] text-white/70 transition-all duration-500 group-hover:text-white md:text-3xl">
                    ROBOTICS
                  </span>
                  <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Row 3 */}
                {/* Standard card - AUTONOMOUS SYSTEMS */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-6 py-10 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:col-span-1 md:border-l">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <span className="mb-4 block text-[10px] tracking-tech text-white/20 transition-colors duration-500 group-hover:text-ice/60">
                    06
                  </span>
                  <span className="font-display text-xl tracking-[-.04em] text-white/70 transition-all duration-500 group-hover:text-white md:text-2xl">
                    AUTONOMOUS SYSTEMS
                  </span>
                  <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Standard card - ADVANCED MANUFACTURING (ROBOTICS continues in col 2) */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-6 py-10 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:col-span-1 md:border-l">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <span className="mb-4 block text-[10px] tracking-tech text-white/20 transition-colors duration-500 group-hover:text-ice/60">
                    07
                  </span>
                  <span className="font-display text-xl tracking-[-.04em] text-white/70 transition-all duration-500 group-hover:text-white md:text-2xl">
                    ADVANCED MANUFACTURING
                  </span>
                  <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </div>
          </section>

          {/* Principles */}
          <section className="px-5 py-32 md:px-10 md:py-52">
            <div className="mx-auto max-w-[1600px]">
              <div className="grid grid-cols-1 gap-px md:grid-cols-2">
                {/* Left column: two small cards stacked */}
                <div className="flex flex-col">
                  <div className="group relative border-t hairline bg-[#050607]/40 px-6 py-10 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60">
                    <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                    <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                    <p className="font-display text-xl leading-[1.1] tracking-[-.03em] text-white/70 transition-all duration-500 group-hover:text-white md:text-2xl">
                      We use intelligence to find new outcomes.
                    </p>
                    <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                  </div>
                  <div className="group relative border-t hairline bg-[#050607]/40 px-6 py-10 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60">
                    <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                    <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                    <p className="font-display text-xl leading-[1.1] tracking-[-.03em] text-white/70 transition-all duration-500 group-hover:text-white md:text-2xl">
                      We build what the model makes possible.
                    </p>
                    <div className="mt-6 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>

                {/* Right column: one large card spanning both rows */}
                <div className="group relative border-t hairline bg-[#050607]/40 px-8 py-12 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:border-l">
                  <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
                  <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
                  <p className="font-display text-2xl leading-[1.1] tracking-[-.03em] text-white/70 transition-all duration-500 group-hover:text-white md:text-3xl md:leading-[1.05]">
                    We begin with physical constraints.
                  </p>
                  <div className="mt-8 h-px w-8 bg-ice/40 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </Atmosphere>
  );
}
