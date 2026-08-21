'use client';

import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { useState, useEffect } from 'react';

const tocItems = [
  { id: 'collection', label: 'COLLECTION' },
  { id: 'usage', label: 'USAGE' },
  { id: 'storage', label: 'STORAGE' },
  { id: 'sharing', label: 'SHARING' },
  { id: 'rights', label: 'YOUR RIGHTS' },
  { id: 'cookies', label: 'COOKIES' },
  { id: 'contact', label: 'CONTACT' },
];

export default function PrivacyPage() {
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
                  <p className="text-[10px] tracking-tech text-ice/80">PROTOCOL</p>
                  <h1 className="mt-4 font-display text-4xl tracking-[-.06em] text-white md:text-5xl">
                    Privacy Protocol
                  </h1>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/45">
                  We treat data as a physical resource - something to be measured, protected, and managed with precision. This protocol describes what we collect, why we collect it, and how we secure it.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy content */}
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
                  <div id="collection" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Data Collection</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        Ooryon collects data necessary to operate, maintain, and improve our systems. This includes account credentials, system configuration preferences, simulation parameters, and usage telemetry.
                      </p>
                      <p>
                        Physical systems may generate additional data streams: sensor readings, actuator states, environmental conditions, and operational logs. This data is treated with the same security protocols as all other user information.
                      </p>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="border-t hairline pt-4">
                          <h3 className="font-display text-lg tracking-[-.03em] text-white">Account Data</h3>
                          <p className="mt-2 text-sm leading-6 text-white/45">Email, organization, role, and authentication credentials. Encrypted at rest and in transit.</p>
                        </div>
                        <div className="border-t hairline pt-4">
                          <h3 className="font-display text-lg tracking-[-.03em] text-white">System Data</h3>
                          <p className="mt-2 text-sm leading-6 text-white/45">Configuration parameters, simulation history, model metadata, and project artifacts.</p>
                        </div>
                        <div className="border-t hairline pt-4">
                          <h3 className="font-display text-lg tracking-[-.03em] text-white">Telemetry Data</h3>
                          <p className="mt-2 text-sm leading-6 text-white/45">Anonymized performance metrics, error rates, and feature usage statistics.</p>
                        </div>
                        <div className="border-t hairline pt-4">
                          <h3 className="font-display text-lg tracking-[-.03em] text-white">Physical Data</h3>
                          <p className="mt-2 text-sm leading-6 text-white/45">Sensor readings, actuator states, and operational logs from deployed physical systems.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="usage" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Data Usage</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        Data is used solely for the purpose of providing, maintaining, and improving Ooryon services. We do not sell personal data to third parties. We do not use data for purposes unrelated to the service without explicit consent.
                      </p>
                      <p>
                        Simulation data is used to improve model accuracy and system performance. Physical system data is used to enhance safety protocols, predictive maintenance algorithms, and operational reliability.
                      </p>
                    </div>
                  </div>

                  <div id="storage" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Data Storage</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        All data is stored in secure, geographically distributed data centers with redundant backups. Encryption is applied at the storage layer using AES-256 standards. Data in transit is protected by TLS 1.3.
                      </p>
                      <p>
                        Data retention periods are determined by operational necessity and legal requirements. Users may request data deletion at any time through account settings or by contacting our data protection officer.
                      </p>
                    </div>
                  </div>

                  <div id="sharing" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Data Sharing</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        Ooryon does not share personal data with third parties except as necessary to provide services (e.g., cloud infrastructure providers under strict data processing agreements) or as required by law.
                      </p>
                      <p>
                        Aggregated, anonymized data may be used for research purposes or published in technical documentation to advance the field of physical AI. No individual user can be identified from such datasets.
                      </p>
                    </div>
                  </div>

                  <div id="rights" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Your Rights</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        You have the right to access, correct, or delete your personal data. You may export all your data in standard formats at any time. You may object to processing or withdraw consent where applicable.
                      </p>
                      <p>
                        To exercise these rights, contact our Data Protection Officer at privacy@ooryon.com. We will respond within 30 days.
                      </p>
                    </div>
                  </div>

                  <div id="cookies" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Cookie Protocol</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        Ooryon uses cookies and similar technologies to operate, secure, and improve our platform. Cookies are classified into four categories: Essential Systems, Simulation Cache, Telemetry, and Engineering Preferences.
                      </p>
                      <p>
                        Essential cookies are required for platform operation and cannot be disabled. All other categories are optional and may be configured through the Cookie Configuration Interface available on first visit.
                      </p>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {[
                          { name: 'Essential Systems', purpose: 'Authentication, session management, security tokens' },
                          { name: 'Simulation Cache', purpose: 'Local storage of design parameters and simulation state' },
                          { name: 'Telemetry', purpose: 'Performance monitoring and error tracking' },
                          { name: 'Engineering Preferences', purpose: 'UI customization and experimental feature flags' },
                        ].map((cookie) => (
                          <div key={cookie.name} className="border-t hairline pt-4">
                            <h3 className="font-display text-lg tracking-[-.03em] text-white">{cookie.name}</h3>
                            <p className="mt-2 text-sm leading-6 text-white/45">{cookie.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div id="contact" className="border-t hairline pt-10">
                    <h2 className="font-display text-4xl tracking-[-.06em] text-white md:text-5xl">Contact</h2>
                    <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">
                      <p>
                        For privacy-related inquiries, contact our Data Protection Officer:
                      </p>
                      <p className="font-display text-xl tracking-[-.03em] text-white">
                        privacy@ooryon.com
                      </p>
                      <p>
                        Ooryon Technologies<br />
                        [REDACTED ADDRESS]<br />
                        [REDACTED CITY], [REDACTED COUNTRY]
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
                  <Link href="/terms" className="group flex items-center justify-between border-t hairline py-4 transition-colors hover:border-ice/40">
                    <div>
                      <p className="text-[10px] tracking-tech text-white/45">TERMS</p>
                      <p className="mt-1 font-display text-lg tracking-[-.03em] text-white/70 transition-colors group-hover:text-white">Terms of Engagement</p>
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
