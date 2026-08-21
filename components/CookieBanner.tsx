'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const CONSENT_KEY = 'ooryon-cookie-consent';

type Consent = 'accepted' | 'rejected' | null;

const categories = [
  { key: 'essential', title: 'Essential Systems', desc: 'Core runtime. Cannot be disabled. Required for platform operation, authentication, and security.', locked: true },
  { key: 'simulation', title: 'Simulation Cache', desc: 'Stores design parameters locally for faster iteration. Enables offline simulation capabilities and reduces API calls.', locked: false },
  { key: 'analytics', title: 'Telemetry', desc: 'Anonymized performance metrics. No personal data. Helps us improve system reliability and user experience.', locked: false },
  { key: 'engineering', title: 'Engineering Preferences', desc: 'UI customization and experimental features. Enables advanced visualization modes and beta tools.', locked: false },
];

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [hidden, setHidden] = useState(false);
  const [prefs, setPrefs] = useState({
    essential: true,
    simulation: false,
    analytics: false,
    engineering: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
        setHidden(true);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      // ignore
    }
    setConsent('accepted');
    setHidden(true);
  };

  const handleReject = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'rejected');
    } catch {
      // ignore
    }
    setConsent('rejected');
    setHidden(true);
  };

  const togglePref = (key: string) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (hidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t hairline bg-[#050607]/95 px-5 py-6 backdrop-blur-md md:px-10 md:py-8">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] tracking-tech text-ice/80">CONFIGURATION</p>
            <h2 className="mt-3 font-display text-2xl tracking-[-.04em] text-white md:text-3xl">
              System Permissions
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
              This platform operates like any engineered system: it requires certain baseline permissions to function, and optional modules that enhance capability.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReject}
              className="border border-white/10 px-6 py-2 text-center text-[11px] tracking-tech text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white/80"
            >
              REJECT ALL
            </button>
            <button
              onClick={handleAccept}
              className="group relative border border-ice/30 bg-ice/10 px-6 py-3 text-center text-[11px] tracking-tech text-ice transition-all duration-300 hover:bg-ice/20 hover:border-ice/50"
            >
              <span className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
              <span className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
              ACCEPT ALL
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 grid grid-cols-1 gap-px md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className={`group relative border-t hairline bg-[#050607]/40 px-6 py-5 backdrop-blur-sm transition-all duration-700 hover:border-ice/30 hover:bg-[#0a0d0e]/60 md:border-l md:border-t`}
            >
              <div className="absolute left-0 top-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
              <div className="absolute left-0 top-0 h-0 w-px bg-ice transition-all duration-500 group-hover:h-full" />
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-tech text-ice/80">{cat.key.toUpperCase()}</span>
                    {cat.locked && <span className="text-[9px] tracking-tech text-white/30">LOCKED</span>}
                  </div>
                  <h3 className="mt-2 font-display text-lg tracking-[-.03em] text-white/70 transition-all duration-500 group-hover:text-white md:text-xl">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/45 transition-colors duration-500 group-hover:text-white/70">
                    {cat.desc}
                  </p>
                </div>
                {!cat.locked && (
                  <div className="relative mt-1 ml-4">
                    <button
                      onClick={() => togglePref(cat.key)}
                      className={`h-5 w-9 rounded-full transition-colors duration-300 ${prefs[cat.key as keyof typeof prefs] ? 'bg-ice' : 'bg-white/10'}`}
                    >
                      <div className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${prefs[cat.key as keyof typeof prefs] ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
