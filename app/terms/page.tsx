'use client';

import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { useState, useEffect } from 'react';

const tocItems = [
  { id: 'acceptance', label: 'ACCEPTANCE' },
  { id: 'definitions', label: 'DEFINITIONS' },
  { id: 'intellectual-property', label: 'INTELLECTUAL PROPERTY' },
  { id: 'systems', label: 'SYSTEMS & ACCESS' },
  { id: 'liability', label: 'LIABILITY' },
  { id: 'termination', label: 'TERMINATION' },
  { id: 'governing-law', label: 'GOVERNING LAW' },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const sections = tocItems.map(item => ({
        id: item.id,
        top: document.getElementById(item.id)?.offsetTop || 0,
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].top <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SiteNav />
      <main className="relative">
        <div className="relative z-10">
          {/* Header */}
          <section className="border-b hairline px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-[1600px]">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] tracking-tech text-ice/80">LEGAL</p>
                  <h1 className="mt-4 font-display text-4xl tracking-[-.06em] text-white md:text-5xl">
                    Terms of Engagement
                  </h1>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/45">
                  These terms govern your interaction with Ooryon's systems, platforms, and physical intelligence products. By accessing our systems, you agree to the following operational parameters.
                </p>
              </div>
            </div>
          </section>

          {/* Terms content */}
          <section className="px-5 py-24 md:px-10 md:py-32">
            <div className="mx-auto max-w-[1600px]">
              <div className="grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-[1fr_2fr]">
                {/* Sidebar - sticky */}
                <div className="md:sticky md:top-32 md:self-start">
                  <div className="border-t hairline pt-6 md:border-l md:border-t-0 md:pl-10">
                    <nav className="flex flex-col gap-4 text-[10px] tracking-tech text-white/45">
                      {tocItems.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`transition-colors ${activeSection === item.id ? 'text-ice' : 'hover:text-white'}`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-20">
                  <div id="acceptance" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Acceptance of Terms</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        By accessing or using any Ooryon system, platform, API, or physical product, you enter into a binding agreement with Ooryon Technologies. These terms apply to all users, integrators, researchers, and partners.
                      </p>
                      <p>
                        If you do not agree to these terms, you are prohibited from accessing or using our systems. We reserve the right to update these terms at any time without prior notice. Continued use constitutes acceptance of modified terms.
                      </p>
                    </div>
                  </div>

                  <div id="definitions" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Definitions</h2>
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        { term: 'System', def: 'Any software, firmware, or hardware product developed or distributed by Ooryon.' },
                        { term: 'Intelligence', def: 'Machine learning models, neural networks, or algorithmic systems deployed by Ooryon.' },
                        { term: 'Physical Medium', def: 'Robots, autonomous vehicles, manufacturing equipment, or any physical manifestation of Ooryon intelligence.' },
                        { term: 'Simulation Environment', def: 'Digital twin platforms, physics engines, or virtual testing frameworks provided by Ooryon.' },
                        { term: 'User Data', def: 'Any data uploaded, generated, or processed through Ooryon systems by the user or their agents.' },
                        { term: 'Platform', def: 'The Ooryon ecosystem including web interfaces, APIs, SDKs, and documentation.' },
                      ].map((item) => (
                        <div key={item.term} className="border-t hairline pt-4">
                          <h3 className="font-display text-lg tracking-[-.03em] text-white">{item.term}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/45">{item.def}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="intellectual-property" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Intellectual Property</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        All Ooryon systems, including but not limited to source code, model architectures, training datasets, hardware designs, and documentation, are the exclusive property of Ooryon Technologies and are protected by international copyright, patent, and trade secret laws.
                      </p>
                      <p>
                        Users retain ownership of their User Data. By uploading data to Ooryon systems, you grant us a limited, non-exclusive license to process that data solely for the purpose of providing and improving our services.
                      </p>
                      <p>
                        Reverse engineering, decompilation, or attempt to extract underlying models or algorithms from any Ooryon system is strictly prohibited and will result in immediate termination of access and potential legal action.
                      </p>
                    </div>
                  </div>

                  <div id="systems" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Systems & Access</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        Ooryon provides access to its systems on an as-is basis. We do not guarantee uninterrupted operation, error-free performance, or compatibility with all environments. Physical systems operate in dynamic environments and may behave unpredictably under untested conditions.
                      </p>
                      <p>
                        Users are responsible for ensuring safe deployment, proper environmental controls, and compliance with local regulations when operating Ooryon physical systems. We strongly recommend staged deployment and human oversight for all autonomous operations.
                      </p>
                      <p>
                        API rate limits, computational resources, and simulation credits are subject to fair use policies and may be adjusted based on system capacity and demand.
                      </p>
                    </div>
                  </div>

                  <div id="liability" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Limitation of Liability</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        Ooryon Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or physical damage resulting from the use or inability to use our systems.
                      </p>
                      <p>
                        Our total liability to you for any claims arising from these terms or the use of our systems shall not exceed the amount paid by you to Ooryon in the twelve months preceding the claim.
                      </p>
                      <p>
                        Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other matter that cannot be excluded by law.
                      </p>
                    </div>
                  </div>

                  <div id="termination" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Termination</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        Either party may terminate access to Ooryon systems with 30 days written notice. Immediate termination may occur for breach of these terms, unauthorized access attempts, or use of systems for illegal activities.
                      </p>
                      <p>
                        Upon termination, all licenses granted under these terms shall cease, and you must delete all copies of Ooryon software and documentation in your possession or control.
                      </p>
                    </div>
                  </div>

                  <div id="governing-law" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Governing Law</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Ooryon Technologies is registered, without regard to conflict of law principles.
                      </p>
                      <p>
                        Any disputes arising from these terms or the use of our systems shall be resolved through arbitration in accordance with the rules of the relevant arbitration institution, unless otherwise agreed by the parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal navigation */}
          <section className="border-t hairline px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-[1600px]">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-[10px] tracking-tech text-ice/80">NAVIGATION</p>
                  <h3 className="mt-4 font-display text-2xl tracking-[-.04em] text-white md:text-3xl">Legal Documents</h3>
                </div>
                <div className="flex flex-col gap-4 md:w-[400px]">
                  <Link href="/privacy" className="group flex items-center justify-between border-t hairline py-4 transition-colors hover:border-ice/40">
                    <div>
                      <p className="text-[10px] tracking-tech text-white/45">PRIVACY</p>
                      <p className="mt-1 font-display text-lg tracking-[-.03em] text-white/70 transition-colors group-hover:text-white">Privacy Protocol</p>
                    </div>
                    <span className="text-[10px] tracking-tech text-white/30 transition-colors group-hover:text-ice">VIEW →</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
