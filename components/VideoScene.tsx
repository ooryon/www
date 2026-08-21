'use client';

import { useMemo } from 'react';

export type ArtifactMode = 'wireframe' | 'mesh' | 'solid' | 'optimized' | 'product';

interface SceneProps {
  mode: ArtifactMode;
  params?: { aero: 
    number; weight: 
    number; strength: 
    number; size: number 
  };
  scrollProgress?: number;
  autoRotate?: boolean;
  accentColor?: string;
  videoSrc?: string;
  videos?: string[];
}

const modeOverlay: Record<ArtifactMode, string> = {
  wireframe: 'rgba(21, 25, 27, 0.45)',
  mesh: 'rgba(21, 25, 27, 0.35)',
  solid: 'rgba(14, 18, 19, 0.4)',
  optimized: 'rgba(10, 13, 14, 0.5)',
  product: 'rgba(12, 15, 16, 0.45)',
};

const modeFilter: Record<ArtifactMode, string> = {
  wireframe: 'saturate(0.6) brightness(0.75) contrast(1.1)',
  mesh: 'saturate(0.75) brightness(0.8) contrast(1.05)',
  solid: 'saturate(0.85) brightness(0.85) contrast(1.0)',
  optimized: 'saturate(0.55) brightness(0.7) contrast(1.2)',
  product: 'saturate(0.8) brightness(0.82) contrast(1.05) hue-rotate(10deg)',
};

const defaultVideo = '/assets/car.MP4';

export function VideoScene({ mode, accentColor = '#b5d6dc', videoSrc, videos, scrollProgress = 0 }: SceneProps) {
  const overlay = useMemo(() => modeOverlay[mode] || modeOverlay.solid, [mode]);
  const filter = useMemo(() => modeFilter[mode] || modeFilter.solid, [mode]);

  const src = useMemo(() => {
    if (videos && videos.length > 0) {
      const idx = Math.min(videos.length - 1, Math.floor(scrollProgress * videos.length));
      return videos[idx] || defaultVideo;
    }
    return videoSrc || defaultVideo;
  }, [videos, scrollProgress, videoSrc]);

  return (
    <div className="fixed inset-0 z-0">
      <video
        key={src}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ backgroundColor: overlay }} />
      {accentColor && (
        <div
          className="absolute inset-0 mix-blend-overlay opacity-20"
          style={{ backgroundColor: accentColor }}
        />
      )}
    </div>
  );
}
